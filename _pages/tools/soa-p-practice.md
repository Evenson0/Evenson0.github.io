---
title: "SOA P Practice"
permalink: /tools/soa-p-practice/
description: "Probability practice with multiple-choice questions and worked solutions for SOA Exam P."
tool_theme: actuarial
---

<style>
  .fm-btn,
  .fm-btn:hover,
  .fm-btn:focus,
  .fm-btn:active,
  .fm-btn:visited {
    position: relative;
    padding: 10px 16px;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none !important;
    color: inherit;
    background: rgba(127,127,127,0.08);
    border: 1px solid rgba(127,127,127,0.28);
    transition:
      transform 0.22s ease,
      box-shadow 0.22s ease,
      border-color 0.22s ease,
      background 0.22s ease,
      color 0.22s ease;
    overflow: hidden;
    backdrop-filter: blur(6px);
    font: inherit;
  }

  .fm-btn *,
  .fm-btn:hover *,
  .fm-btn:focus *,
  .fm-btn:active * {
    text-decoration: none !important;
  }

  a.fm-btn,
  a.fm-btn:hover,
  a.fm-btn:focus,
  a.fm-btn:active,
  a.fm-btn:visited {
    text-decoration: none !important;
  }

  #solutionBox a,
  #solutionBox a:hover,
  #solutionBox a:focus,
  #solutionBox a:active,
  #solutionBox a:visited {
    text-decoration: none !important;
  }

  .fm-btn::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255,255,255,0.00) 35%,
      rgba(255,255,255,0.22) 50%,
      rgba(255,255,255,0.00) 65%,
      transparent 100%
    );
    transform: translateX(-130%);
    transition: transform 0.55s ease;
    pointer-events: none;
  }

  .fm-btn:hover {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.10);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.18);
  }

  .fm-btn:hover::before {
    transform: translateX(130%);
  }

  .fm-btn:active {
    transform: translateY(0) scale(0.99);
  }

  .fm-btn-primary {
    background: linear-gradient(135deg, #111827, #1f2937);
    color: #ffffff !important;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  }

  .fm-btn-primary:hover {
    border-color: rgba(96,165,250,0.65);
    box-shadow:
      0 0 0 1px rgba(96,165,250,0.16),
      0 10px 28px rgba(37,99,235,0.28);
    background: linear-gradient(135deg, #0f172a, #1d4ed8);
    color: #ffffff !important;
  }

  .fm-btn-nav {
    background: rgba(127,127,127,0.06);
  }

  .fm-choice {
    display: block;
    padding: 12px 14px;
    border: 1px solid rgba(127,127,127,0.25);
    border-radius: 12px;
    cursor: pointer;
    transition:
      transform 0.18s ease,
      border-color 0.18s ease,
      background 0.18s ease,
      box-shadow 0.18s ease;
  }

  .fm-choice:hover {
    transform: translateY(-1px);
    border-color: rgba(59,130,246,0.45);
    background: rgba(59,130,246,0.06);
    box-shadow: 0 6px 18px rgba(59,130,246,0.10);
  }

  .fm-choice input {
    margin-right: 10px;
  }

  .fm-counter {
    margin-top: 1rem;
    text-align: right;
    opacity: 0.75;
    font-size: 0.96rem;
    font-weight: 600;
  }

  .fm-result-message {
    margin-top: 1rem;
    padding: 12px 14px;
    border-radius: 12px;
    font-weight: 700;
    line-height: 1.45;
  }

  .fm-result-message,
  .fm-result-message * {
    color: inherit !important;
  }

  .fm-result-correct {
    background: #dcfce7 !important;
    border: 1px solid #86efac !important;
    color: #166534 !important;
  }

  .fm-result-incorrect {
    background: #fee2e2 !important;
    border: 1px solid #fca5a5 !important;
    color: #991b1b !important;
  }

  .fm-result-warning {
    background: #fef3c7 !important;
    border: 1px solid #fcd34d !important;
    color: #92400e !important;
  }

  .fm-answer-box {
    margin-top: 1rem;
    padding: 1rem 1.1rem;
    border-left: 4px solid #16a34a;
    background: #dcfce7 !important;
    border-radius: 10px;
    color: #166534 !important;
  }

  .fm-answer-box,
  .fm-answer-box * {
    color: #166534 !important;
  }

  button.fm-btn-primary,
  button.fm-btn-primary:hover,
  button.fm-btn-primary:focus,
  button.fm-btn-primary:active,
  button.fm-btn-primary:visited {
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    background: linear-gradient(135deg, #111827, #1f2937) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
  }

  button.fm-btn-primary:hover,
  button.fm-btn-primary:focus,
  button.fm-btn-primary:active {
    background: linear-gradient(135deg, #0f172a, #1d4ed8) !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
  }

  button.fm-btn-primary:focus-visible {
    outline: 3px solid rgba(96,165,250,0.45);
    outline-offset: 3px;
  }

  #practiceActions[hidden] {
    display: none !important;
  }

  #solutionSteps p,
  #generalizationText,
  #answerText {
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  @media (max-width: 600px) {
    .fm-shell {
      padding: 1rem !important;
    }
  }
</style>

<div class="fm-shell" style="max-width:850px; margin:2rem auto; padding:2rem; border:1px solid rgba(127,127,127,0.22); border-radius:16px; background:inherit; color:inherit;">

  <div class="fm-kicker">Exam P · Practice desk</div>
  <h1>SOA P Practice</h1>

  <p>
    A collection of probability exercises designed in the spirit of SOA Exam P,
    with a new problem selected at random each time the page is loaded.
  </p>

  <p>
    Each exercise comes with multiple-choice options and a fully worked solution
    for review and self-study.
  </p>

  <p style="font-size:0.875rem;">
    Solved progress is saved in this browser, separately from Exam FM.
  </p>

  <hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:2rem 0;">

  <div class="fm-question-card">
    <h2 id="problemTitle">Loading problem...</h2>

    <div id="problemStatement" style="white-space:pre-wrap; overflow-wrap:anywhere;"></div>

    <div id="choicesContainer" style="display:grid; gap:12px; margin-top:1rem;"></div>
  </div>

  <div id="practiceActions" hidden class="fm-action-bar" style="display:flex; gap:12px; flex-wrap:wrap; margin-top:1.25rem;">
    <button onclick="checkAnswer()" class="fm-btn fm-btn-primary">
      Check Answer
    </button>

    <button onclick="toggleSolution()" class="fm-btn">
      Show Solution
    </button>

    <button onclick="loadRandomProblem()" class="fm-btn">
      New Problem
    </button>

    <button onclick="resetSolvedProgress()" class="fm-btn">
      Reset Progress
    </button>
  </div>

  <div id="result" role="status" aria-live="polite" style="margin-top:1rem; font-weight:600;"></div>

  <div id="solutionBox" style="display:none; margin-top:1.5rem; padding:1.25rem; border:1px solid rgba(127,127,127,0.22); border-radius:14px; background:rgba(127,127,127,0.06);">
    <h3 style="margin-top:0;">Solution</h3>

    <div id="solutionSteps"></div>

    <hr style="border:none; border-top:1px solid rgba(120,120,120,0.25); margin:1.5rem 0;">

    <h3>Generalization</h3>
    <p id="generalizationText"></p>

    <div class="fm-answer-box">
      <strong>Answer.</strong><br>
      <span id="answerText"></span>
    </div>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; margin-top:1rem;">
    <div id="problemCounter" class="fm-counter" style="margin-top:0;">Problem 0 / 0</div>
    <div id="solvedCounter" class="fm-counter" style="margin-top:0;">Solved 0 / 0</div>
  </div>

  <hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:2rem 0;">

  <div style="margin-top:2rem; padding:1rem; border:1px solid rgba(120,120,120,0.22); border-radius:16px; background:rgba(127,127,127,0.05);">
    <div style="display:flex; justify-content:center; align-items:center; flex-wrap:wrap; gap:14px;">
      <a href="{{ '/tools/soa-fm-practice/' | relative_url }}" class="fm-btn fm-btn-nav">
        ← SOA FM
      </a>

      <a href="{{ '/tools/' | relative_url }}" class="fm-btn fm-btn-nav">
        All tools →
      </a>
    </div>
  </div>

</div>

<script>
let problems = [];
let currentProblem = null;

const solvedStorageKey = 'soaPSolvedProblemIds';
let solvedProblemIds = new Set();

function getProblemId(problem) {
  return String(problem.id);
}

function loadSolvedProgress() {
  try {
    const savedProgress = localStorage.getItem(solvedStorageKey);
    const parsedProgress = savedProgress ? JSON.parse(savedProgress) : [];

    solvedProblemIds = new Set(parsedProgress.map(String));
  } catch (error) {
    solvedProblemIds = new Set();
    console.error('Unable to load solved progress:', error);
  }
}

function saveSolvedProgress() {
  try {
    localStorage.setItem(
      solvedStorageKey,
      JSON.stringify(Array.from(solvedProblemIds))
    );
  } catch (error) {
    console.error('Unable to save solved progress:', error);
  }
}

function updateSolvedCounter() {
  const solvedCounter = document.getElementById('solvedCounter');

  if (!solvedCounter) return;

  const total = problems.length;
  const solved = problems.filter(
    problem => solvedProblemIds.has(getProblemId(problem))
  ).length;

  solvedCounter.innerText = `Solved ${solved} / ${total}`;
}

function updateProblemCounter() {
  const total = problems.length;
  const currentId = currentProblem ? currentProblem.id : 0;

  document.getElementById('problemCounter').innerText =
    `Problem ${currentId} / ${total}`;

  updateSolvedCounter();
}

function markCurrentProblemAsSolved() {
  if (!currentProblem) return false;

  const problemId = getProblemId(currentProblem);
  const wasAlreadySolved = solvedProblemIds.has(problemId);

  solvedProblemIds.add(problemId);
  saveSolvedProgress();
  updateSolvedCounter();

  return !wasAlreadySolved;
}

function resetSolvedProgress() {
  const confirmed = confirm(
    'Do you want to reset your solved problem progress?'
  );

  if (!confirmed) return;

  solvedProblemIds.clear();
  saveSolvedProgress();
  updateSolvedCounter();

  const result = document.getElementById('result');
  result.innerHTML =
    '<div class="fm-result-message fm-result-warning">Progress has been reset.</div>';
}

function validateProblems(data) {
  if (!Array.isArray(data)) {
    throw new Error('The problem bank must be an array.');
  }

  const ids = new Set();

  data.forEach(problem => {
    if (
      !problem ||
      !Number.isInteger(problem.id) ||
      problem.id < 1 ||
      ids.has(problem.id)
    ) {
      throw new Error('Problem IDs must be unique positive integers.');
    }

    ids.add(problem.id);

    for (const field of ['title', 'topic', 'statement', 'answer_text']) {
      if (
        typeof problem[field] !== 'string' ||
        !problem[field].trim()
      ) {
        throw new Error('Missing text field: ' + field);
      }
    }

    if (
      !Array.isArray(problem.choices) ||
      problem.choices.length < 2 ||
      !problem.choices.every(
        choice => typeof choice === 'string' && choice.trim()
      ) ||
      !Number.isInteger(problem.correct) ||
      problem.correct < 0 ||
      problem.correct >= problem.choices.length
    ) {
      throw new Error('Invalid choices or correct-answer index.');
    }

    if (
      !Array.isArray(problem.solution_steps) ||
      !problem.solution_steps.length ||
      !problem.solution_steps.every(
        step => typeof step === 'string' && step.trim()
      )
    ) {
      throw new Error('A worked solution is required.');
    }

    if (
      problem.generalization != null &&
      typeof problem.generalization !== 'string'
    ) {
      throw new Error('Generalization must be text.');
    }
  });
}

async function loadProblems() {
  try {
    const response = await fetch(
      "{{ '/assets/data/soa-p-problems.json' | relative_url }}?v=" + Date.now()
    );

    if (!response.ok) {
      throw new Error('HTTP ' + response.status);
    }

    const data = await response.json();

    validateProblems(data);
    problems = data;

    loadSolvedProgress();
    updateProblemCounter();

    if (!problems.length) {
      document.getElementById('problemTitle').innerText =
        'The first problem is on its way';

      document.getElementById('problemStatement').innerText =
        'No Exam P problems have been added yet. New exercises will appear here as the collection grows.';

      return;
    }

    document.getElementById('practiceActions').hidden = false;
    loadRandomProblem();
  } catch (error) {
    document.getElementById('problemTitle').innerText = 'Error';

    document.getElementById('problemStatement').innerText =
      'Unable to load the problems file.';

    console.error(error);
  }
}

function getRandomProblemIndexExcludingCurrent() {
  if (problems.length <= 1 || !currentProblem) {
    return Math.floor(Math.random() * problems.length);
  }

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * problems.length);
  } while (problems[randomIndex].id === currentProblem.id);

  return randomIndex;
}

function loadRandomProblem() {
  if (!problems.length) return;

  const randomIndex = getRandomProblemIndexExcludingCurrent();

  if (window.MathJax && MathJax.typesetClear) {
    MathJax.typesetClear();
  }

  currentProblem = problems[randomIndex];

  document.getElementById('problemTitle').innerText =
    currentProblem.title;

  document.getElementById('problemStatement').textContent =
    currentProblem.statement;

  const choicesContainer = document.getElementById('choicesContainer');
  choicesContainer.innerHTML = '';

  currentProblem.choices.forEach((choice, index) => {
    const letter = String.fromCharCode(65 + index);

    const label = document.createElement('label');
    label.className = 'fm-choice';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer';
    input.value = String(index);

    label.appendChild(input);
    label.appendChild(document.createTextNode(letter + '. ' + choice));

    choicesContainer.appendChild(label);
  });

  document.getElementById('result').innerHTML = '';
  document.getElementById('solutionBox').style.display = 'none';

  renderSolution();
  updateProblemCounter();

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
}

function checkAnswer() {
  if (!currentProblem) return;

  const options = document.getElementsByName('answer');
  const result = document.getElementById('result');

  let selected = null;

  for (const option of options) {
    if (option.checked) {
      selected = Number(option.value);
      break;
    }
  }

  if (selected === null) {
    result.innerHTML =
      '<div class="fm-result-message fm-result-warning">Please select an answer.</div>';

    return;
  }

  if (selected === currentProblem.correct) {
    const newlySolved = markCurrentProblemAsSolved();

    if (newlySolved) {
      result.innerHTML =
        '<div class="fm-result-message fm-result-correct">Correct. This problem has been added to your solved count.</div>';
    } else {
      result.innerHTML =
        '<div class="fm-result-message fm-result-correct">Correct. This problem was already counted.</div>';
    }
  } else {
    result.innerHTML =
      '<div class="fm-result-message fm-result-incorrect">Incorrect. Try again or reveal the solution.</div>';
  }
}

function renderSolution() {
  const solutionSteps = document.getElementById('solutionSteps');
  solutionSteps.innerHTML = '';

  currentProblem.solution_steps.forEach(step => {
    const p = document.createElement('p');
    p.textContent = step;
    solutionSteps.appendChild(p);
  });

  document.getElementById('generalizationText').textContent =
    currentProblem.generalization || '';

  document.getElementById('answerText').textContent =
    currentProblem.answer_text;

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
}

function toggleSolution() {
  if (!currentProblem) return;

  const box = document.getElementById('solutionBox');

  if (box.style.display === 'none') {
    box.style.display = 'block';

    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise();
    }
  } else {
    box.style.display = 'none';
  }
}

loadProblems();
</script>
