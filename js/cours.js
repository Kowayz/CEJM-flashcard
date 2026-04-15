// ============================================================
// COURS.JS — Page dédiée à la lecture des cours CEJM
// ============================================================

let coursCurrentChapter = null;
let coursCurrentMode = 'lecture';

// ── INIT ─────────────────────────────────────────────────────

function coursInit() {
  const params = new URLSearchParams(window.location.search);
  const chId   = params.get('ch');
  const mode   = params.get('mode') || 'lecture';

  coursCurrentMode    = mode;
  coursCurrentChapter = chId || null;

  if (chId && CHAPTERS.find(c => c.id === chId)) {
    showCoursChapter(chId, false);
  } else {
    showCoursHub(false);
  }
}

// ── HUB ──────────────────────────────────────────────────────

function showCoursHub(pushState = true) {
  coursCurrentChapter = null;
  coursCurrentMode    = 'lecture';
  if (pushState) updateCoursURL();

  const content = document.getElementById('coursContent');

  const subjects = [
    { key: 'droit', label: 'Droit',      color: '#60a5fa', icon: '⚖️' },
    { key: 'eco',   label: 'Économie',   color: '#34d399', icon: '📈' },
    { key: 'mgmt',  label: 'Management', color: '#f97316', icon: '🎯' },
  ];

  const totalChapters = CHAPTERS.length;

  let html = `
    <div class="cours-hub-hero">
      <div class="cours-hub-eyebrow">Ressources pédagogiques</div>
      <div class="cours-hub-title">Tous les cours</div>
      <div class="cours-hub-sub">
        Retrouvez ici l'intégralité des cours structurés en sections, sous-sections,<br>
        points clés et schémas — pour réviser en profondeur.
      </div>
      <div class="cours-hub-stats">
        <div>
          <div class="cours-hub-stat-num">${totalChapters}</div>
          <div class="cours-hub-stat-label">chapitres</div>
        </div>
        <div>
          <div class="cours-hub-stat-num">3</div>
          <div class="cours-hub-stat-label">matières</div>
        </div>
      </div>
    </div>
  `;

  subjects.forEach(sub => {
    const chapters = CHAPTERS.filter(c => c.subject === sub.key);
    html += `
      <div class="cours-hub-subject">
        <div class="cours-hub-subject-title" style="color:${sub.color};">
          <span>${sub.icon}</span>${sub.label}
        </div>
        <div class="cours-hub-grid">
    `;
    chapters.forEach(ch => {
      html += `
        <div class="cours-hub-card" onclick="showCoursChapter('${ch.id}')" style="--chap-color:${ch.color};">
          <div class="cours-hub-card-icon">${ch.icon}</div>
          <div class="cours-hub-card-title" style="color:${ch.color};">${ch.title}</div>
          <div class="cours-hub-card-sub">${ch.subtitle}</div>
          <div class="cours-hub-card-arrow">→</div>
        </div>`;
    });
    html += `</div></div>`;
  });

  content.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── CHAPTER VIEW ─────────────────────────────────────────────

function showCoursChapter(chId, pushState = true) {
  coursCurrentChapter = chId;
  if (pushState) updateCoursURL();

  const chapter = CHAPTERS.find(c => c.id === chId);
  if (!chapter) return;

  const content = document.getElementById('coursContent');
  content.innerHTML = `
    <button class="back-btn" onclick="showCoursHub()">← Tous les cours</button>
    <div class="cours-chapter-head">
      <div class="chapter-header-icon" style="background:${chapter.color}22;color:${chapter.color};width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;">${chapter.icon}</div>
      <div style="flex:1;min-width:0;">
        <div class="chapter-header-title" style="color:${chapter.color};">${chapter.title}</div>
        <div class="chapter-header-sub">${chapter.subtitle}</div>
      </div>
      <a href="index.html" class="cours-chapter-flashcard-btn" title="Réviser avec les flashcards">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M12 9v6m-3-3h6"/></svg>
        Flashcards
      </a>
    </div>
    <div class="mode-tabs">
      <button class="mode-tab ${coursCurrentMode === 'lecture'  ? 'active' : ''}" onclick="setCoursMode('lecture','${chId}')">📖 Lecture</button>
      <button class="mode-tab ${coursCurrentMode === 'plantest' ? 'active' : ''}" onclick="setCoursMode('plantest','${chId}')">🧩 Test du Plan</button>
    </div>
    <div id="chapterModeContent"></div>
    <div id="planTestContainer" style="display:none;"></div>
  `;

  loadCoursMode(chId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── MODE SWITCHING ────────────────────────────────────────────

function setCoursMode(mode, chId) {
  coursCurrentMode = mode;
  updateCoursURL();

  document.querySelectorAll('.mode-tab').forEach((t, i) => {
    const isLecture  = t.textContent.includes('Lecture');
    const isPlantest = t.textContent.includes('Plan');
    t.classList.toggle('active',
      (mode === 'lecture'  && isLecture) ||
      (mode === 'plantest' && isPlantest)
    );
  });

  loadCoursMode(chId);
}

function loadCoursMode(chId) {
  const container = document.getElementById('chapterModeContent');
  const planCont  = document.getElementById('planTestContainer');
  if (!container || !planCont) return;

  if (coursCurrentMode === 'lecture') {
    container.style.display = '';
    planCont.style.display  = 'none';
    renderReader(chId, container);
  } else if (coursCurrentMode === 'plantest') {
    container.style.display = 'none';
    planCont.style.display  = '';
    renderPlanTest(chId, planCont);
  }
}

// ── URL ───────────────────────────────────────────────────────

function updateCoursURL() {
  const url = new URL(window.location);
  if (coursCurrentChapter) {
    url.searchParams.set('ch',   coursCurrentChapter);
    url.searchParams.set('mode', coursCurrentMode);
  } else {
    url.searchParams.delete('ch');
    url.searchParams.delete('mode');
  }
  history.pushState({}, '', url);
}

// ── BROWSER BACK / FORWARD ────────────────────────────────────

window.addEventListener('popstate', () => coursInit());

// ── START ─────────────────────────────────────────────────────

coursInit();
