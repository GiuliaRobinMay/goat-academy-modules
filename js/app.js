/* =============================================================
   GOAT ACADEMY · Academy Modules — app
   Hash routes: #/home · #/section/<sectionId>[/<lessonId>] · #/notes
   Dripped course: a lesson unlocks when every lesson before it
   is marked Completed.
   ============================================================= */

const UI = {
  view: "grid",
  activeLessonId: null,
};

/* ---------- icons ---------- */
const I = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9 21v-6h6v6"/></svg>`,
  course: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="15" rx="3"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg>`,
  notes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 13h6M9 17h4"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 12.5 5 5 10-11"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4" cy="6" r="1.4" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1.4" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1.4" fill="currentColor" stroke="none"/></svg>`,
  pen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`,
  print: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4h5v5"/><path d="M10 14 20 4"/><path d="M19 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  arrowL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m14 6-6 6 6 6"/></svg>`,
  arrowR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m10 6 6 6-6 6"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/></svg>`,
  bookOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6V21h3.4l5.7-5.7a4.5 4.5 0 0 0 5.6-6L14.6 12l-2.6-2.6z"/></svg>`,
};

const STATUS_LABEL = { towatch: "To watch", watching: "Watching", done: "Completed" };
const LOCK_HINT = "Complete the previous lesson to unlock";

/* ---------- tiny helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function thumbUrl(l, w) {
  if (!l.thumb) return null;
  /* imgix URLs take a width param; local/static images are served as-is */
  return l.thumb.includes("?") ? l.thumb + "&w=" + (w || 640) : l.thumb;
}
function thumbHtml(l, w, cls) {
  const u = thumbUrl(l, w);
  if (u) return `<img class="${cls || ""}" src="${esc(u)}" alt="" loading="lazy">`;
  return `<div class="thumb-fallback ${cls || ""}">🐐</div>`;
}
/* branded tile — calm gradient + subtle market-chart motif */
const TILE_PATHS = [
  "M0 46 L14 40 L28 43 L42 31 L56 35 L70 24 L84 28 L100 14",
  "M0 42 L16 45 L30 34 L44 38 L58 26 L72 30 L86 18 L100 22",
  "M0 47 L12 39 L26 42 L40 33 L54 36 L66 25 L80 29 L100 10",
  "M0 40 L15 43 L30 36 L45 39 L60 28 L74 32 L88 20 L100 24",
];
function tileHtml(l, cls) {
  /* lessons with custom artwork show it on the cards too */
  if (l.customThumb) {
    return `<div class="tile ${cls || ""}"><img class="tile-img" src="${esc(thumbUrl(l, 640))}" alt="" loading="lazy"></div>`;
  }
  const base = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--tile-hue")) || 148;
  const h = base + ((l.index * 7) % 22);
  const path = TILE_PATHS[l.index % TILE_PATHS.length];
  return `<div class="tile ${cls || ""}" style="background:linear-gradient(150deg,hsl(${h},42%,16%),hsl(${h + 14},55%,7%))">
    <svg class="tile-chart" viewBox="0 0 100 56" preserveAspectRatio="none" aria-hidden="true">
      <path d="${path} L100 56 L0 56 Z" fill="hsla(${h},70%,60%,0.1)"/>
      <path d="${path}" fill="none" stroke="hsla(${h},75%,62%,0.5)" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
    </svg>
  </div>`;
}
function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  } catch (e) {
    return "";
  }
}
function fmtStamp(iso) {
  try {
    const d = new Date(iso);
    return (
      d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) +
      " · " +
      d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
    );
  } catch (e) {
    return "";
  }
}
function statusDot(status) {
  return `<span class="status-dot ${status}" title="${STATUS_LABEL[status]}">${status === "done" ? I.check : ""}</span>`;
}

/* ---------- dripped-course locking ---------- */

function unlockIdx() {
  const i = ALL_LESSONS.findIndex((l) => Store.status(l.id) !== "done");
  return i === -1 ? ALL_LESSONS.length - 1 : i;
}
function isLocked(l) {
  return l.index > unlockIdx();
}
function sectionLocked(section) {
  return section.parts[0].lessons[0].index > unlockIdx();
}

/* =============================================================
   Router
   ============================================================= */

function sectionById(id) {
  return COURSE_SECTIONS.find((s) => s.id === id) || null;
}

