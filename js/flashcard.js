// ============================================================
// FLASHCARD.JS — Mode Flashcard avec Active Recall
// ============================================================

let fcDeck = [];
let fcIndex = 0;
let fcFilter = 'all';
let fcIsFlipped = false;
let fcSessionGot = 0;
let fcSessionTotal = 0;
let fcCardLevels = {}; // id → niveau de maîtrise (0, 1, 2 = sorti)
const FC_LEVEL_THRESH = 2; // nombre de Connu consécutifs pour sortir
const FC_RETURN = [2, 4]; // positions de retour selon niveau (0→2, 1→4)
let fcMastered = []; // cartes sorties du deck
let fcShownCount = 0; // compteur pour les révisions surprises
const FC_REVIEW_EVERY = 10; // injecter une révision toutes les N cartes

const FC_CAT_COLORS = {
  "droit-c1":"#60a5fa","droit-c2":"#818cf8","droit-c3":"#a78bfa",
  "droit-c4":"#f472b6","droit-c5":"#fb923c","droit-c6":"#fbbf24",
  "droit-c7":"#a3e635",
  "eco-c1":"#34d399","eco-c2":"#67e8f9","eco-c3":"#86efac",
  "mgmt-c1":"#f97316","mgmt-c2":"#e879f9"
};

/** Construit le deck selon le filtre — cartes non apprises en priorité */
function buildFcDeck() {
  let pool = [...DATA];
  if (fcFilter === 'droit') pool = pool.filter(d => d.cat.startsWith('droit'));
  else if (fcFilter === 'eco') pool = pool.filter(d => d.cat.startsWith('eco'));
  else if (fcFilter === 'mgmt') pool = pool.filter(d => d.cat.startsWith('mgmt'));
  else if (fcFilter === 'todo') pool = pool.filter(d => !isLearned(d.id));
  else if (fcFilter && fcFilter.startsWith('chapter:')) {
    pool = pool.filter(d => d.cat === fcFilter.replace('chapter:', ''));
  }
  // Mélange dans chaque groupe
  const shuffle = arr => { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };
  const todo = shuffle(pool.filter(d => !isLearned(d.id)));
  const done = shuffle(pool.filter(d =>  isLearned(d.id)));
  return [...todo, ...done];
}

/** Lance les flashcards (mode global) */
function startFlashcard() {
  fcFilter = 'all';
  _fcInit();
  document.querySelectorAll('.fc-filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.fcFilter === 'all');
  });
  const ov = document.getElementById('fcOverlay');
  ov.classList.add('open');
  setTimeout(() => ov.focus(), 50);
}

function startFlashcardForChapter(catId) {
  fcFilter = 'chapter:' + catId;
  _fcInit();
  document.querySelectorAll('.fc-filter-chip').forEach(c => c.classList.remove('active'));
  const ov = document.getElementById('fcOverlay');
  ov.classList.add('open');
  setTimeout(() => ov.focus(), 50);
}

function _fcInit() {
  fcDeck = buildFcDeck();
  fcIndex = 0;
  fcSessionGot = 0;
  fcSessionTotal = fcDeck.length;
  fcCardLevels = {};
  fcMastered = [];
  fcShownCount = 0;
  fcDeck.forEach(d => { fcCardLevels[d.id] = 0; });
  _fcHideComplete();
  renderFcCard();
}

/** Change le filtre et reconstruit le deck */
function setFcFilter(f) {
  fcFilter = f;
  document.querySelectorAll('.fc-filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.fcFilter === f);
  });
  document.querySelectorAll('.fc-subchip').forEach(c => {
    c.classList.toggle('active', c.dataset.fcFilter === f);
  });
  // Afficher le bon groupe de sous-chapitres
  const groups = { droit: 'fcChDroit', eco: 'fcChEco', mgmt: 'fcChMgmt' };
  ['fcChDroit', 'fcChEco', 'fcChMgmt'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  const subjectMatch = f.match(/^(droit|eco|mgmt)/);
  if (subjectMatch) {
    const el = document.getElementById(groups[subjectMatch[1]]);
    if (el) el.style.display = 'flex';
  }
  _fcInit();
}

