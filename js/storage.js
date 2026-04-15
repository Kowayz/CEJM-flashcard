// ============================================================
// STORAGE.JS — Gestion de la progression (localStorage + JSON)
// ============================================================

let learned = JSON.parse(localStorage.getItem('learned') || '{}');

function isLearned(id) { return !!learned[id]; }

function toggleLearned(id) {
  learned[id] = !learned[id];
  saveProgress();
}

function saveProgress() {
  localStorage.setItem('learned', JSON.stringify(learned));
  updateProgress();
  if (typeof updateSidebarProgress === 'function') updateSidebarProgress();
}

function updateProgress() {
  const count = Object.values(learned).filter(Boolean).length;
  const total = DATA.length;
  const el = document.getElementById('progressCount');
  const fill = document.getElementById('progressFill');
  if (el) el.textContent = count + ' / ' + total;
  if (fill) fill.style.width = (count / total * 100) + '%';
}

function resetProgress() {
  if (confirm('Réinitialiser toute la progression ? Cette action est irréversible.')) {
    learned = {};
    saveProgress();
    renderAll();
    showToast('Progression réinitialisée');
  }
}

/** Exporte la progression en fichier JSON téléchargeable */
function exportProgress() {
  const data = {
    exportDate: new Date().toISOString(),
    version: '2.0',
    learned: learned,
    stats: {
      total: DATA.length,
      learned: Object.values(learned).filter(Boolean).length
    }
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cejm-progression-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Progression exportée !');
}

/** Importe une progression depuis un fichier JSON */
function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      learned = data.learned || data;
      saveProgress();
      renderAll();
      showToast('Progression importée avec succès !');
    } catch {
      showToast('Fichier invalide. Veuillez importer un fichier JSON valide.');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

/** Affiche une notification temporaire */
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}
