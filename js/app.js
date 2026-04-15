// ============================================================
// APP.JS — Orchestrateur principal
// ============================================================

let currentTab = 'all';
let searchActive = false;
let currentChapterId = null;
let currentMode = 'lecture';

// ── SIDEBAR ─────────────────────────────────────────────────

function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  const subjects = [
    { key: 'droit', label: 'Droit', color: '#60a5fa' },
    { key: 'eco',   label: 'Économie', color: '#34d399' },
    { key: 'mgmt',  label: 'Management', color: '#f97316' },
  ];
  let html = `
    <div class="sidebar-header">
      <span style="font-family:'Outfit',sans-serif;font-weight:800;font-size:0.95rem;color:#e2e8f0;">Navigation</span>
      <button class="sidebar-close" onclick="closeSidebar()">✕</button>
    </div>
    <div style="padding:10px 12px 8px;border-bottom:1px solid rgba(255,255,255,0.04);">
      <div class="sidebar-item ${currentChapterId === null ? 'active' : ''}" onclick="showDashboard()" style="border-radius:8px;">
        <span style="font-size:1rem;">🏠</span>
        <span class="sidebar-item-label" style="${currentChapterId === null ? 'color:#e2e8f0' : ''}">Tableau de bord</span>
      </div>
    </div>
  `;
  subjects.forEach(sub => {
    const chapters = CHAPTERS.filter(c => c.subject === sub.key);
    html += `<div class="sidebar-section-title" style="color:${sub.color}80;">${sub.label}</div>`;
    chapters.forEach(ch => {
      const learnedCount = DATA.filter(d => d.cat === ch.id && isLearned(d.id)).length;
      const total = DATA.filter(d => d.cat === ch.id).length;
      const pct = total ? Math.round(learnedCount / total * 100) : 0;
      const isActive = currentChapterId === ch.id;
      html += `
        <div class="sidebar-item ${isActive ? 'active' : ''}" onclick="navigateToChapter('${ch.id}')"
             style="border-left-color:${isActive ? ch.color : 'transparent'};">
          <span style="font-size:0.9rem;flex-shrink:0;">${ch.icon}</span>
          <div style="flex:1;min-width:0;">
            <div class="sidebar-item-label" style="${isActive ? 'color:#e2e8f0;' : ''}">${ch.title}</div>
            <div class="sidebar-progress-mini">
              <div class="sidebar-progress-mini-fill" style="width:${pct}%;background:${ch.color};"></div>
            </div>
            <div class="sidebar-progress-text">${learnedCount}/${total} appris</div>
          </div>
        </div>`;
    });
  });
  sidebar.innerHTML = html;
}

function updateSidebarProgress() { buildSidebar(); }

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarBackdrop').classList.add('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarBackdrop').classList.remove('open');
}

// ── NAVIGATION ──────────────────────────────────────────────

function navigateToChapter(chapterId) {
  currentChapterId = chapterId;
  currentMode = 'lecture';
  closeSidebar();
  showChapterView(chapterId);
  buildSidebar();
}

function showDashboard() {
  currentChapterId = null;
  closeSidebar();
  document.getElementById('mainContent').style.display = '';
  document.getElementById('chapterView').style.display = 'none';
  document.getElementById('searchResults').style.display = 'none';
  document.getElementById('tabsSection').style.display = '';
  renderAll();
  applyTabFilter();
  buildSidebar();
}

