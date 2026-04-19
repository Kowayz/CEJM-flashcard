// ============================================================
// QUIZ.JS — Mode Quiz Adaptatif (Répétition Espacée SM-2)
// ============================================================

const QUIZ_KEY = 'cejm_quiz_v1';

// Intervalles de révision par niveau (en ms)
// 0=Nouveau  1=Apprenti(4h)  2=En cours(1j)  3=Bon(3j)  4=Fort(7j)  5=Maîtrisé(21j)
const SR_INTERVALS = [0, 4 * 3600000, 86400000, 3 * 86400000, 7 * 86400000, 21 * 86400000];
const SR_LABELS    = ['Nouveau', 'Apprenti', 'En cours', 'Bon', 'Fort', 'Maîtrisé'];
const SR_COLORS    = ['#94a3b8', '#fb923c', '#67e8f9', '#86efac', '#34d399', '#a78bfa'];

let quizState    = {};   // { [id]: { level, nextReview } }
let quizSession  = [];   // cartes de la session courante
let quizSessIdx  = 0;
let quizCorrect  = 0;
let quizProgressed = 0;

// ── Persistance ───────────────────────────────────────────────
function loadQS()  { try { quizState = JSON.parse(localStorage.getItem(QUIZ_KEY) || '{}'); } catch { quizState = {}; } }
function saveQS()  { localStorage.setItem(QUIZ_KEY, JSON.stringify(quizState)); }
function getCard(id) { if (!quizState[id]) quizState[id] = { level: 0, nextReview: 0 }; return quizState[id]; }

// ── Stats globales ─────────────────────────────────────────────
function getStats() {
  const now = Date.now();
  let newC = 0, dueC = 0, learningC = 0, masteredC = 0;
  DATA.forEach(d => {
    const c = quizState[d.id];
    if (!c || (c.level === 0 && c.nextReview === 0)) { newC++; return; }
    if (c.level >= 5) { masteredC++; return; }
    if (c.nextReview <= now) { dueC++; return; }
    learningC++;
  });
  return { newC, dueC, learningC, masteredC, total: DATA.length };
}

// ── Sélection de session (10 cartes max) ─────────────────────
function pickSession() {
  const now = Date.now();
  const due = [], fresh = [], soon = [];
  DATA.forEach(d => {
    const c = getCard(d.id);
    if (c.level === 0 && c.nextReview === 0) fresh.push(d);
    else if (c.nextReview <= now) due.push(d);
    else soon.push(d);
  });
  due.sort((a, b) => getCard(a.id).level - getCard(b.id).level);
  fresh.sort(() => Math.random() - 0.5);
  soon.sort((a, b) => getCard(a.id).nextReview - getCard(b.id).nextReview);

  const s = [];
  for (const d of due)   { if (s.length >= 10) break; s.push(d); }
  let nNew = 0;
  for (const d of fresh) { if (s.length >= 10 || nNew >= 5) break; s.push(d); nNew++; }
  for (const d of soon)  { if (s.length >= 10) break; s.push(d); }
  return s.sort(() => Math.random() - 0.5);
}

// ── Ouverture du quiz → écran d'intro ─────────────────────────
function startQuiz() {
  loadQS();
  document.getElementById('quizIntro').style.display = '';
  document.getElementById('quizQuestions').style.display = 'none';
  document.getElementById('quizResult').classList.remove('show');
  renderIntro();
  document.getElementById('quizOverlay').classList.add('open');
}

