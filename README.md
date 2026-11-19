# TaskFlow — Creative Planner

TaskFlow is a scrapbook-inspired personal planner built with HTML, CSS, and vanilla JavaScript. It runs in a modern browser with no build step, account, or backend. The English and Arabic interfaces have left-to-right and right-to-left layouts, respectively.

## Run locally

Open a terminal in this folder and start a static server. For example, with Python 3 installed:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

On Windows, `py -m http.server 8000 --bind 127.0.0.1` also works with the Python launcher. If you have Node.js instead, you can run `npx --yes http-server . -a 127.0.0.1 -p 8000` to start a local server. Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/). Use the same address and port on later visits to see the same planner data. Press `Ctrl+C` in the terminal to stop the server.

## Deploy to GitHub Pages

1. Create a public GitHub repository for the app. Publish the files in this folder at the root of its `main` branch, including `assets/` and `.nojekyll`.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/ (root)**, then save. GitHub Pages will display the site URL once deployment completes. A project site typically uses `https://USERNAME.github.io/REPOSITORY/`.

The app uses relative asset paths and hash-based navigation, so it works under a GitHub Pages repository path without a build configuration. Upload the app source to GitHub. Keep personal JSON backups in a private location.

## Use the planner

- **Backlog Inbox** captures tasks quickly. Edit a task to add notes, a category, a priority, or a due date. Use **Move to board** to schedule it on the Kanban board, or pin it to include it in today’s priorities.
- **Today’s Top 3** lets you choose up to three tasks. The selection follows the browser’s local date. The underlying tasks are available on later days.
- **Kanban Board** supports dragging between To Do, In Progress, and Done. On a touch screen, drag by the dotted handle. You can also open a task and change its **Status** with the keyboard or touchscreen.
- **My Tasks** supports category, priority, status, and date filters. Global search matches task titles, notes, and categories. Use `Ctrl+K` or `⌘K` to jump to search.
- **Calendar** shows due dates along with upcoming and overdue tasks. **Progress Analytics** derives its counts and completion chart from the tasks currently in the planner, including inbox and sample tasks.
- **Focus Timer** runs for 25 minutes. Pause and resume it as needed. The running countdown continues across reloads using a saved end time, and the app announces completion when open.
- **Settings** lets you change language, manage custom categories, export or restore a backup, and remove the editable sample tasks supplied on the first visit.

## Storage and backups

Your planner is stored in `localStorage` for the current browser profile and site origin. The app uses local assets and makes no network requests with task data. Export a JSON copy in **Settings → Export JSON** before clearing browser storage or switching devices, browsers, or site addresses. Use **Import JSON** to restore it. The app validates an import and asks for confirmation before replacing the current planner.

<details>
<summary>Pressed-flower artwork</summary>

The local illustration in `assets/pressed-flowers.png` was generated with the built-in ImageGen tool using this prompt.

> Create one small isolated vintage scrapbook botanical cutout for the TaskFlow digital paper planner. Match the attached planner's mood conceptually: a delicate, airy little pressed-flower sprig, with two dusty rose five-petaled cosmos blooms with ochre centers, one small pale gold bud, thin bent stems, and muted olive or sage greenery. Antique hand-painted watercolor on just the flowers and leaves, fine etched detail, subtle paper grain, tasteful cozy stationery aesthetic. Upright, gently leaning to the right, narrow and tapered, with the entire plant intact and nothing clipped. Truly transparent background, all negative space clear. No paper sheet, no shadows outside the illustration, no letters, no symbols, no frame, no watermark. Asset will appear at approximately 85 pixels high beside a handwritten sidebar note.

</details>