function currentRoute() {
  const h = location.hash.replace(/^#\/?/, "");
  const parts = h.split("/").map((p) => decodeURIComponent(p));
  if (parts[0] === "notes") return { page: "notes" };
  if (parts[0] === "course") {
    return { page: "course", lessonId: parts[1] && lessonById(parts[1]) ? parts[1] : null };
  }
  if (parts[0] === "section") {
    /* legacy links from the sectioned layout */
    return { page: "course", lessonId: parts[2] && lessonById(parts[2]) ? parts[2] : null };
  }
  return { page: "home" };
}

function go(hash) {
  if (location.hash === hash) render();
  else location.hash = hash;
}

function openLesson(id) {
  if (!lessonById(id)) return;
  go("#/course/" + encodeURIComponent(id));
}

/* =============================================================
   Dashboard
   ============================================================= */

function renderHome() {
  const c = Store.counts();
  const pct = Store.percentDone();
  const next = Store.nextUp();
  const watching = ALL_LESSONS.filter((l) => Store.status(l.id) === "watching");
  const notes = Store.notesList();

  const R = 42, CIRC = 2 * Math.PI * R;

  $("#page").innerHTML = `
  <div class="dash-grid">
    <div>
      <section class="glass hero">
        <div class="hero-text">
          <span class="section-kicker">WELCOME BACK, ${esc(Store.member.name.toUpperCase())}</span>
          <h2>Master the market, <em>one module at a time.</em></h2>
          <p class="tagline">${esc(BRAND.tagline)}</p>
        </div>
        <button class="btn btn-primary" id="hero-resume">${I.play} ${
          c.done === 0 && c.watching === 0 ? "Start the course" : "Continue learning"
        }</button>
      </section>

      ${watching.length ? `
      <div class="row-head"><h3>Continue watching</h3></div>
      <div class="hscroll">${watching.map(lessonCardHtml).join("")}</div>` : ""}

      <div class="row-head"><h3>Course map</h3></div>
      <div class="sections-grid">
        ${COURSE_SECTIONS.map((s) => {
          const lessons = s.parts.flatMap((p) => p.lessons);
          const done = lessons.filter((l) => Store.status(l.id) === "done").length;
          const p = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
          const locked = sectionLocked(s);
          const completed = done === lessons.length;
          const frontier = ALL_LESSONS[unlockIdx()];
          const active = !completed && !locked && frontier.sectionId === s.id;
          return `
          <div class="glass section-card ${locked ? "locked-section" : ""} ${active ? "active-section" : ""} ${completed ? "done-section" : ""}" data-sec="${s.id}">
            ${completed ? `<span class="sec-check">${I.check}</span>` : ""}
            <div class="tag">➽ ${esc(s.tag)}</div>
            <h4>${esc(s.title)}</h4>
            <div class="blurb">${esc(s.blurb || "")}</div>
            <div class="meter"><i style="width:${p}%"></i></div>
            <div class="count">${
              locked
                ? `🔒 Unlocks as you complete the previous modules`
                : completed
                  ? `All ${lessons.length} lessons completed`
                  : `<b>${done}</b> / ${lessons.length} lessons completed`
            }</div>
          </div>`;
        }).join("")}
      </div>
    </div>

    <div class="side-col">
      <section class="glass side-card">
        <h3>Next up</h3>
        <div class="nextup-lesson" id="nextup">
          ${tileHtml(next)}
          <div class="t">
            <div class="part">${esc(next.partTag)}</div>
            <div class="name">${esc(next.title)}</div>
          </div>
          <span class="resume">RESUME →</span>
        </div>
      </section>

      <section class="glass side-card">
        <h3>Your progress</h3>
        <div class="progress-big">
          <div class="ring">
            <svg width="96" height="96" viewBox="0 0 96 96">
              <defs>
                <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" style="stop-color:var(--accent-deep)"/><stop offset="100%" style="stop-color:var(--accent)"/>
                </linearGradient>
              </defs>
              <circle class="track" cx="48" cy="48" r="${R}" fill="none" stroke-width="9"/>
              <circle class="fill" cx="48" cy="48" r="${R}" fill="none" stroke-width="9"
                stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC * (1 - pct / 100)}"/>
            </svg>
            <span class="pct">${pct}%</span>
          </div>
          <div class="progress-meta">
            <div class="big">${c.done} of ${c.all} lessons</div>
            <div class="sub">completed so far</div>
            <div class="mini-stats">
              <span class="mini-stat watching"><b>${c.watching}</b> watching</span>
              <span class="mini-stat"><b>${c.towatch}</b> to watch</span>
            </div>
          </div>
        </div>
      </section>

      <section class="glass side-card">
        <h3>My notes</h3>
        <div class="notes-stat">
          <div>
            <div class="n">${notes.length}</div>
            <div class="lbl">lesson${notes.length === 1 ? "" : "s"} with notes</div>
          </div>
          <button class="btn btn-ghost btn-sm" data-nav="#/notes">${I.notes} Open</button>
        </div>
      </section>
    </div>
  </div>`;

  $("#hero-resume").onclick = () => openLesson(next.id);
  $("#nextup").onclick = () => openLesson(next.id);
  $$("#page [data-nav]").forEach((b) => (b.onclick = () => go(b.dataset.nav)));
  $$("#page .section-card").forEach((el) => {
    el.onclick = () => {
      const s = sectionById(el.dataset.sec);
      const lessons = s ? s.parts.flatMap((p) => p.lessons) : [];
      const target = lessons.find((l) => !isLocked(l) && Store.status(l.id) !== "done") || lessons.find((l) => !isLocked(l));
      if (target) openLesson(target.id);
      else go("#/course");
    };
  });
  $$("#page .hscroll .lesson-card").forEach(bindLessonCard);
}

/* =============================================================
   Course view — all lessons in one continuous series
   ============================================================= */

function lessonCardHtml(l) {
  const st = Store.status(l.id);
  const locked = isLocked(l);
  const hasNote = Store.hasNotes(l.id);
  /* cards are pure thumbnails — the artwork carries the title
     (full title on hover via tooltip) */
  return `
  <div class="lesson-card ${UI.activeLessonId === l.id ? "active" : ""} ${locked ? "locked" : ""} ${st === "done" && !locked ? "done" : ""}"
       data-lesson="${l.id}" title="${locked ? LOCK_HINT : esc(l.title)}">
    <div class="thumb-wrap">
      ${tileHtml(l)}
      <span class="status-wrap">${locked ? `<span class="status-lock">${I.lock}</span>` : statusDot(st)}</span>
      ${hasNote && !locked ? `<span class="note-flag" title="You have notes on this lesson">${I.pen}</span>` : ""}
    </div>
  </div>`;
}

function lessonRowHtml(l) {
  const st = Store.status(l.id);
  const locked = isLocked(l);
  const hasNote = Store.hasNotes(l.id);
  return `
  <div class="lesson-row ${UI.activeLessonId === l.id ? "active" : ""} ${locked ? "locked" : ""}"
       data-lesson="${l.id}" ${locked ? `title="${LOCK_HINT}"` : ""}>
    ${tileHtml(l)}
    <div>
      <div class="name">${esc(l.title)}</div>
    </div>
    <div class="right">
      ${hasNote && !locked ? `<span class="note-ico" title="Notes">${I.pen}</span>` : ""}
      ${locked ? `<span class="status-lock">${I.lock}</span>` : statusDot(st)}
    </div>
  </div>`;
}

function bindLessonCard(el) {
  if (el.classList.contains("locked")) return;
  el.onclick = () => openLesson(el.dataset.lesson);
}

function renderCourseList() {
  const done = ALL_LESSONS.filter((l) => Store.status(l.id) === "done").length;

  $("#course-list").innerHTML = `
    <div class="filter-bar">
      <button class="btn btn-ghost btn-sm" data-nav="#/home">${I.arrowL} Dashboard</button>
      <span class="stat-pill"><b>${ALL_LESSONS.length}</b> Total lessons</span>
      <span class="stat-pill done"><b>${done}</b> Completed</span>
      <span class="stat-pill open"><b>${ALL_LESSONS.length - done}</b> Open</span>
      <div class="view-toggle">
        <button class="${UI.view === "grid" ? "active" : ""}" data-view="grid" title="Grid view">${I.grid}</button>
        <button class="${UI.view === "list" ? "active" : ""}" data-view="list" title="List view">${I.list}</button>
      </div>
    </div>
    ${
      UI.view === "grid"
        ? `<div class="lesson-grid">${ALL_LESSONS.map(lessonCardHtml).join("")}</div>`
        : `<div class="lesson-list">${ALL_LESSONS.map(lessonRowHtml).join("")}</div>`
    }`;

  $$("#course-list [data-nav]").forEach((b) => (b.onclick = () => go(b.dataset.nav)));
  $$("#course-list [data-view]").forEach((b) => (b.onclick = () => { UI.view = b.dataset.view; renderCourseList(); }));
  $$("#course-list [data-lesson]").forEach(bindLessonCard);
}

/* ---------- player pane ---------- */

/* The <wistia-player> custom element is defined once by player.js
   (loaded in index.html); each media additionally needs its own module
   script before it can play. Loaded on demand so opening a lesson costs
   one request, not 22. */
function loadWistiaMedia(id) {
  if (document.querySelector(`script[data-wistia-media="${id}"]`)) return;
  const s = document.createElement("script");
  s.src = `https://fast.wistia.com/embed/${id}.js`;
  s.async = true;
  s.type = "module";
  s.dataset.wistiaMedia = id;
  document.head.appendChild(s);
}

function mediaHtml(l, block, main) {
  /* interim Google Drive hosting — branded poster, click loads the
     Drive player in place (see GDRIVE_VIDEOS in data.js) */
  if (block.provider === "gdrive") {
    return `
    <div class="player-media" data-embed="https://drive.google.com/file/d/${esc(block.fileId)}/preview"
         data-mighty-post-id="${esc(l.mighty.postId || "")}"
         data-mighty-video-id="${esc(l.mighty.videoId || "")}">
      ${main ? thumbHtml(l, 1100, "poster") : thumbHtml(l, 800, "poster")}
      <div class="play-overlay" data-fathom>
        <div class="play-btn">${I.play}</div>
      </div>
    </div>`;
  }
  /* Wistia-hosted. Keeps the branded poster + play button rather than
     Wistia's own thumbnail, so the custom lesson artwork still leads;
     the click swaps in the real player (see loadWistiaMedia). */
  if (block.provider === "wistia") {
    return `
    <div class="player-media" data-wistia-id="${esc(block.mediaId)}"
         data-mighty-post-id="${esc(l.mighty.postId || "")}"
         data-mighty-video-id="${esc(l.mighty.videoId || "")}">
      ${main ? thumbHtml(l, 1100, "poster") : thumbHtml(l, 800, "poster")}
      <div class="play-overlay" data-wistia>
        <div class="play-btn">${I.play}</div>
        ${block.title ? `<span class="hint">${esc(block.title)}</span>` : ""}
      </div>
    </div>`;
  }
  if (block.provider === "fathom") {
    return `
    <div class="player-media" data-embed="${esc(block.embed)}">
      <div class="play-overlay" data-fathom>
        <div class="play-btn">${I.play}</div>
        <span class="hint">${esc(block.title || "Play video")}</span>
      </div>
    </div>`;
  }
  /* mighty-hosted, member-gated video. The data attributes are the
     integration hooks for the Headless API playback wiring. */
  return `
  <div class="player-media"
       data-mighty-post-id="${esc(l.mighty.postId || "")}"
       data-mighty-video-id="${esc(l.mighty.videoId || "")}"
       data-mighty-asset="${esc(l.mighty.asset || "")}">
    ${main ? thumbHtml(l, 1100, "poster") : thumbHtml(l, 800, "poster")}
    <div class="play-overlay" data-open="${esc(l.mighty.url)}">
      <div class="play-btn">${I.play}</div>
    </div>
  </div>`;
}

const WATCHED_TAG = `<span class="watched-tag">${I.check} Watched — next lesson unlocked</span>`;
const WATCHING_TAG = `<span class="watched-tag watching">${I.play} Watching — finish the video to unlock the next lesson</span>`;

function renderLessonPane(l) {
  const pane = $("#player-pane");
  if (!l) {
    pane.innerHTML = `<div class="glass empty" style="padding:60px 20px">
      <div class="big">🔒</div>These lessons unlock as you complete the previous modules.<br>
      Head back to the dashboard and pick up where you left off.</div>`;
    return;
  }

  const videos = l.blocks.filter((b) => b.type === "video");
  const texts = l.blocks.filter((b) => b.type === "text" || b.type === "image");
  const tools = l.blocks.filter((b) => b.type === "tool");

  const textHtml = texts
    .map((b) =>
      b.type === "image"
        ? `<figure><img src="${esc(b.src)}" alt="" loading="lazy">${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ""}</figure>`
        : (b.title ? `<h4>${esc(b.title)}</h4>` : "") + b.html
    )
    .join("");

  /* no video → the lesson's image becomes the hero, reading comes first */
  const heroHtml = videos.length
    ? mediaHtml(l, videos[0], true)
    : l.thumb
      ? `<div class="player-media doc-hero">${thumbHtml(l, 1100, "poster")}</div>`
      : "";

  const playerCard = `
  <section class="glass player-card">
    ${heroHtml}
    <div class="player-body">
      <div class="lesson-kicker">Lesson ${l.index + 1} of ${ALL_LESSONS.length} · ${esc(l.partTag)}</div>
      <h2>${esc(l.title)}</h2>
      <div id="watch-state">${
        Store.status(l.id) === "done"
          ? WATCHED_TAG
          : videos.length && videos[0].provider === "wistia"
            ? Store.status(l.id) === "watching"
              ? WATCHING_TAG
              : ""
            : `<button class="btn btn-primary btn-sm" id="mark-done" style="margin-top:12px">${I.check} Mark lesson as done</button>`
      }</div>
      ${
        videos.length > 1
          ? `<div class="extra-media">${videos.slice(1).map((b) => mediaHtml(l, b, false)).join("")}</div>`
          : ""
      }
    </div>
  </section>`;

  const notesCard = `
  <section class="glass notes-card">
    <div class="head">
      <h3>${I.pen} My notes</h3>
      <span class="save-state" id="save-state">Autosaves as you type</span>
    </div>
    <div class="note-toolbar" id="note-toolbar">
      <button data-cmd="bold" title="Bold"><b>B</b></button>
      <button data-cmd="italic" title="Italic"><i>I</i></button>
      <button data-cmd="underline" title="Underline"><u>U</u></button>
      <button data-cmd="hiliteColor" data-val="rgba(52,226,138,.35)" title="Highlight">🖍</button>
      <span class="sep"></span>
      <button data-cmd="insertUnorderedList" title="Bullet list">• —</button>
      <button data-cmd="insertOrderedList" title="Numbered list">1. —</button>
      <span class="sep"></span>
      <button data-cmd="removeFormat" title="Clear formatting">✕</button>
    </div>
    <div class="note-entries" id="note-entries"></div>
    <div class="foot">
      <button class="btn btn-primary btn-sm" id="add-note">${I.pen} Add note</button>
      <button class="btn btn-ghost btn-sm" id="print-note">${I.print} Print these notes</button>
    </div>
  </section>`;

  const textCard = textHtml ? `
  <section class="glass content-card">
    <h3>${I.bookOpen} Lesson notes from Goat Academy</h3>
    <div class="rich">${textHtml}</div>
  </section>` : "";

  const toolsCard = tools.length ? `
  <section class="glass content-card">
    <h3>${I.tool} Tools & resources</h3>
    <div class="tool-list">
      ${tools
        .map(
          (t) => `
        <a class="tool-item" href="${esc(t.url)}" target="_blank" rel="noopener">
          <span class="ico">${I.doc}</span>
          <span class="t">
            <span class="lbl">${esc(t.label)}</span>
            <span class="kind">${esc(t.kind || "Resource")}</span>
          </span>
          <span class="open">${I.external}</span>
        </a>`
        )
        .join("")}
    </div>
  </section>` : "";

  /* video lessons: notes sit right under the video.
     document lessons: read first, then tools, notes last. */
  pane.innerHTML = videos.length
    ? playerCard + notesCard + textCard + toolsCard
    : playerCard + textCard + toolsCard + notesCard;

  /* finishing the video is what completes the lesson and unlocks the
     next one (Wistia "ended" event). Starting it only marks "watching". */
  const markWatched = () => {
    if (Store.status(l.id) !== "done") {
      Store.setStatus(l.id, "done");
      renderCourseList();
      $("#watch-state").innerHTML = WATCHED_TAG;
    }
  };
  const markWatching = () => {
    if (Store.status(l.id) === "towatch") {
      Store.setStatus(l.id, "watching");
      renderCourseList();
      if (Store.status(l.id) !== "done") $("#watch-state").innerHTML = WATCHING_TAG;
    }
  };

  /* mighty play → open the lesson post (native playback comes with the
     Headless API hookup) */
  $$("#player-pane [data-open]").forEach((ov) => {
    ov.onclick = () => {
      markWatching();
      window.open(ov.dataset.open, "_blank", "noopener");
    };
  });

  /* wistia embeds swap the poster for the player and play in place;
     the lesson completes only when the video actually finishes */
  $$("#player-pane [data-wistia]").forEach((ov) => {
    ov.onclick = () => {
      markWatching();
      const wrap = ov.closest(".player-media");
      const id = wrap.dataset.wistiaId;
      loadWistiaMedia(id);
      wrap.innerHTML = `<wistia-player media-id="${esc(id)}" aspect="1.7777777777777777" autoplay></wistia-player>`;
      const player = wrap.querySelector("wistia-player");
      player.addEventListener("ended", markWatched);
      /* safety net: some browsers/players report the end via timeupdate */
      player.addEventListener("timeupdate", () => {
        const d = player.duration;
        if (d && player.currentTime / d >= 0.97) markWatched();
      });
    };
  });

  /* fathom embeds load & play in place (no end event available) */
  $$("#player-pane [data-fathom]").forEach((ov) => {
    ov.onclick = () => {
      markWatching();
      const wrap = ov.closest(".player-media");
      wrap.innerHTML = `<iframe src="${esc(wrap.dataset.embed)}" allow="encrypted-media; fullscreen" allowfullscreen></iframe>`;
    };
  });

  /* lessons without a finish-detecting video complete via the button
     or by opening a tool; on Wistia lessons the video itself is the
     only completion path */
  const md = $("#mark-done");
  if (md) md.onclick = markWatched;
  if (!(videos.length && videos[0].provider === "wistia")) {
    $$("#player-pane .tool-item").forEach((t) => t.addEventListener("click", markWatched));
  }

  /* formatting toolbar acts on the focused entry */
  $$("#note-toolbar [data-cmd]").forEach((b) => {
    b.onmousedown = (e) => e.preventDefault(); // keep editor selection
    b.onclick = () => document.execCommand(b.dataset.cmd, false, b.dataset.val || null);
  });

  renderNoteEntries(l);
  $("#add-note").onclick = () => {
    Store.addEntry(l.id);
    renderNoteEntries(l);
    const editors = $$("#note-entries .note-editor");
    if (editors.length) editors[editors.length - 1].focus();
  };
  $("#print-note").onclick = () => printNotes([l.id]);
}

/* journal entries — each one carries its own timestamp */
function renderNoteEntries(l) {
  const wrap = $("#note-entries");
  const entries = Store.entries(l.id);

  wrap.innerHTML = entries.length
    ? entries
        .map(
          (e) => `
      <div class="note-entry-item" data-entry="${e.id}">
        <div class="ne-head">
          <span class="ne-stamp">${esc(fmtStamp(e.createdAt))}</span>
          <button class="ne-del" title="Delete this note">${I.trash}</button>
        </div>
        <div class="note-editor" contenteditable="true" data-placeholder="Write your note…">${e.html}</div>
      </div>`
        )
        .join("")
    : `<div class="notes-empty">No notes yet — hit “Add note” to start your journal for this lesson.</div>`;

  const saveState = $("#save-state");
  $$("#note-entries .note-entry-item").forEach((item) => {
    const entryId = item.dataset.entry;
    const editor = $(".note-editor", item);

    let t;
    editor.oninput = () => {
      saveState.textContent = "Saving…";
      saveState.classList.remove("saved");
      clearTimeout(t);
      t = setTimeout(() => {
        Store.saveEntry(l.id, entryId, editor.innerHTML, editor.innerText);
        saveState.textContent = "Saved ✓";
        saveState.classList.add("saved");
        renderCourseList();
      }, 600);
    };

    $(".ne-del", item).onclick = () => {
      const entry = Store.entries(l.id).find((e) => e.id === entryId);
      const stamp = entry ? fmtStamp(entry.createdAt) : "";
      if (
        confirm(`⚠️ Delete this note (${stamp})?\n\nThis permanently deletes the note. It cannot be undone.`)
      ) {
        Store.deleteEntry(l.id, entryId);
        renderNoteEntries(l);
        renderCourseList();
      }
    };
  });
}

/* ---------- resizable split: drag left = bigger player,
   drag right = wider list (more thumbnails per row) ---------- */

const SPLIT_KEY = "goat-academy-modules:split";

function initSplit() {
  const layout = $("#course-layout");
  const handle = $("#split-handle");
  if (!layout || !handle) return;

  let ratio = parseFloat(localStorage.getItem(SPLIT_KEY));
  if (!(ratio >= 0.24 && ratio <= 0.62)) ratio = 0.34;
  const apply = () => layout.style.setProperty("--split", (ratio * 100).toFixed(2) + "%");
  apply();

  let dragging = false;
  handle.addEventListener("pointerdown", (e) => {
    dragging = true;
    handle.classList.add("dragging");
    document.body.classList.add("resizing");
    handle.setPointerCapture(e.pointerId);
  });
  handle.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const rect = layout.getBoundingClientRect();
    ratio = Math.min(0.62, Math.max(0.24, (e.clientX - rect.left) / rect.width));
    apply();
  });
  const end = () => {
    if (!dragging) return;
    dragging = false;
    handle.classList.remove("dragging");
    document.body.classList.remove("resizing");
    try { localStorage.setItem(SPLIT_KEY, String(ratio)); } catch (e) {}
  };
  handle.addEventListener("pointerup", end);
  handle.addEventListener("pointercancel", end);
}

