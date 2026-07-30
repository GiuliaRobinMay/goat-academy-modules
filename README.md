# GOAT Academy · Academy Modules — Member Course Viewer

A fully functional, member-facing frontend for the **Academy Modules** course,
built to be embedded inside the GOAT Academy Mighty Network
(`friends.goatacademy.org`). Frosted-glass green branding, dashboard,
two-pane course viewer, per-lesson rich notes with printing, and progress
tracking — with a clean adapter seam where the tech team connects the
[Mighty Networks Headless API](https://docs.mightynetworks.com/headless-api).

## Running it

No build step, no dependencies. It's plain HTML/CSS/JS:

```bash
# any static server works
npx serve .
# or
python3 -m http.server 8080
```

Open `http://localhost:8080`. It also works served from any static host
(Netlify, Vercel, S3, …) and inside an iframe.

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | Shell (nav rail, topbar, page container, print sheet) |
| `css/styles.css` | Frosted-glass green theme + print stylesheet |
| `js/data.js` | **The course.** All 6 sections → 11 parts → 26 lessons, incl. every Mighty post ID, tracked-video ID, video asset URL, thumbnails, tools |
| `js/store.js` | Member state (progress + notes). LocalStorage adapter active; Headless API adapter stubbed for the tech team |
| `js/app.js` | Router + UI (dashboard, course viewer, notes, print) |

### Member features

- **Dashboard** — welcome hero, resume/continue CTA, progress ring,
  "Next up", continue-watching row, per-section course map with progress.
- **Modules** — full course structure with the ➽ section / ➧ part hierarchy,
  filters (All / To watch / Watching / Completed), search, grid & list views.
- **Lesson view** — video player pane (Mighty-hosted videos open in the
  Academy until native playback is wired; Fathom videos play inline),
  lesson text content, tools & resources (Google Docs, TradingView, …),
  prev/next navigation, status control with auto-"watching" on play.
- **Notes** — per-lesson rich-text notes (bold, italic, underline,
  highlight, lists) with autosave, a "My notes" overview page, and
  **print** (single lesson or all notes) via a clean white print layout.

## Handoff: wiring the Headless API (tech team)

The UI never touches persistence directly — everything goes through
`Store` in `js/store.js`. To go live:

1. Implement `MightyHeadlessAdapter` in `js/store.js` (same 3-method
   contract as `LocalAdapter`: `getMember`, `load`, `save`) and flip
   `ACTIVE_ADAPTER`.
2. **Identity** — resolve the signed-in member via the Headless API.
   Interim bridge supported: the embedding page can set
   `window.GOAT_MEMBER = { id, name, avatarUrl }` before the scripts load.
3. **Progress mapping** — every lesson in `js/data.js` carries
   `lesson.mighty.postId` (coursework post resourceId),
   `lesson.mighty.videoId` (Mighty tracked-video id) and
   `lesson.mighty.asset` (video.mn.co URL). App status values:
   `towatch` (default) / `watching` / `done`.
4. **Playback** — the player containers expose
   `data-mighty-post-id`, `data-mighty-video-id`, `data-mighty-asset`
   attributes. Replace the click-through overlay with the native tracked
   player when available; play events should set status to `watching`,
   completion events to `done`.
5. **Notes** — the Headless API is read-oriented, so member notes need a
   small companion endpoint (or member profile field). Shape stored today:
   `{ [lessonId]: { html, text, updatedAt } }`.

Content edits (new lessons, reordering, copy) are all data-only changes in
`js/data.js` — no UI code involved. The first section's label
("START HERE | Foundations & Setup") was added by us since the source list
had no header for the first four parts — rename it there if you prefer
something else.
