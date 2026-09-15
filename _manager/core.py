
from pathlib import Path
from datetime import datetime
from jinja2 import Environment, FileSystemLoader, select_autoescape
import json
import os
import re
import shutil
import zipfile

MANAGER_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = Path(os.environ.get("FRONTEND_SLA_ROOT", MANAGER_DIR.parent)).resolve()
META_FILE = MANAGER_DIR / "metadata.json"
BACKUP_DIR = MANAGER_DIR / "backups"
EXPORT_DIR = MANAGER_DIR / "exports"
TEMPLATE_DIR = MANAGER_DIR / "templates"

EXCLUDED_DIRS = {
    ".git", "_manager", ".venv", "venv", "node_modules", "__pycache__",
    ".idea", ".vscode"
}
PUBLIC_LINK_SUFFIXES = {".html", ".htm", ".zip", ".pdf"}
UPLOAD_ALLOWED = {
    ".html", ".htm", ".css", ".js", ".mjs", ".json", ".txt",
    ".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".ico",
    ".mp3", ".wav", ".ogg", ".mp4", ".webm", ".pdf", ".zip",
    ".woff", ".woff2", ".ttf"
}
PREFERRED_SUBJECTS = ["Html", "HTML", "CSS", "Bootstrap", "Tailwind", "JS", "JavaScript"]


def project_name():
    return PROJECT_ROOT.name


def load_meta():
    if META_FILE.exists():
        try:
            return json.loads(META_FILE.read_text(encoding="utf-8"))
        except Exception:
            pass
    return {"labels": {}, "hidden": []}


def save_meta(meta):
    META_FILE.write_text(json.dumps(meta, indent=2, ensure_ascii=False), encoding="utf-8")


def is_hidden_part(part):
    return part.startswith(".") or part in EXCLUDED_DIRS


def safe_under_root(path):
    path = Path(path).resolve()
    return path == PROJECT_ROOT or PROJECT_ROOT in path.parents


def clean_display(value):
    value = re.sub(r"[_-]+", " ", value)
    value = re.sub(r"\s+", " ", value).strip()
    replacements = {
        "Html": "HTML", "Css": "CSS", "Js": "JS", "Api": "API",
        "Ui": "UI", "Ux": "UX", "Json": "JSON"
    }
    words = []
    for word in value.split():
        title = word.title()
        words.append(replacements.get(title, title))
    return " ".join(words)


def subject_dirs():
    result = []
    if not PROJECT_ROOT.exists():
        return result
    for item in PROJECT_ROOT.iterdir():
        if not item.is_dir() or is_hidden_part(item.name):
            continue
        result.append(item.name)

    order = {name.lower(): i for i, name in enumerate(PREFERRED_SUBJECTS)}
    return sorted(result, key=lambda x: (order.get(x.lower(), 999), x.lower()))


DAY_RE = re.compile(r"\bday[\s_\-]*0*(\d+)\b", re.I)


def detect_day(relative_path):
    # Prefer a directory containing "Day <number>"
    for part in relative_path.parts[:-1]:
        m = DAY_RE.search(part)
        if m:
            return int(m.group(1)), f"Day {int(m.group(1))}", part

    # Fall back to filename
    m = DAY_RE.search(relative_path.stem)
    if m:
        return int(m.group(1)), f"Day {int(m.group(1))}", relative_path.stem

    return 10**9, "Other", ""


def task_label(relative_path, meta):
    key = relative_path.as_posix()
    if key in meta.get("labels", {}):
        return meta["labels"][key]

    stem = relative_path.stem
    if stem.lower() in {"index", "main", "home"} and len(relative_path.parts) >= 2:
        return clean_display(relative_path.parent.name)

    # Keep task numbers readable: task1 -> Task 1
    stem = re.sub(r"(?i)\btask\s*0*(\d+)\b", r"Task \1", stem)
    stem = re.sub(r"(?i)\bchallenge\b", "Challenge", stem)
    return clean_display(stem)


def scan_assignments():
    meta = load_meta()
    hidden = set(meta.get("hidden", []))
    subjects = []
    total_links = 0
    html_count = 0

    for subject_name in subject_dirs():
        subject_root = PROJECT_ROOT / subject_name
        found = []

        for current, dirs, files in os.walk(subject_root):
            dirs[:] = [d for d in dirs if not is_hidden_part(d)]
            current_path = Path(current)

            for filename in files:
                path = current_path / filename
                if path.suffix.lower() not in PUBLIC_LINK_SUFFIXES:
                    continue

                rel = path.relative_to(PROJECT_ROOT)
                rel_key = rel.as_posix()
                if rel_key in hidden:
                    continue

                day_number, day_label, matched_part = detect_day(rel)
                found.append({
                    "path": rel_key,
                    "label": task_label(rel, meta),
                    "filename": filename,
                    "extension": path.suffix.lower(),
                    "day_number": day_number,
                    "day_label": day_label,
                    "folder": rel.parent.as_posix(),
                    "is_html": path.suffix.lower() in {".html", ".htm"},
                    "modified": datetime.fromtimestamp(path.stat().st_mtime).strftime("%Y-%m-%d %H:%M"),
                })
                total_links += 1
                if path.suffix.lower() in {".html", ".htm"}:
                    html_count += 1

        if not found:
            continue

        found.sort(key=lambda x: (x["day_number"], x["folder"].lower(), x["filename"].lower()))
        days = []
        current_key = None
        current_day = None
        for item in found:
            key = (item["day_number"], item["day_label"])
            if key != current_key:
                current_day = {
                    "number": item["day_number"],
                    "label": item["day_label"],
                    "tasks": []
                }
                days.append(current_day)
                current_key = key
            current_day["tasks"].append(item)

        subjects.append({
            "name": subject_name,
            "label": clean_display(subject_name),
            "days": days,
            "count": len(found)
        })

    return {
        "project": project_name(),
        "subjects": subjects,
        "subject_names": subject_dirs(),
        "total_links": total_links,
        "html_count": html_count,
        "generated_at": datetime.now().strftime("%d %b %Y · %I:%M %p")
    }


