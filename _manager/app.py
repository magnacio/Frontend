
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, send_from_directory, send_file
from werkzeug.utils import secure_filename
from pathlib import Path
import os

from core import (
    MANAGER_DIR, PROJECT_ROOT, UPLOAD_ALLOWED,
    scan_assignments, folder_choices, resolve_destination,
    safe_extract_zip, unique_path, generate_index,
    set_label, set_hidden, create_export, subject_dirs
)

app = Flask(__name__)
app.secret_key = "frontend-sla-manager-local-v2"


@app.route("/")
def dashboard():
    data = scan_assignments()
    return render_template("dashboard.html", data=data)


@app.route("/api/folders")
def api_folders():
    subject = request.args.get("subject", "")
    return jsonify(folder_choices(subject))


@app.route("/site/")
def public_index():
    return send_from_directory(PROJECT_ROOT, "index.html")


@app.route("/site/<path:filename>")
def public_file(filename):
    return send_from_directory(PROJECT_ROOT, filename)


@app.post("/upload")
def upload():
    subject = request.form.get("subject", "").strip()
    base_folder = request.form.get("base_folder", ".").strip() or "."
    new_folder = request.form.get("new_folder", "").strip()
    overwrite = request.form.get("overwrite") == "on"
    extract_zip = request.form.get("extract_zip") == "on"

    files = [f for f in request.files.getlist("files") if f and f.filename]
    if not files:
        flash("Choose at least one file or ZIP project.", "error")
        return redirect(url_for("dashboard"))

    try:
        destination = resolve_destination(subject, base_folder, new_folder)
    except Exception as exc:
        flash(str(exc), "error")
        return redirect(url_for("dashboard"))

    saved = 0
    extracted = 0
    skipped = 0

    for uploaded in files:
        original_name = Path(uploaded.filename).name
        suffix = Path(original_name).suffix.lower()

        if suffix not in UPLOAD_ALLOWED:
            skipped += 1
            continue

        safe_name = secure_filename(original_name)
        if not safe_name:
            skipped += 1
            continue

        if suffix == ".zip" and extract_zip:
            # If a specific new folder wasn't supplied, keep the ZIP project isolated.
            zip_destination = destination
            if not new_folder:
                zip_destination = destination / Path(safe_name).stem
                zip_destination.mkdir(parents=True, exist_ok=True)

            temp = MANAGER_DIR / f"_upload_{safe_name}"
            uploaded.save(temp)
            try:
                items = safe_extract_zip(temp, zip_destination, overwrite=overwrite)
                extracted += len(items)
            finally:
                temp.unlink(missing_ok=True)
            continue

        target = destination / safe_name
        if target.exists() and not overwrite:
            target = unique_path(destination, safe_name)

        uploaded.save(target)
        saved += 1

    generate_index(make_index_backup=True)

    message = f"Upload complete: {saved} file(s) saved"
    if extracted:
        message += f", {extracted} ZIP item(s) extracted"
    if skipped:
        message += f", {skipped} unsupported file(s) skipped"
    message += ". index.html was rebuilt automatically."
    flash(message, "success")
    return redirect(url_for("dashboard"))


@app.post("/rebuild")
def rebuild():
    data = generate_index(make_index_backup=True)
    flash(f"Scanned the project and rebuilt index.html with {data['total_links']} public assignment link(s).", "success")
    return redirect(url_for("dashboard"))


@app.post("/label")
def label():
    rel_path = request.form.get("path", "")
    label_value = request.form.get("label", "")
    target = (PROJECT_ROOT / rel_path).resolve()

    if not target.exists() or (target != PROJECT_ROOT and PROJECT_ROOT not in target.parents):
        flash("Assignment path was not found.", "error")
        return redirect(url_for("dashboard"))

    set_label(Path(rel_path).as_posix(), label_value)
    generate_index(make_index_backup=True)
    flash("Display name updated.", "success")
    return redirect(url_for("dashboard"))


@app.post("/hide")
def hide():
    rel_path = request.form.get("path", "")
    set_hidden(Path(rel_path).as_posix(), True)
    generate_index(make_index_backup=True)
    flash("Assignment hidden from the public index. The file was not deleted.", "success")
    return redirect(url_for("dashboard"))


@app.post("/unhide")
def unhide():
    rel_path = request.form.get("path", "")
    set_hidden(Path(rel_path).as_posix(), False)
    generate_index(make_index_backup=True)
    flash("Assignment restored to the public index.", "success")
    return redirect(url_for("dashboard"))


@app.post("/export")
def export():
    generate_index(make_index_backup=False)
    output = create_export()
    return send_file(output, as_attachment=True, download_name=output.name)


@app.route("/health")
def health():
    return {
        "ok": True,
        "project_root": str(PROJECT_ROOT),
        "subjects": subject_dirs(),
        "assignment_count": scan_assignments()["total_links"]
    }


if __name__ == "__main__":
    # Build the current homepage once on startup so the public preview is ready.
    generate_index(make_index_backup=False)
    print()
    print("=" * 68)
    print(" Frontend SLA Assignment Manager")
    print(f" Project root : {PROJECT_ROOT}")
    print(" Manager      : http://127.0.0.1:5000")
    print(" Public site  : http://127.0.0.1:5000/site/")
    print("=" * 68)
    print()
    app.run(host="127.0.0.1", port=5000, debug=False)
