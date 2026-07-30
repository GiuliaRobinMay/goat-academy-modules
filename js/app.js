/* =============================================================
   GOAT ACADEMY · Academy Modules — app
   Hash routes: #/home · #/section/<sectionId>[/<lessonId>] · #/notes
   Dripped course: a lesson unlocks when every lesson before it
   is marked Completed.
   ============================================================= */

const UI = {
  filter: "all",
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
  return l.thumb ? l.thumb + "&w=" + (w || 640) : null;
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
  const h = 148 + ((l.index * 7) % 22);
  const path = TILE_PATHS[l.index % TILE_PATHS.length];
  return `<div class="tile ${cls || ""}" style="background:linear-gradient(150deg,hsl(${h},42%,16%),hsl(${h + 14},55%,7%))">
    <svg class="tile-chart" viewBox="0 0 100 56" preserveAspectRatio="none" aria-hidden="true">
      <path d="${path} L100 56 L0 56 Z" fill="hsla(${h},70%,60%,0.1)"/>
      <path d="${path}" fill="none" stroke="hsla(${h},75%,62%,0.5)" stroke-width="1.5" vector-effect="non-scaling-stroke"/>
    </svg>
    <span class="tile-num">${l.num || "•"}</span>
  </div>`;
}
function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
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
  if (parts[0] === "section" && sectionById(parts[1])) {
    return { page: "section", sectionId: parts[1], lessonId: parts[2] || null };
  }
  if (parts[0] === "notes") return { page: "notes" };
  if (parts[0] === "course") {
    /* legacy links from the first draft */
    const l = parts[1] && lessonById(parts[1]);
    const target = l || Store.nextUp();
    return { page: "section", sectionId: target.sectionId, lessonId: l ? l.id : null };
  }
  return { page: "home" };
}

function go(hash) {
  if (location.hash === hash) render();
  else location.hash = hash;
}

function openLesson(id) {
  const l = lessonById(id);
  if (!l) return;
  go("#/section/" + l.sectionId + "/" + encodeURIComponent(id));
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
                  <stop offset="0%" stop-color="#16a34a"/><stop offset="100%" stop-color="#34e28a"/>
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
    el.onclick = () => go("#/section/" + el.dataset.sec);
  });
  $$("#page .hscroll .lesson-card").forEach(bindLessonCard);
}

/* =============================================================
   Section view (one section at a time — dripped course)
   ============================================================= */

function lessonCardHtml(l) {
  const st = Store.status(l.id);
  const locked = isLocked(l);
  const hasNote = !!Store.note(l.id);
  return `
  <div class="lesson-card ${UI.activeLessonId === l.id ? "active" : ""} ${locked ? "locked" : ""}"
       data-lesson="${l.id}" ${locked ? `title="${LOCK_HINT}"` : ""}>
    <div class="thumb-wrap">
      ${tileHtml(l)}
      <span class="type-chip">Lesson</span>
      <span class="status-wrap">${locked ? `<span class="status-lock">${I.lock}</span>` : statusDot(st)}</span>
      ${hasNote && !locked ? `<span class="note-flag" title="You have notes on this lesson">${I.pen}</span>` : ""}
    </div>
    <div class="body"><div class="name">${esc(l.title)}</div></div>
  </div>`;
}

