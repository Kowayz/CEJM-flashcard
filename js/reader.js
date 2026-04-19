// ============================================================
// READER.JS — Mode Lecture : accordéons, plan test, schémas
// ============================================================

/** Rend le Mode Lecture d'un chapitre dans le conteneur donné */
function renderReader(chapterId, container) {
  const chapter = CHAPTERS.find(c => c.id === chapterId);
  if (!chapter) return;
  container.innerHTML = '';

  const readerDiv = document.createElement('div');
  readerDiv.className = 'reader-view';
  readerDiv.style.setProperty('--chap-color', chapter.color);

  // ── Intro du chapitre ──────────────────────────────────
  if (chapter.intro) {
    const introEl = document.createElement('p');
    introEl.className = 'reader-intro';
    introEl.textContent = chapter.intro;
    readerDiv.appendChild(introEl);
  }

  // ── Plan du chapitre (dépliable) ───────────────────────
  if (chapter.plan && chapter.plan.length) {
    const planDetails = document.createElement('details');
    planDetails.className = 'reader-plan-block';
    const planSummary = document.createElement('summary');
    planSummary.innerHTML = `<span>📋 Plan du chapitre</span><span class="reader-plan-chevron">▼</span>`;
    planDetails.appendChild(planSummary);

    const planList = document.createElement('div');
    planList.className = 'reader-plan-list';
    chapter.plan.forEach(item => {
      const planItem = document.createElement('div');
      planItem.className = 'reader-plan-item';
      planItem.innerHTML = `<span class="reader-plan-dot"></span><span>${item.title}</span>`;
      planList.appendChild(planItem);
      if (item.children) {
        item.children.forEach(child => {
          const subItem = document.createElement('div');
          subItem.className = 'reader-plan-subitem';
          subItem.innerHTML = `<span class="reader-plan-subdot"></span><span>${child.title}</span>`;
          planList.appendChild(subItem);
        });
      }
    });
    planDetails.appendChild(planList);
    readerDiv.appendChild(planDetails);
  }

  // ── Sections de contenu ────────────────────────────────
  chapter.content.forEach((section, si) => {
    const sectionTitleEl = document.createElement('div');
    sectionTitleEl.className = 'reader-section-title-main';
    sectionTitleEl.textContent = section.sectionTitle;
    readerDiv.appendChild(sectionTitleEl);

    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'reader-section';

    section.subsections.forEach((sub, subIdx) => {
      const details = document.createElement('div');
      details.className = 'reader-subsection';

      const summary = document.createElement('div');
      summary.className = 'reader-subsection-title';
      summary.innerHTML = `<span style="color:${chapter.color};" class="reader-sub-bar"></span><span>${sub.title}</span>`;
      details.appendChild(summary);

      const body = document.createElement('div');
      body.className = 'reader-subsection-body';

      // Texte principal (support multi-paragraphes via \n\n)
      const paragraphs = sub.text.split('\n\n');
      paragraphs.forEach(para => {
        const p = document.createElement('p');
        p.className = 'reader-subsection-text';
        p.textContent = para.trim();
        body.appendChild(p);
      });

      // Images inline
      if (sub.images && sub.images.length) {
        sub.images.forEach(img => {
          const block = document.createElement('div');
          block.className = 'reader-image-block';
          const imgEl = document.createElement('img');
          imgEl.src = img.src;
          imgEl.alt = img.alt;
          imgEl.loading = 'lazy';
          block.appendChild(imgEl);
          if (img.caption) {
            const cap = document.createElement('p');
            cap.className = 'reader-image-caption';
            cap.textContent = img.caption;
            block.appendChild(cap);
          }
          body.appendChild(block);
        });
      }

      // Callouts (exemples, avertissements, infos)
      if (sub.callouts && sub.callouts.length) {
        sub.callouts.forEach(callout => {
          const calloutEl = document.createElement('div');
          calloutEl.className = `reader-callout ${callout.type}`;
          calloutEl.innerHTML = `
            <span class="reader-callout-icon">${callout.icon}</span>
            <div class="reader-callout-content">
              <div class="reader-callout-label">${callout.label}</div>
              <div>${callout.text}</div>
            </div>
          `;
          body.appendChild(calloutEl);
        });
      }

      // Points clés
      if (sub.keyPoints && sub.keyPoints.length) {
        const kpContainer = document.createElement('div');
        kpContainer.className = 'reader-keypoints';
        const kpHeader = document.createElement('div');
        kpHeader.className = 'reader-keypoints-header';
        kpHeader.innerHTML = `<span>◆</span> Points clés`;
        kpContainer.appendChild(kpHeader);
        sub.keyPoints.forEach(point => {
          const item = document.createElement('div');
          item.className = 'reader-keypoint';
          item.innerHTML = `<span class="reader-keypoint-dot"></span><span>${point}</span>`;
          kpContainer.appendChild(item);
        });
        body.appendChild(kpContainer);
      }

      details.appendChild(body);
      sectionDiv.appendChild(details);
    });

    readerDiv.appendChild(sectionDiv);
  });

  container.appendChild(readerDiv);

  // ── Schéma SVG ─────────────────────────────────────────
  if (chapter.schema && chapter.schema.svg) {
    const schemaBlock = document.createElement('div');
    schemaBlock.className = 'schema-block';
    schemaBlock.style.setProperty('--chap-color', chapter.color);
    schemaBlock.innerHTML = `<div class="schema-block-title">${chapter.schema.title}</div>${chapter.schema.svg}`;
    container.appendChild(schemaBlock);
  }

  // ── Fiche Examen ───────────────────────────────────────
  if (chapter.examFocus) {
    const ef = chapter.examFocus;
    const examBlock = document.createElement('div');
    examBlock.className = 'exam-focus-block';
    let html = `<div class="exam-focus-header"><span class="exam-focus-icon">🎯</span><div><div class="exam-focus-title">Fiche Examen</div><div class="exam-focus-subtitle">Points clés · Méthode RAC · Pièges à éviter</div></div></div>`;
    if (ef.pointsCles && ef.pointsCles.length) {
      html += `<div class="exam-section-label">📌 À savoir absolument</div><ul class="exam-points-list">`;
      ef.pointsCles.forEach(p => { html += `<li>${p}</li>`; });
      html += `</ul>`;
    }
    if (ef.rac) {
      html += `<div class="exam-section-label">✏️ Méthode RAC — Exemple type</div><div class="exam-rac-block"><div class="rac-row"><span class="rac-label rac-s">Situation</span><span>${ef.rac.situation}</span></div><div class="rac-row"><span class="rac-label rac-r">Règle</span><span>${ef.rac.regle}</span></div><div class="rac-row"><span class="rac-label rac-a">Application</span><span>${ef.rac.application}</span></div><div class="rac-row"><span class="rac-label rac-c">Conclusion</span><span>${ef.rac.conclusion}</span></div></div>`;
    }
    if (ef.pieges && ef.pieges.length) {
      html += `<div class="exam-section-label">⚠️ Pièges à éviter</div><ul class="exam-pieges-list">`;
      ef.pieges.forEach(p => { html += `<li>${p}</li>`; });
      html += `</ul>`;
    }
    examBlock.innerHTML = html;
    container.appendChild(examBlock);
  }

  // ── Focus jurisprudence / auteur ───────────────────────
  if (chapter.focus) {
    const focusBlock = document.createElement('div');
    focusBlock.className = 'focus-block';
    const icon = chapter.focus.type === 'jurisprudence' ? '⚖️' : '📚';
    const typeLabel = chapter.focus.type === 'jurisprudence' ? 'Focus Jurisprudence' : 'Focus Auteur';
    focusBlock.innerHTML = `
      <div class="focus-block-header">
        <span class="focus-block-icon">${icon}</span>
        <div>
          <div class="focus-block-title">${chapter.focus.title}</div>
          <div class="focus-block-subtitle">${typeLabel}${chapter.focus.subtitle ? ' · ' + chapter.focus.subtitle : ''}</div>
        </div>
      </div>
      <p class="focus-block-text">${chapter.focus.content}</p>
      ${chapter.focus.tags ? '<div class="focus-tags">' + chapter.focus.tags.map(t => `<span class="focus-tag">${t}</span>`).join('') + '</div>' : ''}
    `;
    container.appendChild(focusBlock);
  }
}