function renderIntro() {
  renderMasteryScore();
  const s = getStats();
  document.getElementById('quizIntroStats').innerHTML = `
    <div class="qstat qstat-due"><span class="qstat-n">${s.dueC}</span><span class="qstat-l">À revoir</span></div>
    <div class="qstat qstat-new"><span class="qstat-n">${s.newC}</span><span class="qstat-l">Nouvelles</span></div>
    <div class="qstat qstat-learning"><span class="qstat-n">${s.learningC}</span><span class="qstat-l">En cours</span></div>
    <div class="qstat qstat-mastered"><span class="qstat-n">${s.masteredC}</span><span class="qstat-l">Maîtrisées</span></div>`;

  const pct = Math.round((s.masteredC + s.learningC) / s.total * 100);
  document.getElementById('quizIntroFill').style.width = pct + '%';
  document.getElementById('quizIntroLabel').textContent = pct + '% mémorisé — ' + s.masteredC + '/' + s.total + ' maîtrisées';

  const sessionSize = Math.min(10, s.dueC + s.newC);
  const btn = document.getElementById('quizLaunchBtn');
  const hasWork = sessionSize > 0;
  btn.disabled = !hasWork;
  btn.textContent = hasWork ? `Démarrer la session  (${sessionSize} cartes)` : 'Tout est à jour ! 🎉';
}

// ── Lancement de la session ───────────────────────────────────
function launchSession() {
  quizSession  = pickSession();
  if (!quizSession.length) return;
  quizSessIdx  = 0;
  quizCorrect  = 0;
  quizProgressed = 0;
  document.getElementById('quizIntro').style.display = 'none';
  document.getElementById('quizQuestions').style.display = '';
  renderQuizQuestion();
}

// ── Question ──────────────────────────────────────────────────
function renderQuizQuestion() {
  if (quizSessIdx >= quizSession.length) { showQuizResult(); return; }

  const item = quizSession[quizSessIdx];
  const card = getCard(item.id);

  // Compteur + barre de progression
  document.getElementById('quizCounter').textContent = (quizSessIdx + 1) + ' / ' + quizSession.length;
  document.getElementById('quizProgressFill').style.width = (quizSessIdx / quizSession.length * 100) + '%';

  // Badge niveau
  const badge = document.getElementById('quizCardBadge');
  badge.textContent = SR_LABELS[card.level];
  badge.style.color = SR_COLORS[card.level];
  badge.style.borderColor = SR_COLORS[card.level] + '55';
  badge.style.background   = SR_COLORS[card.level] + '18';

  document.getElementById('quizQuestion').textContent = item.term;

  // Catégorie (couleur de la matière)
  const catLabel = document.getElementById('quizCatLabel');
  if (catLabel) { catLabel.textContent = item.cat.replace(/-/g, ' ').toUpperCase(); catLabel.style.color = item.color; }

  // Options
  const wrong = DATA.filter(d => d.id !== item.id).sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [item, ...wrong].sort(() => Math.random() - 0.5);
  const container = document.getElementById('quizOptions');
  container.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt.def.length > 120 ? opt.def.slice(0, 120) + '...' : opt.def;
    btn.addEventListener('click', () => {
      container.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));
      const correct = opt.id === item.id;
      if (correct) { btn.classList.add('correct'); quizCorrect++; }
      else {
        btn.classList.add('wrong');
        container.querySelectorAll('.quiz-option').forEach(b => {
          if (b.textContent === (item.def.length > 120 ? item.def.slice(0, 120) + '...' : item.def)) b.classList.add('correct');
        });
      }
      handleAnswer(correct, item.id);
      setTimeout(() => { quizSessIdx++; renderQuizQuestion(); }, 1400);
    });
    container.appendChild(btn);
  });
}

// ── Mise à jour SR ─────────────────────────────────────────────
function handleAnswer(correct, id) {
  const card = getCard(id);
  const prev = card.level;
  card.level = correct ? Math.min(5, card.level + 1) : Math.max(0, card.level - 2);
  if (card.level > prev) quizProgressed++;
  card.nextReview = Date.now() + SR_INTERVALS[card.level];
  saveQS();
}

function nextQuestion() {
  const item = quizSession[quizSessIdx];
  if (item) handleAnswer(false, item.id);
  quizSessIdx++;
  renderQuizQuestion();
}