// ── Rendu carte ───────────────────────────────────────────
function renderFcCard() {
  if (!fcDeck.length) { _fcShowComplete(); return; }

  const item = fcDeck[fcIndex];
  const card = document.getElementById('fcCard');

  // Reset flip sans animation
  card.style.transition = 'none';
  card.classList.remove('flipped');
  fcIsFlipped = false;
  void card.offsetWidth;
  card.style.transition = '';

  document.getElementById('fcTerm').textContent = item.term;
  document.getElementById('fcDef').textContent = item.def;
  fcShownCount++;
  // Injection révision surprise toutes les FC_REVIEW_EVERY cartes
  if (fcShownCount % FC_REVIEW_EVERY === 0 && fcMastered.length > 0) {
    const pick = fcMastered.splice(Math.floor(Math.random() * fcMastered.length), 1)[0];
    pick._review = true;
    fcDeck.splice(Math.min(fcIndex + 1, fcDeck.length), 0, pick);
  }

  const catBadge = document.getElementById('fcCatBadge');
  catBadge.textContent = CAT_LABELS[item.cat] || item.cat;
  catBadge.style.background = (FC_CAT_COLORS[item.cat] || '#94a3b8') + '22';
  catBadge.style.color = FC_CAT_COLORS[item.cat] || '#94a3b8';

  const remaining = fcDeck.length;
  const lvl = fcCardLevels[item.id] || 0;
  document.getElementById('fcCounter').textContent = `${fcSessionGot} maîtrisées · ${remaining} restantes`;
  const isReview = !!item._review;
  const lvlColors = ['#94a3b8', '#fb923c', '#34d399', '#a78bfa'];
  const lvlLabels = ['Nouveau', 'À confirmer', 'Maîtrisé', '🔄 Révision'];
  const lvlBadge = document.getElementById('fcLevelBadge');
  if (lvlBadge) {
    const badgeIdx = isReview ? 3 : Math.min(lvl, 2);
    lvlBadge.textContent = lvlLabels[badgeIdx];
    lvlBadge.style.color = lvlColors[badgeIdx];
  }

  _fcShowDefaultActions();
  renderFcDots();
  if (document.activeElement && document.activeElement.tagName === 'BUTTON') {
    document.activeElement.blur();
  }
}

// ── Boutons état ──────────────────────────────────────────
function _fcShowDefaultActions() {
  document.getElementById('fcDefaultActions').style.display = 'flex';
  document.getElementById('fcEvalBtns').style.display = 'none';
}

function _fcShowEvalActions() {
  document.getElementById('fcDefaultActions').style.display = 'none';
  document.getElementById('fcEvalBtns').style.display = 'flex';
}

// ── Flip ──────────────────────────────────────────────────
function fcFlip() {
  if (!fcDeck.length) return;
  fcIsFlipped = !fcIsFlipped;
  document.getElementById('fcCard').classList.toggle('flipped', fcIsFlipped);
  if (fcIsFlipped) {
    _fcShowEvalActions();
    const gotBtn = document.querySelector('.fc-eval-got .fc-eval-label');
    const gotSub = document.querySelector('.fc-eval-got .fc-eval-sub');
    if (gotBtn && fcDeck[fcIndex]) {
      const lvl = fcCardLevels[fcDeck[fcIndex].id] || 0;
      const needsMore = lvl < FC_LEVEL_THRESH - 1;
      gotBtn.textContent = needsMore ? 'Connu ✓' : '✓✓ Maîtrisé !';
      gotSub.textContent = needsMore ? `Revient dans ${FC_RETURN[lvl]} cartes` : 'Carte écartée !';
    }
  } else {
    _fcShowDefaultActions();
  }
}

