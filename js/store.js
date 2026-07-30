/* =============================================================
   GOAT ACADEMY · Academy Modules — member state store
   -------------------------------------------------------------
   The UI only ever talks to `Store`. Swap the adapter below to
   move persistence from localStorage to the Mighty Networks
   Headless API without touching any UI code.

   ── HANDOFF NOTES FOR THE TECH TEAM ──────────────────────────
   Implement `MightyHeadlessAdapter` with the same four methods
   as `LocalAdapter` and flip `ACTIVE_ADAPTER`.

   Mapping you need is already in js/data.js:
     lesson.mighty.postId   → Mighty Post resourceId (coursework)
     lesson.mighty.videoId  → Mighty tracked-video id
     lesson.mighty.asset    → video.mn.co asset url
     BRAND.mightySpace      → "Academy Modules" space (22577702)

   Suggested wiring:
     • member    → Headless API viewer/member query (name, id, avatar)
     • statuses  → per-member coursework progress (post marked
                   complete ↔ status "done"; video play events
                   from data-mighty-tracked-video ↔ "watching")
     • notes     → per-member key/value storage on your backend
                   (the Headless API is read-oriented; notes need
                   a small companion endpoint or profile field)
     • Everything is async already — the UI awaits all calls.
   ───────────────────────────────────────────────────────────── */

const STORAGE_KEY = "goat-academy-modules:v1";

/* Statuses: "towatch" (default, never stored) | "watching" | "done" */

const LocalAdapter = {
  async getMember() {
    // Placeholder identity until the Headless API provides the
    // signed-in Mighty member. window.GOAT_MEMBER can be injected
    // by the embedding page as an interim bridge.
    if (window.GOAT_MEMBER && window.GOAT_MEMBER.name) return window.GOAT_MEMBER;
    return { id: null, name: "Trader", avatarUrl: null };
  },

  async load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  },

  async save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* storage full / private mode — state simply stays in memory */
    }
  },
};

/* Skeleton for the production adapter — same contract as LocalAdapter. */
const MightyHeadlessAdapter = {
  async getMember() {
    // TODO(tech team): query the Headless API for the signed-in member.
    throw new Error("MightyHeadlessAdapter not wired yet");
  },
  async load() {
    // TODO(tech team): fetch { statuses, notes, lastLessonId } for member.
    throw new Error("MightyHeadlessAdapter not wired yet");
  },
  async save(state) {
    // TODO(tech team): persist state; debounced writes are fine.
    throw new Error("MightyHeadlessAdapter not wired yet");
  },
};

const ACTIVE_ADAPTER = LocalAdapter;

const Store = {
  state: { statuses: {}, notes: {}, lastLessonId: null },
  member: { name: "Trader" },
  _saveTimer: null,

  async init() {
    this.member = await ACTIVE_ADAPTER.getMember();
    const loaded = await ACTIVE_ADAPTER.load();
    this.state = Object.assign({ statuses: {}, notes: {}, lastLessonId: null }, loaded);
  },

  _persist() {
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => ACTIVE_ADAPTER.save(this.state), 400);
  },

  /* ---- progress ---- */
  status(lessonId) {
    return this.state.statuses[lessonId] || "towatch";
  },
  setStatus(lessonId, status) {
    if (status === "towatch") delete this.state.statuses[lessonId];
    else this.state.statuses[lessonId] = status;
    this._persist();
    document.dispatchEvent(new CustomEvent("goat:progress"));
  },
  counts() {
    const c = { all: ALL_LESSONS.length, towatch: 0, watching: 0, done: 0 };
    ALL_LESSONS.forEach((l) => c[this.status(l.id)]++);
    return c;
  },
  percentDone() {
    const c = this.counts();
    return c.all ? Math.round((c.done / c.all) * 100) : 0;
  },
  nextUp() {
    /* dripped course: the next lesson is always the first one
       that is not yet completed */
    return (
      ALL_LESSONS.find((l) => this.status(l.id) !== "done") ||
      ALL_LESSONS[ALL_LESSONS.length - 1]
    );
  },

  /* ---- last opened ---- */
  setLastLesson(lessonId) {
    this.state.lastLessonId = lessonId;
    this._persist();
  },

  /* ---- notes ---- */
  note(lessonId) {
    return this.state.notes[lessonId] || null;
  },
  saveNote(lessonId, html, text) {
    const empty = !text || !text.trim();
    if (empty) delete this.state.notes[lessonId];
    else this.state.notes[lessonId] = { html, text, updatedAt: new Date().toISOString() };
    this._persist();
    document.dispatchEvent(new CustomEvent("goat:notes"));
  },
  notesList() {
    return ALL_LESSONS.filter((l) => this.state.notes[l.id]).map((l) => ({
      lesson: l,
      note: this.state.notes[l.id],
    }));
  },
};