// ============================================================
// PLAN TEST — Mini-jeu de remise en ordre du plan
// ============================================================

let planTestOrder = [];
let planTestCorrect = [];
let planTestDragSrc = null;
let planTestChapterId = null;

/** Rend le mini-jeu "Test du Plan" */
function renderPlanTest(chapterId, container) {
  planTestChapterId = chapterId;
  const chapter = CHAPTERS.find(c => c.id === chapterId);
  if (!chapter || !chapter.plan) {
    container.innerHTML = '<div style="text-align:center; color:#475569; padding:40px;">Plan non disponible pour ce chapitre.</div>';
    return;
  }
  container.innerHTML = '';

  // Construire la liste correcte en aplatissant le plan
  planTestCorrect = [];
  chapter.plan.forEach(section => {
    planTestCorrect.push(section.title);
    if (section.children) {
      section.children.forEach(child => planTestCorrect.push(child.title));
    }
  });

  // Mélanger
  planTestOrder = [...planTestCorrect].sort(() => Math.random() - 0.5);

  const intro = document.createElement('div');
  intro.className = 'plan-test-intro';
  intro.innerHTML = `
    <h3>🧩 Test du Plan</h3>
    <p>Remettez les éléments du plan dans le bon ordre par glisser-déposer.</p>
  `;
  container.appendChild(intro);

  const list = document.createElement('div');
  list.className = 'plan-test-list';
  list.id = 'planTestList';
  renderPlanTestItems(list);
  container.appendChild(list);

  const actions = document.createElement('div');
  actions.className = 'plan-test-actions';
  actions.innerHTML = `
    <button class="btn-primary" onclick="checkPlanTest()">Vérifier</button>
    <button class="btn-secondary" onclick="renderPlanTest('${chapterId}', document.getElementById('planTestContainer'))">Mélanger à nouveau</button>
    <button class="btn-secondary" onclick="showPlanSolution()">Voir la correction</button>
  `;
  container.appendChild(actions);

  const result = document.createElement('div');
  result.className = 'plan-test-result';
  result.id = 'planTestResult';
  container.appendChild(result);
}