// ── Résultat ──────────────────────────────────────────────────
function showQuizResult() {
  document.getElementById('quizQuestions').style.display = 'none';
  document.getElementById('quizResult').classList.add('show');
  const total = quizSession.length;
  const pct   = total > 0 ? Math.round(quizCorrect / total * 100) : 0;
  document.getElementById('quizScore').textContent = quizCorrect + '/' + total;
  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '💪';
  const label = pct >= 90 ? 'Excellent ! Continue comme ça !' :
                pct >= 70 ? 'Très bien ! Encore un effort.' :
                pct >= 50 ? 'Pas mal — les erreurs reviendront bientôt.' :
                            'Ces cartes reviendront rapidement — courage !';
  document.getElementById('quizResultLabel').textContent = emoji + '  ' + label;

  const s = getStats();
  renderMasteryScore();
  document.getElementById('quizResultBreakdown').innerHTML = `
    <div class="qrb-item"><span>${quizProgressed}</span><small>Progressions</small></div>
    <div class="qrb-item"><span>${s.dueC}</span><small>Encore dues</small></div>
    <div class="qrb-item qrb-mastered"><span>${s.masteredC}</span><small>Maîtrisées</small></div>`;
}

// ── Utilitaires ───────────────────────────────────────────────
function restartQuiz() {
  loadQS();
  document.getElementById('quizResult').classList.remove('show');
  document.getElementById('quizIntro').style.display = '';
  renderIntro();
}

function resetQuizProgress() {
  if (!confirm('Réinitialiser toute la progression du quiz ?')) return;
  quizState = {};
  saveQS();
  renderIntro();
}

function closeQuiz() {
  document.getElementById('quizOverlay').classList.remove('open');
  renderMasteryScore();
}

// ── Tableau de bord (panneau droit du quiz) ────────────
function renderMasteryScore() {
  const s = getStats();
  const pct = Math.round((s.masteredC + s.learningC) / s.total * 100);
  const color = pct >= 80 ? '#a78bfa' : pct >= 50 ? '#34d399' : pct >= 25 ? '#67e8f9' : '#fb923c';

  const pctEl = document.getElementById('qdbPct');
  if (!pctEl) return;
  pctEl.textContent = pct + '%';
  pctEl.style.color = color;

  const fill = document.getElementById('qdbBarFill');
  fill.style.width = pct + '%';
  fill.style.background = `linear-gradient(90deg, #6366f1, ${color})`;

  document.getElementById('qdbDetail').textContent =
    s.masteredC + ' maîtrisées · ' + s.learningC + ' en cours · ' + s.newC + ' non vues';

  // Par matière
  const subjects = [
    { key: 'droit', label: 'Droit', color: '#60a5fa' },
    { key: 'eco',   label: 'Éco',   color: '#34d399' },
    { key: 'mgmt',  label: 'Mgmt',  color: '#f97316' },
  ];
  document.getElementById('qdbSubjects').innerHTML = subjects.map(sub => {
    const cards = DATA.filter(d => d.cat.startsWith(sub.key));
    let done = 0;
    cards.forEach(d => { const c = quizState[d.id]; if (c && c.level > 0) done++; });
    const sp = cards.length ? Math.round(done / cards.length * 100) : 0;
    return `<div class="qdb-subj-row">
      <span class="qdb-subj-name" style="color:${sub.color}">${sub.label}</span>
      <div class="qdb-subj-bar"><div style="width:${sp}%;background:${sub.color};height:100%;border-radius:999px;transition:width 0.5s"></div></div>
      <span class="qdb-subj-pct" style="color:${sub.color}">${sp}%</span>
    </div>`;
  }).join('');

  // Répartition par niveau
  const counts = [0, 0, 0, 0, 0, 0];
  DATA.forEach(d => { const c = quizState[d.id]; counts[c ? c.level : 0]++; });
  document.getElementById('qdbLevels').innerHTML = SR_LABELS.map((lbl, i) => {
    if (!counts[i]) return '';
    const w = Math.round(counts[i] / s.total * 100);
    return `<div class="qdb-level-row">
      <div class="qdb-level-dot" style="background:${SR_COLORS[i]}"></div>
      <span class="qdb-level-label">${lbl}</span>
      <div class="qdb-level-bar"><div style="width:${w}%;background:${SR_COLORS[i]};height:100%;border-radius:999px;transition:width 0.5s"></div></div>
      <span class="qdb-level-count" style="color:${SR_COLORS[i]}">${counts[i]}</span>
    </div>`;
  }).join('');
}
