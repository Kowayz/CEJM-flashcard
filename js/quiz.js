// ============================================================
// QUIZ.JS — Mode Quiz (QCM 4 options)
// ============================================================

let quizAll = [];
let quizIndex = 0;
let quizScore = 0;

/** Lance le quiz sur toutes les définitions */
function startQuiz() {
  quizAll = [...DATA].sort(() => Math.random() - 0.5);
  quizIndex = 0;
  quizScore = 0;
  document.getElementById('quizResult').classList.remove('show');
  document.getElementById('quizQuestions').style.display = '';
  document.getElementById('quizOverlay').classList.add('open');
  renderQuizQuestion();
}

/** Affiche la question courante avec 4 options */
function renderQuizQuestion() {
  if (quizIndex >= quizAll.length) { showQuizResult(); return; }
  const item = quizAll[quizIndex];
  document.getElementById('quizCounter').textContent = (quizIndex + 1) + ' / ' + quizAll.length;
  document.getElementById('quizQuestion').textContent = item.term;

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
      if (opt.id === item.id) {
        btn.classList.add('correct');
        quizScore++;
      } else {
        btn.classList.add('wrong');
        container.querySelectorAll('.quiz-option').forEach(b => {
          if (b.textContent === (item.def.length > 120 ? item.def.slice(0, 120) + '...' : item.def)) {
            b.classList.add('correct');
          }
        });
      }
      setTimeout(() => { quizIndex++; renderQuizQuestion(); }, 1400);
    });
    container.appendChild(btn);
  });
}

function nextQuestion() { quizIndex++; renderQuizQuestion(); }

function showQuizResult() {
  document.getElementById('quizQuestions').style.display = 'none';
  document.getElementById('quizResult').classList.add('show');
  const pct = Math.round(quizScore / quizAll.length * 100);
  document.getElementById('quizScore').textContent = quizScore + '/' + quizAll.length;
  let label = pct >= 90 ? 'Excellent ! Tu maîtrises parfaitement !' :
              pct >= 70 ? 'Très bien ! Encore un peu de révision.' :
              pct >= 50 ? 'Pas mal, continue tes efforts !' : 'Il faut réviser davantage. Courage !';
  document.getElementById('quizResultLabel').textContent = label + ' (' + pct + '%)';
}

function restartQuiz() { startQuiz(); }

function closeQuiz() { document.getElementById('quizOverlay').classList.remove('open'); }