function showChapterView(chapterId) {
  const chapter = CHAPTERS.find(c => c.id === chapterId);
  if (!chapter) return;
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('searchResults').style.display = 'none';
  document.getElementById('tabsSection').style.display = 'none';
  const view = document.getElementById('chapterView');
  view.style.display = '';

  const learnedCount = DATA.filter(d => d.cat === chapterId && isLearned(d.id)).length;
  const total = DATA.filter(d => d.cat === chapterId).length;
  const pct = total ? Math.round(learnedCount / total * 100) : 0;

  view.innerHTML = `
    <button class="back-btn" onclick="showDashboard()">← Tableau de bord</button>
    <div class="chapter-header">
      <div class="chapter-header-icon" style="background:${chapter.color}22;color:${chapter.color};">${chapter.icon}</div>
      <div style="flex:1;">
        <div class="chapter-header-title" style="color:${chapter.color};">${chapter.title}</div>
        <div class="chapter-header-sub">${chapter.subtitle}</div>
      </div>
      <div class="chapter-header-progress">
        <div class="chapter-progress-num" style="color:${chapter.color};">${pct}%</div>
        <div class="chapter-progress-label">${learnedCount}/${total} définitions</div>
        <div style="margin-top:6px;width:80px;background:rgba(255,255,255,0.06);border-radius:999px;height:3px;overflow:hidden;">
          <div style="width:${pct}%;height:100%;background:${chapter.color};border-radius:999px;transition:width 0.4s;"></div>
        </div>
      </div>
    </div>
    <div class="mode-tabs">
      <button class="mode-tab ${currentMode==='lecture'?'active':''}" onclick="setChapterMode('lecture','${chapterId}')">📖 Lecture</button>
      <button class="mode-tab ${currentMode==='revision'?'active':''}" onclick="setChapterMode('revision','${chapterId}')">🃏 Flashcards</button>
      <button class="mode-tab ${currentMode==='plantest'?'active':''}" onclick="setChapterMode('plantest','${chapterId}')">🧩 Test du Plan</button>
    </div>
    <div id="chapterModeContent"></div>
    <div id="planTestContainer" style="display:none;"></div>
    <div id="revisionContainer" style="display:none;"></div>
  `;
  loadChapterMode(chapterId);
}

function setChapterMode(mode, chapterId) {
  currentMode = mode;
  showChapterView(chapterId);
}

function loadChapterMode(chapterId) {
  const container  = document.getElementById('chapterModeContent');
  const planCont   = document.getElementById('planTestContainer');
  const revCont    = document.getElementById('revisionContainer');
  if (currentMode === 'lecture') {
    container.style.display = ''; planCont.style.display = 'none'; revCont.style.display = 'none';
    renderReader(chapterId, container);
  } else if (currentMode === 'revision') {
    container.style.display = 'none'; planCont.style.display = 'none'; revCont.style.display = '';
    renderRevisionMode(chapterId, revCont);
  } else if (currentMode === 'plantest') {
    container.style.display = 'none'; revCont.style.display = 'none'; planCont.style.display = '';
    renderPlanTest(chapterId, planCont);
  }
}

/** Affiche les cartes du chapitre + bouton flashcard */
function renderRevisionMode(chapterId, container) {
  const chapter = CHAPTERS.find(c => c.id === chapterId);
  const chapterDefs = DATA.filter(d => d.cat === chapterId);
  const learnedCount = chapterDefs.filter(d => isLearned(d.id)).length;
  container.innerHTML = `
    <div style="text-align:center;margin-bottom:28px;">
      <div style="font-family:'Outfit',sans-serif;font-size:1.1rem;font-weight:800;color:#f1f5f9;margin-bottom:8px;">
        Mode Révision — ${chapter.title}
      </div>
      <div style="font-size:0.8rem;color:#475569;margin-bottom:20px;">
        ${chapterDefs.length} définitions · ${learnedCount} appris
      </div>
      <button class="fc-hero-btn fc-hero-btn-primary" onclick="startFlashcardForChapter('${chapterId}')"
              style="display:inline-flex;margin:0 auto;">
        🃏 Flashcards de ce chapitre
      </button>
    </div>
    <div class="cards-grid" id="chapterCardsGrid"></div>
  `;
  const grid = container.querySelector('#chapterCardsGrid');
  chapterDefs.forEach(item => grid.appendChild(createCard(item)));
}

// ── CARDS ───────────────────────────────────────────────────

function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function createCard(item, highlight = '') {
  const div = document.createElement('div');
  div.className = 'card cat-' + item.cat + (isLearned(item.id) ? ' learned' : '');
  div.style.setProperty('--cat', item.color);
  div.dataset.id = item.id;
  const termHl = highlight ? item.term.replace(new RegExp('(' + escRe(highlight) + ')', 'gi'), '<mark>$1</mark>') : item.term;
  const defHl  = highlight ? item.def.replace(new RegExp('(' + escRe(highlight) + ')', 'gi'), '<mark>$1</mark>') : item.def;
  div.innerHTML = `
    <div class="card-front">
      <div class="card-term"><span>${termHl}</span></div>
      <div class="card-reveal-hint">Cliquer pour voir la définition</div>
      <div class="card-preview">${defHl}</div>
    </div>
    <div class="card-actions">
      <button class="btn-learned ${isLearned(item.id) ? 'active' : ''}"
              onclick="event.stopPropagation();handleToggleLearned(${item.id})">
        ${isLearned(item.id) ? '✓ Appris' : 'Marquer appris'}
      </button>
    </div>`;
  div.addEventListener('click', () => toggleCardDef(div));
  return div;
}