// ── Active Recall : évaluation ────────────────────────────
function fcRate(rating) {
  if (!fcDeck.length) return;
  const card = fcDeck.splice(fcIndex, 1)[0];

  const lvl = fcCardLevels[card.id] || 0;

  const isReview = !!card._review;

  if (rating === 'got') {
    if (isReview) {
      // Carte de révision réussie → remet en pool maîtrisé
      card._review = false;
      fcMastered.push(card);
    } else {
      const newLvl = lvl + 1;
      fcCardLevels[card.id] = newLvl;
      if (newLvl >= FC_LEVEL_THRESH) {
        // Maîtrisée — sort du deck actif, entre dans pool révision
        fcSessionGot++;
        fcMastered.push(card);
        if (!isLearned(card.id)) toggleLearned(card.id);
      } else {
        const insertAt = Math.min(fcIndex + FC_RETURN[lvl], fcDeck.length);
        fcDeck.splice(insertAt, 0, card);
      }
    }
  } else if (rating === 'hard') {
    if (isReview) {
      // Difficile en révision → reste dans le pool, reviendra plus tard
      card._review = false;
      fcMastered.push(card);
    } else {
      fcDeck.push(card);
    }
  } else {
    // 'again' — remet à zéro, revient dans 2 (qu'elle soit révision ou non)
    card._review = false;
    fcCardLevels[card.id] = 0;
    const insertAt = Math.min(fcIndex + 2, fcDeck.length);
    fcDeck.splice(insertAt, 0, card);
  }

  if (fcIndex >= fcDeck.length) fcIndex = Math.max(0, fcDeck.length - 1);
  renderFcCard();
}

// ── Navigation libre ──────────────────────────────────────
function fcGo(dir) {
  if (!fcDeck.length) return;
  fcIndex = (fcIndex + dir + fcDeck.length) % fcDeck.length;
  renderFcCard();
}

// ── Écran de fin ──────────────────────────────────────────
function _fcShowComplete() {
  document.getElementById('fcCard').closest('.fc-scene').style.display = 'none';
  document.getElementById('fcDefaultActions').style.display = 'none';
  document.getElementById('fcEvalBtns').style.display = 'none';
  document.getElementById('fcComplete').style.display = 'flex';
  const pct = fcSessionTotal ? Math.round(fcSessionGot / fcSessionTotal * 100) : 0;
  document.getElementById('fcCompleteSub').textContent =
    `${fcSessionGot} / ${fcSessionTotal} connues — ${pct}% de réussite`;
}

function _fcHideComplete() {
  const scene = document.querySelector('.fc-scene');
  if (scene) scene.style.display = '';
  document.getElementById('fcComplete').style.display = 'none';
}

function fcRestart() {
  _fcHideComplete();
  _fcInit();
}

// ── Progression dots/barre ───────────────────────────────
function renderFcDots() {
  const wrap = document.getElementById('fcDots');
  wrap.innerHTML = '';
  const n = fcDeck.length;
  const pct = fcSessionTotal ? Math.round(fcSessionGot / fcSessionTotal * 100) : 0;
  const track = document.createElement('div');
  track.className = 'fc-progress-bar-track';
  const fill = document.createElement('div');
  fill.className = 'fc-progress-bar-fill';
  fill.style.width = pct + '%';
  track.appendChild(fill);
  wrap.appendChild(track);
  const info = document.createElement('div');
  info.className = 'fc-progress-bar-info';
  info.innerHTML = `<span style="color:#a78bfa">${fcSessionGot} connus</span> &nbsp;·&nbsp; <span style="color:#475569">${n} restantes</span> &nbsp;·&nbsp; <span style="color:#34d399">${pct}%</span>`;
  wrap.appendChild(info);
}

// ── Raccourcis clavier ────────────────────────────────────
document.addEventListener('keydown', e => {
  if (!document.getElementById('fcOverlay').classList.contains('open')) return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); fcFlip(); }
  else if (fcIsFlipped) {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); fcRate('again'); }
    else if (e.key === 'ArrowDown')  { e.preventDefault(); fcRate('hard'); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); fcRate('got'); }
  } else {
    if (e.key === 'ArrowRight') { e.preventDefault(); fcGo(1); }
    else if (e.key === 'ArrowLeft')  { e.preventDefault(); fcGo(-1); }
  }
  if (e.key === 'Escape') closeFlashcard();
});

// ── Fermeture ─────────────────────────────────────────────
function closeFlashcard() {
  document.getElementById('fcOverlay').classList.remove('open');
  if (typeof currentChapterId !== 'undefined' && currentChapterId) {
    showChapterView(currentChapterId);
  } else {
    renderAll();
  }
}