def folder_choices(subject):
    if subject not in subject_dirs():
        return []
    base = (PROJECT_ROOT / subject).resolve()
    result = [{"value": ".", "label": f"{subject} /"}]

    for current, dirs, _files in os.walk(base):
        dirs[:] = [d for d in dirs if not is_hidden_part(d)]
        current_path = Path(current)
        if current_path == base:
            continue
        rel = current_path.relative_to(base).as_posix()
        result.append({"value": rel, "label": f"{subject}/{rel}"})
        if len(result) >= 300:
            break

    result.sort(key=lambda x: (x["value"].count("/"), x["value"].lower()))
    return result


def make_backup():
    index = PROJECT_ROOT / "index.html"
    if not index.exists():
        return None
    BACKUP_DIR.mkdir(exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
    backup = BACKUP_DIR / f"index_{stamp}.html"
    shutil.copy2(index, backup)
    return backup


def generate_index(make_index_backup=True):
    data = scan_assignments()
    env = Environment(
        loader=FileSystemLoader(str(TEMPLATE_DIR)),
        autoescape=select_autoescape(["html", "xml"])
    )
    template = env.get_template("public_index.html")
    output = template.render(data=data)

    if make_index_backup:
        make_backup()

    (PROJECT_ROOT / "index.html").write_text(output, encoding="utf-8")
    return data


def validate_subject(subject):
    if subject not in subject_dirs():
        raise ValueError("Invalid subject folder.")
    return (PROJECT_ROOT / subject).resolve()


def resolve_destination(subject, base_folder=".", new_folder=""):
    subject_root = validate_subject(subject)

    base_folder = (base_folder or ".").strip().replace("\\", "/")
    base = (subject_root / base_folder).resolve()
    if base != subject_root and subject_root not in base.parents:
        raise ValueError("Invalid destination folder.")

    destination = base
    if new_folder.strip():
        # Allow nested new folders, but block ../ and absolute paths
        new_rel = Path(new_folder.strip().replace("\\", "/"))
        if new_rel.is_absolute() or ".." in new_rel.parts:
            raise ValueError("Invalid new folder name.")
        destination = (base / new_rel).resolve()

    if destination != subject_root and subject_root not in destination.parents:
        raise ValueError("Invalid destination folder.")

    destination.mkdir(parents=True, exist_ok=True)
    return destination


def unique_path(destination, name):
    candidate = destination / name
    if not candidate.exists():
        return candidate
    n = 2
    while True:
        alt = destination / f"{candidate.stem}-{n}{candidate.suffix}"
        if not alt.exists():
            return alt
        n += 1


def safe_extract_zip(zip_path, destination, overwrite=False):
    extracted = []
    root = destination.resolve()

    with zipfile.ZipFile(zip_path) as archive:
        for member in archive.infolist():
            if member.is_dir():
                continue

            raw = member.filename.replace("\\", "/")
            parts = [p for p in raw.split("/") if p not in ("", ".", "..")]
            if not parts:
                continue

            target = (root / Path(*parts)).resolve()
            if root not in target.parents and target != root:
                continue

            if target.suffix.lower() not in UPLOAD_ALLOWED:
                continue

            target.parent.mkdir(parents=True, exist_ok=True)
            if target.exists() and not overwrite:
                target = unique_path(target.parent, target.name)

            with archive.open(member) as src, open(target, "wb") as dst:
                shutil.copyfileobj(src, dst)
            extracted.append(target)

    return extracted


def set_label(rel_path, label):
    meta = load_meta()
    labels = meta.setdefault("labels", {})
    if label.strip():
        labels[rel_path] = label.strip()
    else:
        labels.pop(rel_path, None)
    save_meta(meta)


def set_hidden(rel_path, hidden=True):
    meta = load_meta()
    current = set(meta.setdefault("hidden", []))
    if hidden:
        current.add(rel_path)
    else:
        current.discard(rel_path)
    meta["hidden"] = sorted(current)
    save_meta(meta)


def create_export():
    EXPORT_DIR.mkdir(exist_ok=True)
    filename = f"{project_name()}_github_{datetime.now().strftime('%Y%m%d_%H%M%S')}.zip"
    output = EXPORT_DIR / filename

    with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as archive:
        for current, dirs, files in os.walk(PROJECT_ROOT):
            current_path = Path(current)
            dirs[:] = [d for d in dirs if d not in EXCLUDED_DIRS and not d.startswith(".")]

            # Never include manager itself in public export
            if current_path == MANAGER_DIR or MANAGER_DIR in current_path.parents:
                dirs[:] = []
                continue

            for file in files:
                path = current_path / file
                if MANAGER_DIR in path.parents:
                    continue
                rel = path.relative_to(PROJECT_ROOT)
                archive.write(path, rel)

    return output