function renderPlanTestItems(list) {
  list.innerHTML = '';
  planTestOrder.forEach((title, idx) => {
    const item = document.createElement('div');
    item.className = 'plan-test-item';
    item.draggable = true;
    item.dataset.idx = idx;
    item.dataset.title = title;
    const isSubsection = /^[A-Z]\./.test(title.trim());
    if (isSubsection) item.style.marginLeft = '24px';
    item.innerHTML = `
      <span class="plan-test-grip">⠿</span>
      <span class="plan-test-num">${idx + 1}</span>
      <span>${title}</span>
    `;

    item.addEventListener('dragstart', (e) => {
      planTestDragSrc = item;
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      document.querySelectorAll('.plan-test-item').forEach(el => el.classList.remove('drag-over'));
    });
    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (planTestDragSrc !== item) item.classList.add('drag-over');
    });
    item.addEventListener('dragleave', () => item.classList.remove('drag-over'));
    item.addEventListener('drop', (e) => {
      e.preventDefault();
      if (planTestDragSrc && planTestDragSrc !== item) {
        const srcIdx = parseInt(planTestDragSrc.dataset.idx);
        const dstIdx = parseInt(item.dataset.idx);
        [planTestOrder[srcIdx], planTestOrder[dstIdx]] = [planTestOrder[dstIdx], planTestOrder[srcIdx]];
        renderPlanTestItems(list);
      }
    });

    list.appendChild(item);
  });
}

function checkPlanTest() {
  const items = document.querySelectorAll('.plan-test-item');
  const resultEl = document.getElementById('planTestResult');
  let correct = 0;
  items.forEach((item, idx) => {
    const title = item.dataset.title;
    if (title === planTestCorrect[idx]) {
      item.classList.add('correct'); item.classList.remove('wrong'); correct++;
    } else {
      item.classList.add('wrong'); item.classList.remove('correct');
    }
  });
  const total = planTestCorrect.length;
  const pct = Math.round(correct / total * 100);
  let msg = pct === 100 ? '🎉 Parfait ! Tu maîtrises le plan !' :
            pct >= 70 ? '👍 Bien ! Encore un peu de travail.' :
            pct >= 40 ? '📚 Continue à réviser le plan.' : '💪 Relis le cours et réessaie !';
  resultEl.style.display = 'block';
  resultEl.innerHTML = `<div class="plan-test-score">${correct}/${total}</div><div style="color:#64748b;font-size:0.85rem;margin-top:4px;">${msg} (${pct}%)</div>`;
}

function showPlanSolution() {
  planTestOrder = [...planTestCorrect];
  const list = document.getElementById('planTestList');
  if (list) renderPlanTestItems(list);
  setTimeout(() => {
    document.querySelectorAll('.plan-test-item').forEach(item => item.classList.add('correct'));
  }, 50);
  const resultEl = document.getElementById('planTestResult');
  if (resultEl) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = '<div style="color:#64748b;font-size:0.85rem;">📖 Voici le plan correct.</div>';
  }
}