function lessonRowHtml(l) {
  const st = Store.status(l.id);
  const locked = isLocked(l);
  const hasNote = !!Store.note(l.id);
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

function lessonMatches(l) {
  if (UI.filter !== "all" && Store.status(l.id) !== UI.filter) return false;
  return true;
}

function bindLessonCard(el) {
  if (el.classList.contains("locked")) return;
  el.onclick = () => openLesson(el.dataset.lesson);
}

function renderSectionList(section) {
  const lessons = section.parts.flatMap((p) => p.lessons);
  const counts = { all: lessons.length, towatch: 0, watching: 0, done: 0 };
  lessons.forEach((l) => counts[Store.status(l.id)]++);

  const filters = [
    { id: "all", label: "All", n: counts.all },
    { id: "towatch", label: "To watch", n: counts.towatch, dot: "towatch" },
    { id: "watching", label: "Watching", n: counts.watching, dot: "watching" },
    { id: "done", label: "Completed", n: counts.done, dot: "done" },
  ];

  let any = false;
  const partsHtml = section.parts
    .map((p) => {
      const visible = p.lessons.filter(lessonMatches);
      if (!visible.length) return "";
      any = true;
      return `
      <div class="course-part">
        <div class="part-head">
          <span class="ptag">➧ ${esc(p.tag)}</span>
          <span class="ptitle">${esc(p.title)}</span>
          ${p.note ? `<span class="pnote">${esc(p.note)}</span>` : ""}
        </div>
        ${
          UI.view === "grid"
            ? `<div class="lesson-grid">${visible.map(lessonCardHtml).join("")}</div>`
            : `<div class="lesson-list">${visible.map(lessonRowHtml).join("")}</div>`
        }
      </div>`;
    })
    .join("");

  $("#course-list").innerHTML = `
    <div class="filter-bar">
      ${filters
        .map(
          (f) => `
        <button class="filter-pill ${UI.filter === f.id ? "active" : ""}" data-filter="${f.id}">
          ${f.dot ? `<span class="dot ${f.dot}"></span>` : ""}${f.label} <span class="n">${f.n}</span>
        </button>`
        )
        .join("")}
      <div class="view-toggle">
        <button class="${UI.view === "grid" ? "active" : ""}" data-view="grid" title="Grid view">${I.grid}</button>
        <button class="${UI.view === "list" ? "active" : ""}" data-view="list" title="List view">${I.list}</button>
      </div>
    </div>
    <div class="list-scroller">
      ${any ? partsHtml : `<div class="glass empty"><div class="big">🐐</div>No lessons match this filter yet.</div>`}
    </div>`;

  $$("#course-list [data-filter]").forEach((b) => (b.onclick = () => { UI.filter = b.dataset.filter; renderSectionList(section); }));
  $$("#course-list [data-view]").forEach((b) => (b.onclick = () => { UI.view = b.dataset.view; renderSectionList(section); }));
  $$("#course-list [data-lesson]").forEach(bindLessonCard);
}

/* ---------- player pane ---------- */

function mediaHtml(l, block, main) {
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
      <span class="hint">Watch in the Academy</span>
    </div>
  </div>`;
}

function renderLessonPane(l) {
  const pane = $("#player-pane");
  if (!l) {
    pane.innerHTML = `<div class="glass empty" style="padding:60px 20px">
      <div class="big">🔒</div>These lessons unlock as you complete the previous modules.<br>
      Head back to the dashboard and pick up where you left off.</div>`;
    return;
  }

  const st = Store.status(l.id);
  const note = Store.note(l.id);
  const videos = l.blocks.filter((b) => b.type === "video");
  const texts = l.blocks.filter((b) => b.type === "text" || b.type === "image");
  const tools = l.blocks.filter((b) => b.type === "tool");
  const prev = ALL_LESSONS[l.index - 1];
  const next = ALL_LESSONS[l.index + 1];
  const nextLocked = next && isLocked(next);

  const textHtml = texts
    .map((b) =>
      b.type === "image"
        ? `<figure><img src="${esc(b.src)}" alt="" loading="lazy">${b.caption ? `<figcaption>${esc(b.caption)}</figcaption>` : ""}</figure>`
        : (b.title ? `<h4>${esc(b.title)}</h4>` : "") + b.html
    )
    .join("");

  pane.innerHTML = `
  <section class="glass player-card">
    ${videos.length ? mediaHtml(l, videos[0], true) : ""}
    <div class="player-body">
      <div class="lesson-kicker">Lesson ${l.index + 1} of ${ALL_LESSONS.length} · ${esc(l.partTag)}</div>
      <h2>${esc(l.title)}</h2>
      ${l.description ? `<p class="desc">${esc(l.description)}</p>` : ""}
      <div class="player-toolbar">
        <div class="status-seg">
          ${["towatch", "watching", "done"]
            .map(
              (s) => `<button data-status="${s}" class="${st === s ? "on-" + s : ""}">
                <span class="dot"></span>${STATUS_LABEL[s]}</button>`
            )
            .join("")}
        </div>
        <div class="nav-btns">
          <button class="btn btn-ghost btn-sm" data-goto="${prev ? prev.id : ""}" ${prev ? "" : "disabled"}>${I.arrowL} Prev</button>
          <button class="btn btn-ghost btn-sm" ${nextLocked ? `disabled title="${LOCK_HINT}"` : `data-goto="${next ? next.id : ""}"`} ${next ? "" : "disabled"}>
            ${nextLocked ? I.lock + " Finish to unlock" : "Next " + I.arrowR}
          </button>
        </div>
      </div>
      ${
        videos.length > 1
          ? `<div class="extra-media">${videos.slice(1).map((b) => mediaHtml(l, b, false)).join("")}</div>`
          : ""
      }
    </div>
  </section>

  <section class="glass notes-card">
    <div class="head">
      <h3>${I.pen} My notes</h3>
      <span class="save-state" id="save-state">${note ? "Saved " + fmtDate(note.updatedAt) : "Autosaves as you type"}</span>
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
    <div class="note-editor" id="note-editor" contenteditable="true"
         data-placeholder="Jot down your elaborate notes for this lesson — key levels, rules, aha-moments…">${note ? note.html : ""}</div>
    <div class="foot">
      <button class="btn btn-ghost btn-sm" id="print-note">${I.print} Print these notes</button>
      <button class="btn btn-ghost btn-sm" id="clear-note">${I.trash} Clear</button>
      <span class="wc" id="note-wc"></span>
    </div>
  </section>

  ${textHtml ? `
  <section class="glass content-card">
    <h3>${I.bookOpen} Lesson notes from Goat Academy</h3>
    <div class="rich">${textHtml}</div>
  </section>` : ""}

  ${tools.length ? `
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
  </section>` : ""}`;

  const section = sectionById(l.sectionId);

  /* status segmented control — completing a lesson unlocks the next */
  $$("#player-pane [data-status]").forEach((b) => {
    b.onclick = () => {
      Store.setStatus(l.id, b.dataset.status);
      renderLessonPane(l);
      renderSectionList(section);
      renderSectionHead(section);
    };
  });

  /* prev / next */
  $$("#player-pane [data-goto]").forEach((b) => {
    if (b.dataset.goto) b.onclick = () => openLesson(b.dataset.goto);
  });

  /* mighty play → open post in the Academy; auto-mark as watching */
  $$("#player-pane [data-open]").forEach((ov) => {
    ov.onclick = () => {
      if (Store.status(l.id) === "towatch") {
        Store.setStatus(l.id, "watching");
        renderSectionList(section);
        const seg = $$("#player-pane [data-status]");
        seg.forEach((s) => (s.className = s.dataset.status === "watching" ? "on-watching" : ""));
      }
      window.open(ov.dataset.open, "_blank", "noopener");
    };
  });

  /* fathom embeds load on click (keeps the page light) */
  $$("#player-pane [data-fathom]").forEach((ov) => {
    ov.onclick = () => {
      if (Store.status(l.id) === "towatch") {
        Store.setStatus(l.id, "watching");
        renderSectionList(section);
      }
      const wrap = ov.closest(".player-media");
      wrap.innerHTML = `<iframe src="${esc(wrap.dataset.embed)}" allow="encrypted-media; fullscreen" allowfullscreen></iframe>`;
    };
  });

  /* notes editor */
  const editor = $("#note-editor");
  const saveState = $("#save-state");
  const wc = $("#note-wc");
  const updateWc = () => {
    const words = (editor.innerText.trim().match(/\S+/g) || []).length;
    wc.textContent = words ? words + " word" + (words === 1 ? "" : "s") : "";
  };
  updateWc();

  let t;
  editor.oninput = () => {
    saveState.textContent = "Saving…";
    saveState.classList.remove("saved");
    clearTimeout(t);
    t = setTimeout(() => {
      Store.saveNote(l.id, editor.innerHTML, editor.innerText);
      saveState.textContent = "Saved ✓";
      saveState.classList.add("saved");
      updateWc();
      renderSectionList(section);
    }, 600);
  };

  $$("#note-toolbar [data-cmd]").forEach((b) => {
    b.onmousedown = (e) => e.preventDefault(); // keep editor selection
    b.onclick = () => {
      editor.focus();
      document.execCommand(b.dataset.cmd, false, b.dataset.val || null);
    };
  });

  $("#print-note").onclick = () => printNotes([l.id]);
  $("#clear-note").onclick = () => {
    if (!editor.innerText.trim() || confirm("Clear your notes for this lesson?")) {
      editor.innerHTML = "";
      Store.saveNote(l.id, "", "");
      saveState.textContent = "Cleared";
      updateWc();
      renderSectionList(section);
    }
  };
}

function renderSectionHead(section) {
  const lessons = section.parts.flatMap((p) => p.lessons);
  const idx = COURSE_SECTIONS.indexOf(section);
  const prevS = COURSE_SECTIONS[idx - 1];
  const nextS = COURSE_SECTIONS[idx + 1];
  const nextSLocked = nextS && sectionLocked(nextS);
  const done = lessons.filter((l) => Store.status(l.id) === "done").length;

  $("#section-head").innerHTML = `
    <button class="btn btn-ghost btn-sm" data-nav="#/home">${I.arrowL} Course map</button>
    <div class="sh-title">
      <span class="section-kicker">➽ ${esc(section.tag)}</span>
      <h2>${esc(section.title)}</h2>
    </div>
    <span class="sh-progress">${done}/${lessons.length} completed</span>
    <div class="section-switch">
      <button class="btn btn-ghost btn-sm" ${prevS ? `data-nav="#/section/${prevS.id}"` : "disabled"}>${I.arrowL} ${prevS ? esc(prevS.tag) : "—"}</button>
      <button class="btn btn-ghost btn-sm" ${nextS && !nextSLocked ? `data-nav="#/section/${nextS.id}"` : "disabled"} ${nextSLocked ? `title="${LOCK_HINT}"` : ""}>
        ${nextS ? (nextSLocked ? I.lock + " " : "") + esc(nextS.tag) : "—"} ${nextS && !nextSLocked ? I.arrowR : ""}
      </button>
    </div>`;

  $$("#section-head [data-nav]").forEach((b) => (b.onclick = () => go(b.dataset.nav)));
}

function renderSection(route) {
  const section = sectionById(route.sectionId);
  if (!section) { go("#/home"); return; }
  const lessons = section.parts.flatMap((p) => p.lessons);

  /* pick the active lesson (never a locked one) */
  let lesson = route.lessonId ? lessonById(route.lessonId) : null;
  if (lesson && (lesson.sectionId !== section.id || isLocked(lesson))) lesson = null;
  if (!lesson) {
    const last = Store.state.lastLessonId && lessonById(Store.state.lastLessonId);
    if (last && last.sectionId === section.id && !isLocked(last)) lesson = last;
  }
  if (!lesson) {
    lesson =
      lessons.find((l) => !isLocked(l) && Store.status(l.id) !== "done") ||
      [...lessons].reverse().find((l) => !isLocked(l)) ||
      null;
  }
  UI.activeLessonId = lesson ? lesson.id : null;
  if (lesson) Store.setLastLesson(lesson.id);

  $("#page").innerHTML = `
    <div class="section-head-bar" id="section-head"></div>
    <div class="course-layout" id="course-layout">
      <div class="list-pane" id="course-list"></div>
      <div class="player-col"><div class="player-pane" id="player-pane"></div></div>
    </div>`;

  renderSectionHead(section);
  renderSectionList(section);
  renderLessonPane(lesson);

  if (route.lessonId && window.matchMedia("(max-width: 1020px)").matches) {
    requestAnimationFrame(() => $("#player-pane").scrollIntoView({ behavior: "smooth", block: "start" }));
  }
}

/* =============================================================
   Notes page
   ============================================================= */

function renderNotes() {
  const notes = Store.notesList();
  $("#page").innerHTML = `
    <div class="notes-page-head">
      <div>
        <h2>My notes</h2>
        <div class="sub">${notes.length ? `${notes.length} lesson${notes.length === 1 ? "" : "s"} with notes — keep them, print them, own them.` : "Everything you write while watching lives here."}</div>
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
              .map(
                ({ lesson, note }) => `
        <section class="glass note-entry">
          <div class="top">
            <span class="where">➽ ${esc(lesson.sectionTag)} · ➧ ${esc(lesson.partTag)}</span>
            <span class="when">Updated ${fmtDate(note.updatedAt)}</span>
          </div>
          <h4>${esc(lesson.title)}</h4>
          <div class="excerpt">${esc(note.text).slice(0, 400)}</div>
          <div class="actions">
            <button class="btn btn-ghost btn-sm" data-goto="${lesson.id}">${I.pen} Open lesson & edit</button>
            <button class="btn btn-ghost btn-sm" data-print="${lesson.id}">${I.print} Print</button>
          </div>
        </section>`
              )
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
  const entries = lessonIds
    .map((id) => ({ lesson: lessonById(id), note: Store.note(id) }))
    .filter((e) => e.lesson && e.note);

  if (!entries.length) {
    alert("No notes to print yet — write something first ✍️");
    return;
  }

  const today = new Date().toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" });
  $("#print-sheet").innerHTML = `
    <div class="ph">
      <div class="brand">GOAT <span>ACADEMY</span></div>
      <div class="meta">${esc(BRAND.course)} · ${esc(Store.member.name)}'s notes · ${esc(today)}</div>
    </div>
    <div class="intro">${entries.length} lesson note${entries.length === 1 ? "" : "s"} exported from the ${esc(BRAND.course)} member app.</div>
    ${entries
      .map(
        ({ lesson, note }) => `
      <div class="pnote">
        <div class="where">${esc(lesson.sectionTag)} · ${esc(lesson.partTag)} · ${esc(lesson.partTitle)}</div>
        <h3>${esc(lesson.title)}</h3>
        <div class="when">Last updated ${fmtDate(note.updatedAt)}</div>
        <div class="body">${note.html}</div>
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
  else if (route.page === "section") renderSection(route);
  else renderNotes();
  window.scrollTo({ top: 0 });
}

window.addEventListener("hashchange", render);

(async function boot() {
  await Store.init();
  render();
})();