function renderCourse(route) {
  /* pick the active lesson (never a locked one) */
  let lesson = route.lessonId ? lessonById(route.lessonId) : null;
  if (lesson && isLocked(lesson)) lesson = null;
  if (!lesson) {
    const last = Store.state.lastLessonId && lessonById(Store.state.lastLessonId);
    if (last && !isLocked(last)) lesson = last;
  }
  if (!lesson) {
    lesson =
      ALL_LESSONS.find((l) => !isLocked(l) && Store.status(l.id) !== "done") ||
      [...ALL_LESSONS].reverse().find((l) => !isLocked(l)) ||
      ALL_LESSONS[0];
  }
  UI.activeLessonId = lesson ? lesson.id : null;
  if (lesson) Store.setLastLesson(lesson.id);

  $("#page").innerHTML = `
    <div class="course-layout" id="course-layout">
      <div class="list-pane" id="course-list"></div>
      <div class="split-handle" id="split-handle" title="Drag to resize"></div>
      <div class="player-col"><div class="player-pane" id="player-pane"></div></div>
    </div>`;

  renderCourseList();
  renderLessonPane(lesson);
  initSplit();

  if (route.lessonId && window.matchMedia("(max-width: 1020px)").matches) {
    requestAnimationFrame(() => $("#player-pane").scrollIntoView({ behavior: "smooth", block: "start" }));
  }
}

