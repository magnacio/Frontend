# Frontend SLA Assignment Manager v2

This version is built specifically for a repository shaped like:

```text
Frontend_SLA/
├── .git/
├── Bootstrap/
├── CSS/
├── Html/
├── JS/
├── Tailwind/
├── index.html
└── _manager/       <-- copy this folder here
```

## Why this version is different

The **actual folders are the source of truth**.

There is no separate SQLite database that can become out of sync with your repository.

The manager scans the real folders under `Frontend_SLA`, discovers `.html`, `.htm`, `.zip` and `.pdf` assignment links, groups them by subject/day, and regenerates the root `index.html`.

This is better for your GitHub project because:
- if you manually copy a folder into `JS`, the manager sees it;
- if you upload through the manager, it saves directly into the real repository;
- the public `index.html` always links to actual files;
- `.git` stays untouched;
- the manager itself lives in `_manager/` and does not pollute the public export.

## Install

Unzip this package.

Copy **only the `_manager` folder** into:

```text
E:\Frontend_SLA\
```

Your final structure must be:

```text
E:\Frontend_SLA\
├── .git
├── Bootstrap
├── CSS
├── Html
├── JS
├── Tailwind
├── index.html
└── _manager
    ├── app.py
    ├── core.py
    ├── run.bat
    ├── requirements.txt
    ├── templates
    └── static
```

## Run

Double-click:

```text
E:\Frontend_SLA\_manager\run.bat
```

On the first run it:
1. finds Python,
2. creates `_manager\.venv`,
3. installs Flask,
4. opens `http://127.0.0.1:5000`,
5. starts the local server.

**Keep the black terminal window open.**

## Daily workflow

Suppose today's assignment is JavaScript Day 17.

1. Open the manager.
2. Subject = `JS`.
3. Existing destination = pick the folder where you normally keep JS assignments.
4. New folder = `Day 17 - DOM`.
5. Upload `task1.html`, `script.js`, etc.  
   Or upload one ZIP of the whole assignment.
6. Click **Upload assignment & rebuild index.html**.

The manager saves the files into the actual repository and regenerates:

```text
E:\Frontend_SLA\index.html
```

## Existing repository variations

Your old project uses folder spellings such as:
- `Assignment`
- `assignemnt`
- `Assignement`

The manager does not force one spelling. It scans your real folder tree and lets you choose whichever existing folder is already in that subject.

## ZIP projects

For:

```text
Day 17/
├── index.html
├── style.css
├── script.js
└── images/
```

ZIP the whole `Day 17` folder and upload it with **Extract ZIP projects automatically** checked.

## Scan & rebuild

If you add or remove assignment files manually in Windows Explorer, click:

**Scan & rebuild**

No upload is required.

## Public preview

Manager:
```text
http://127.0.0.1:5000
```

Generated assignment site:
```text
http://127.0.0.1:5000/site/
```

## GitHub

After adding assignments:

```bash
git add .
git commit -m "Add today's assignments"
git push
```

You may want to ignore the local manager environment and backups. Add this to the repository `.gitignore`:

```gitignore
_manager/.venv/
_manager/backups/
_manager/exports/
_manager/__pycache__/
```

You can commit `_manager/app.py`, templates, and static files if you want the manager itself backed up in GitHub, or ignore the whole `_manager/` folder if you only want the public assignment website.

## Safety

- The manager never edits `.git`.
- “Hide” only removes a link from generated `index.html`; it does **not** delete the assignment.
- Before each normal rebuild, the current root `index.html` is backed up to `_manager/backups/`.
- ZIP extraction blocks `../` path traversal.