function handleToggleLearned(id) {
  toggleLearned(id);
  if (currentChapterId) showChapterView(currentChapterId);
  else renderAll();
}

function toggleCardDef(card) {
  const preview = card.querySelector('.card-preview');
  const shown = preview.classList.toggle('visible');
  card.classList.toggle('revealed', shown);
}

function renderAll(highlight = '') {
  Object.entries(GRIDS).forEach(([cat, gridId]) => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';
    DATA.filter(d => d.cat === cat).forEach(item => grid.appendChild(createCard(item, highlight)));
  });
}

function filterLearned(onlyNotLearned) {
  document.querySelectorAll('.card').forEach(c => {
    c.style.display = onlyNotLearned && c.classList.contains('learned') ? 'none' : '';
  });
}

function shuffleCards() {
  Object.values(GRIDS).forEach(gridId => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const cards = [...grid.children];
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      grid.appendChild(cards[j]);
      cards.splice(j, 1);
    }
  });
}

// ── MODAL ───────────────────────────────────────────────────

let currentModal = 0, modalList = [];

function openModal(id) {
  modalList = DATA;
  currentModal = modalList.findIndex(d => d.id === id);
  renderModal();
  document.getElementById('modalOverlay').classList.add('open');
}

function renderModal() {
  const item = modalList[currentModal];
  document.getElementById('modalCategory').style.color = item.color;
  document.getElementById('modalCategory').textContent = CAT_LABELS[item.cat];
  document.getElementById('modalTerm').textContent = item.term;
  document.getElementById('modalDef').textContent = item.def;
  const btn = document.getElementById('modalLearnedBtn');
  btn.innerHTML = isLearned(item.id) ? '✓ Marqué comme appris' : 'Marquer comme appris';
  btn.classList.toggle('active', isLearned(item.id));
}

function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }
function modalNav(dir) { currentModal = (currentModal + dir + modalList.length) % modalList.length; renderModal(); }
function toggleLearnedModal() { toggleLearned(modalList[currentModal].id); renderModal(); }

// ── TABS ────────────────────────────────────────────────────

function applyTabFilter() {
  document.querySelectorAll('.section-group').forEach(g => {
    const id = g.id.replace('group-', '');
    if (currentTab === 'all') g.style.display = '';
    else g.style.display = id.startsWith(currentTab) ? '' : 'none';
  });
}

// ── SEARCH ──────────────────────────────────────────────────

function initSearch() {
  const inp = document.getElementById('searchInput');
  if (!inp) return;
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (!q) {
      document.getElementById('searchResults').style.display = 'none';
      if (!currentChapterId) { document.getElementById('mainContent').style.display = ''; renderAll(); }
      searchActive = false;
      return;
    }
    searchActive = true;
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('chapterView').style.display = 'none';
    document.getElementById('searchResults').style.display = '';
    const matches = DATA.filter(d => d.term.toLowerCase().includes(q) || d.def.toLowerCase().includes(q));
    document.getElementById('searchCount').textContent = matches.length + ' résultat(s)';
    const grid = document.getElementById('searchGrid');
    grid.innerHTML = '';
    matches.forEach(item => grid.appendChild(createCard(item, q)));
  });
}

// ── KEYBOARD ────────────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (document.getElementById('modalOverlay').classList.contains('open')) {
    if (e.key === 'ArrowRight') modalNav(1);
    if (e.key === 'ArrowLeft') modalNav(-1);
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Enter') toggleLearnedModal();
  }
  if (document.getElementById('quizOverlay').classList.contains('open') && e.key === 'Escape') closeQuiz();
  if (document.getElementById('fcOverlay').classList.contains('open')) {
    if (e.key === 'Escape') closeFlashcard();
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); fcFlip(); }
    if (e.key === 'ArrowRight') fcGo(1);
    if (e.key === 'ArrowLeft') fcGo(-1);
    if (e.key === 'r' || e.key === 'R') fcGoRandom();
    if (e.key === 'a' || e.key === 'A') fcToggleLearned();
  }
});

// ── INIT ────────────────────────────────────────────────────

function init() {
  renderAll();
  updateProgress();
  buildSidebar();
  initSearch();
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.dataset.tab;
      applyTabFilter();
    });
  });
  applyTabFilter();
}

init();