/* =============================================================
   Notes page
   ============================================================= */

function renderNotes() {
  const notes = Store.notesList();
  const totalEntries = notes.reduce((n, x) => n + x.entries.length, 0);
  $("#page").innerHTML = `
    <div class="notes-page-head">
      <div>
        <h2>My notes</h2>
        <div class="sub">${notes.length ? `${totalEntries} note${totalEntries === 1 ? "" : "s"} across ${notes.length} lesson${notes.length === 1 ? "" : "s"} — keep them, print them, own them.` : "Everything you write while watching lives here."}</div>
      </div>
      <div class="actions">
        ${notes.length ? `<button class="btn btn-primary" id="print-all">${I.print} Print all notes</button>` : ""}
        <button class="btn btn-ghost" data-nav="#/home">${I.home} Back to dashboard</button>
      </div>
    </div>
    <div class="notes-list">
      ${
        notes.length
          ? notes
              .map(({ lesson, entries }) => {
                const latest = entries[entries.length - 1];
                return `
        <section class="glass note-entry">
          <div class="top">
            <span class="where">➽ ${esc(lesson.sectionTag)} · ➧ ${esc(lesson.partTag)}</span>
            <span class="when">${entries.length} note${entries.length === 1 ? "" : "s"} · last ${fmtStamp(latest.updatedAt)}</span>
          </div>
          <h4>${esc(lesson.title)}</h4>
          <div class="excerpt">${esc(latest.text).slice(0, 400)}</div>
          <div class="actions">
            <button class="btn btn-ghost btn-sm" data-goto="${lesson.id}">${I.pen} Open lesson & edit</button>
            <button class="btn btn-ghost btn-sm" data-print="${lesson.id}">${I.print} Print</button>
          </div>
        </section>`;
              })
              .join("")
          : `<div class="glass empty"><div class="big">📝</div>No notes yet.<br>Open a lesson and start writing — everything autosaves.</div>`
      }
    </div>`;

  $$("#page [data-nav]").forEach((b) => (b.onclick = () => go(b.dataset.nav)));
  $$("#page [data-goto]").forEach((b) => (b.onclick = () => openLesson(b.dataset.goto)));
  $$("#page [data-print]").forEach((b) => (b.onclick = () => printNotes([b.dataset.print])));
  const pa = $("#print-all");
  if (pa) pa.onclick = () => printNotes(notes.map((n) => n.lesson.id));
}

