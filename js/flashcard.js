// ============================================================
// FLASHCARD.JS — Mode Flashcard (3D flip)
// ============================================================

let fcDeck = [];
let fcIndex = 0;
let fcFilter = 'all';
let fcIsFlipped = false;

const FC_CAT_COLORS = {
  "droit-c1":"#60a5fa","droit-c2":"#818cf8","droit-c3":"#a78bfa",
  "droit-c4":"#f472b6","droit-c5":"#fb923c","droit-c6":"#fbbf24",
  "eco-c1":"#34d399","eco-c2":"#67e8f9","eco-c3":"#86efac",
  "mgmt-c1":"#f97316","mgmt-c2":"#e879f9"
};

/** Construit le deck selon le filtre actif */
function buildFcDeck() {
  let pool = [...DATA];
  if (fcFilter === 'droit') pool = pool.filter(d => d.cat.startsWith('droit'));
  else if (fcFilter === 'eco') pool = pool.filter(d => d.cat.startsWith('eco'));
  else if (fcFilter === 'mgmt') pool = pool.filter(d => d.cat.startsWith('mgmt'));
  else if (fcFilter === 'todo') pool = pool.filter(d => !isLearned(d.id));
  else if (fcFilter && fcFilter.startsWith('chapter:')) {
    const catId = fcFilter.replace('chapter:', '');
    pool = pool.filter(d => d.cat === catId);
  }
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}

/** Lance les flashcards (mode global) */
function startFlashcard() {
  fcFilter = 'all';
  fcDeck = buildFcDeck();
  fcIndex = 0;
  document.querySelectorAll('.fc-filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.fcFilter === 'all');
  });
  document.getElementById('fcOverlay').classList.add('open');
  renderFcCard();
}

/**
 * Lance les flashcards filtrées sur un chapitre spécifique.
 * @param {string} catId - ex: "droit-c1"
 */
function startFlashcardForChapter(catId) {
  fcFilter = 'chapter:' + catId;
  fcDeck = buildFcDeck();
  fcIndex = 0;
  document.querySelectorAll('.fc-filter-chip').forEach(c => c.classList.remove('active'));
  document.getElementById('fcOverlay').classList.add('open');
  renderFcCard();
}

/** Change le filtre et reconstruit le deck */
function setFcFilter(f) {
  fcFilter = f;
  document.querySelectorAll('.fc-filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.fcFilter === f);
  });
  fcDeck = buildFcDeck();
  fcIndex = 0;
  renderFcCard();
}

/** Met à jour l'affichage de la carte courante */
function renderFcCard() {
  if (!fcDeck.length) return;
  const item = fcDeck[fcIndex];
  const card = document.getElementById('fcCard');
  card.style.transition = 'none';
  card.classList.remove('flipped');
  fcIsFlipped = false;
  void card.offsetWidth;
  card.style.transition = '';

  document.getElementById('fcTerm').textContent = item.term;
  document.getElementById('fcDef').textContent = item.def;

  const badge = document.getElementById('fcCatBadge');
  badge.textContent = CAT_LABELS[item.cat];
  badge.style.background = FC_CAT_COLORS[item.cat] + '22';
  badge.style.color = FC_CAT_COLORS[item.cat];

  document.getElementById('fcCounter').textContent = (fcIndex + 1) + ' / ' + fcDeck.length;

  const lbtn = document.getElementById('fcLearnedBtn');
  if (isLearned(item.id)) {
    lbtn.innerHTML = '✓ Appris';
    lbtn.classList.add('active');
  } else {
    lbtn.textContent = 'Appris';
    lbtn.classList.remove('active');
  }

  renderFcDots();
}

/** Affiche la progression (dots ou barre) */
function renderFcDots() {
  const wrap = document.getElementById('fcDots');
  wrap.innerHTML = '';
  const n = fcDeck.length;
  const learnedCount = fcDeck.filter(d => isLearned(d.id)).length;

  if (n <= 24) {
    const row = document.createElement('div');
    row.className = 'fc-progress-dots-row';
    for (let i = 0; i < n; i++) {
      const d = document.createElement('div');
      d.className = 'fc-dot';
      if (i === fcIndex) d.classList.add('current');
      else if (isLearned(fcDeck[i].id)) d.classList.add('ok');
      else if (i < fcIndex) d.classList.add('seen');
      row.appendChild(d);
    }
    wrap.appendChild(row);
  } else {
    const pct = n ? Math.round((fcIndex + 1) / n * 100) : 0;
    const track = document.createElement('div');
    track.className = 'fc-progress-bar-track';
    const fill = document.createElement('div');
    fill.className = 'fc-progress-bar-fill';
    fill.style.width = pct + '%';
    track.appendChild(fill);
    wrap.appendChild(track);
    const info = document.createElement('div');
    info.className = 'fc-progress-bar-info';
    info.innerHTML = `<span style="color:#6366f1">${fcIndex + 1} / ${n}</span> &nbsp;·&nbsp; <span style="color:#4ade80">✓ ${learnedCount} appris</span>`;
    wrap.appendChild(info);
  }
}

function fcFlip() {
  fcIsFlipped = !fcIsFlipped;
  document.getElementById('fcCard').classList.toggle('flipped', fcIsFlipped);
}

function fcGo(dir) {
  if (!fcDeck.length) return;
  fcIndex = (fcIndex + dir + fcDeck.length) % fcDeck.length;
  renderFcCard();
}

function fcGoRandom() {
  if (fcDeck.length <= 1) return;
  let next;
  do { next = Math.floor(Math.random() * fcDeck.length); } while (next === fcIndex);
  fcIndex = next;
  renderFcCard();
}

function fcToggleLearned() {
  const item = fcDeck[fcIndex];
  toggleLearned(item.id);
  renderFcCard();
}

function closeFlashcard() {
  document.getElementById('fcOverlay').classList.remove('open');
  if (typeof currentChapterId !== 'undefined' && currentChapterId) {
    showChapterView(currentChapterId);
  } else {
    renderAll();
  }
}