/* =============================================================
   Print
   ============================================================= */

function printNotes(lessonIds) {
  const sheets = lessonIds
    .map((id) => ({
      lesson: lessonById(id),
      entries: Store.entries(id).filter((e) => e.text && e.text.trim()),
    }))
    .filter((x) => x.lesson && x.entries.length);

  if (!sheets.length) {
    alert("No notes to print yet — write something first ✍️");
    return;
  }

  const totalEntries = sheets.reduce((n, x) => n + x.entries.length, 0);
  const today = new Date().toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" });
  $("#print-sheet").innerHTML = `
    <div class="ph">
      <div class="brand">GOAT <span>ACADEMY</span></div>
      <div class="meta">${esc(BRAND.course)} · ${esc(Store.member.name)}'s notes · ${esc(today)}</div>
    </div>
    <div class="intro">${totalEntries} note${totalEntries === 1 ? "" : "s"} across ${sheets.length} lesson${sheets.length === 1 ? "" : "s"}, exported from the ${esc(BRAND.course)} member app.</div>
    ${sheets
      .map(
        ({ lesson, entries }) => `
      <div class="pnote">
        <div class="where">${esc(lesson.sectionTag)} · ${esc(lesson.partTag)} · ${esc(lesson.partTitle)}</div>
        <h3>${esc(lesson.title)}</h3>
        ${entries
          .map(
            (e) => `
        <div class="pentry">
          <div class="when">${esc(fmtStamp(e.createdAt))}</div>
          <div class="body">${e.html}</div>
        </div>`
          )
          .join("")}
      </div>`
      )
      .join("")}`;
  window.print();
}

/* =============================================================
   Boot
   ============================================================= */

function render() {
  const route = currentRoute();
  if (route.page === "home") renderHome();
  else if (route.page === "course") renderCourse(route);
  else renderNotes();
  window.scrollTo({ top: 0 });
}

window.addEventListener("hashchange", render);

/* =============================================================
   Theme (settings popup in the app bar)
   ============================================================= */

const THEME_KEY = "goat-academy-modules:theme";

function applyTheme(name) {
  if (name === "green") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = name;
  $$("#settings-pop [data-theme-choice]").forEach((b) =>
    b.classList.toggle("on", b.dataset.themeChoice === name)
  );
}

function initSettings() {
  const btn = $("#settings-btn");
  const pop = $("#settings-pop");
  if (!btn || !pop) return;

  let theme = "green";
  try { theme = localStorage.getItem(THEME_KEY) || "green"; } catch (e) {}
  applyTheme(theme);

  btn.onclick = (e) => {
    e.stopPropagation();
    pop.hidden = !pop.hidden;
  };
  document.addEventListener("click", (e) => {
    if (!pop.hidden && !pop.contains(e.target)) pop.hidden = true;
  });
  $$("#settings-pop [data-theme-choice]").forEach((b) => {
    b.onclick = () => {
      const t = b.dataset.themeChoice;
      applyTheme(t);
      try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
      pop.hidden = true;
      render(); /* re-render so the generated tiles pick up the theme hue */
    };
  });
}

(async function boot() {
  await Store.init();
  initSettings();
  render();
})();
