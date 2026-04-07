---
title: "Financial Mathematics Calculator"
permalink: /tools/financial-math-calculator/
---

<style>
  .fmc-shell {
    max-width: 920px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid rgba(127,127,127,0.20);
    border-radius: 22px;
    background: linear-gradient(
      180deg,
      rgba(127,127,127,0.05),
      rgba(127,127,127,0.025)
    );
    box-shadow:
      0 14px 38px rgba(0,0,0,0.10),
      0 0 0 1px rgba(255,255,255,0.02) inset;
    color: inherit;
  }

  .fmc-rule {
    border: none;
    border-top: 1px solid rgba(120,120,120,0.28);
    margin: 2rem 0;
  }

  .fmc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 14px;
    margin-top: 1rem;
  }

  .fmc-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .fmc-field label {
    font-weight: 600;
    opacity: 0.92;
  }

  .fmc-input,
  .fmc-select {
    padding: 10px 12px;
    color: inherit;
    background: rgba(127,127,127,0.08);
    border: 1px solid rgba(127,127,127,0.28);
    border-radius: 12px;
    outline: none;
    transition:
      border-color 0.22s ease,
      box-shadow 0.22s ease,
      background 0.22s ease,
      transform 0.22s ease;
  }

  .fmc-input:focus,
  .fmc-select:focus {
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.08);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.12);
    transform: translateY(-1px);
  }

  .fmc-btn,
  .fmc-btn:hover,
  .fmc-btn:focus,
  .fmc-btn:active,
  .fmc-btn:visited {
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
  }

  .fmc-btn::before {
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

  .fmc-btn:hover {
    transform: translateY(-2px) scale(1.01);
    border-color: rgba(59,130,246,0.55);
    background: rgba(59,130,246,0.10);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.12),
      0 8px 24px rgba(59,130,246,0.18);
  }

  .fmc-btn:hover::before {
    transform: translateX(130%);
  }

  .fmc-btn-primary {
    background: linear-gradient(135deg, #111827, #1f2937);
    color: white !important;
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  }

  .fmc-btn-primary:hover {
    border-color: rgba(96,165,250,0.65);
    box-shadow:
      0 0 0 1px rgba(96,165,250,0.16),
      0 10px 28px rgba(37,99,235,0.28);
    background: linear-gradient(135deg, #0f172a, #1d4ed8);
  }

  .fmc-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 1.25rem;
  }

  .fmc-box {
    margin-top: 1.5rem;
    padding: 1.3rem 1.35rem;
    border: 1px solid rgba(127,127,127,0.22);
    border-radius: 16px;
    background: rgba(127,127,127,0.05);
  }

  .fmc-alert {
    padding: 12px;
    border-radius: 10px;
  }

  .fmc-alert-error {
    border: 1px solid #f5c2c7;
    background: #f8d7da;
    color: #842029;
  }

  .fmc-result-value {
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 0.5rem;
  }

  .fmc-nav-box {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid rgba(120,120,120,0.22);
    border-radius: 16px;
    background: rgba(127,127,127,0.05);
  }

  .fmc-nav-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
  }

  .fmc-btn-back {
    background: rgba(37,99,235,0.12);
    border: 1px solid rgba(147,197,253,0.7);
    font-weight: 600;
  }

  .fmc-btn-back:hover {
    background: rgba(37,99,235,0.18);
    box-shadow:
      0 0 0 1px rgba(147,197,253,0.20),
      0 8px 24px rgba(37,99,235,0.20);
  }
</style>

<div class="fmc-shell">

  <h1>Financial Mathematics Calculator</h1>

  <p>
    Select the quantity you want to compute, enter the known values, and obtain the corresponding result.
  </p>

  <p>
    This calculator is designed for core topics in interest theory and financial mathematics.
  </p>

  <hr class="fmc-rule">

  <div class="fmc-field">
    <label for="calcType">What do you want to calculate?</label>
    <select id="calcType" class="fmc-select" onchange="renderInputs()">
      <option value="pv">Present Value</option>
      <option value="fv">Future Value</option>
      <option value="ear">Effective Annual Rate</option>
      <option value="nominal">Nominal Rate Convertible m Times</option>
      <option value="delta">Force of Interest</option>
      <option value="annuity-acc">Accumulated Value of an Annuity-Immediate</option>
      <option value="annuity-payment">Payment of an Annuity-Immediate</option>
    </select>
  </div>

  <div id="dynamicInputs" class="fmc-grid"></div>

  <div class="fmc-actions">
    <button onclick="computeResult()" class="fmc-btn fmc-btn-primary">Compute</button>
    <button onclick="clearCalculator()" class="fmc-btn">Clear</button>
  </div>

  <div id="calcMessage" style="margin-top:1rem;"></div>

  <div id="calcResultBox" class="fmc-box" style="display:none;">
    <h3 style="margin-top:0;">Result</h3>
    <div id="calcFormula"></div>
    <div id="calcResult" class="fmc-result-value"></div>
  </div>

  <hr class="fmc-rule">

  <div class="fmc-nav-box">
    <div class="fmc-nav-row">
      <a href="/tools/soa-fm-practice/" class="fmc-btn">← Previous</a>
      <a href="/tools/" class="fmc-btn fmc-btn-back">Back to Tools</a>
      <a href="/tools/soa-fm-practice/" class="fmc-btn">Next →</a>
    </div>
  </div>

</div>

<script>
function makeField(id, label, placeholder) {
  return `
    <div class="fmc-field">
      <label for="${id}">${label}</label>
      <input id="${id}" type="number" step="any" placeholder="${placeholder}" class="fmc-input">
    </div>
  `;
}

function renderInputs() {
  const type = document.getElementById("calcType").value;
  const container = document.getElementById("dynamicInputs");
  document.getElementById("calcMessage").innerHTML = "";
  document.getElementById("calcResultBox").style.display = "none";

  let html = "";

  if (type === "pv") {
    html += makeField("fv", "Future Value", "e.g. 1000");
    html += makeField("i", "Effective annual rate i", "e.g. 0.05");
    html += makeField("n", "Number of periods n", "e.g. 5");
  }

  if (type === "fv") {
    html += makeField("pv", "Present Value", "e.g. 1000");
    html += makeField("i", "Effective annual rate i", "e.g. 0.05");
    html += makeField("n", "Number of periods n", "e.g. 5");
  }

  if (type === "ear") {
    html += makeField("j", "Nominal annual rate j", "e.g. 0.06");
    html += makeField("m", "Conversion frequency m", "e.g. 12");
  }

  if (type === "nominal") {
    html += makeField("i", "Effective annual rate i", "e.g. 0.061678");
    html += makeField("m", "Conversion frequency m", "e.g. 12");
  }

  if (type === "delta") {
    html += makeField("i", "Effective annual rate i", "e.g. 0.05");
  }

  if (type === "annuity-acc") {
    html += makeField("payment", "Periodic payment", "e.g. 100");
    html += makeField("i", "Effective annual rate i", "e.g. 0.05");
    html += makeField("n", "Number of payments n", "e.g. 10");
  }

  if (type === "annuity-payment") {
    html += makeField("acc", "Accumulated value", "e.g. 1257.79");
    html += makeField("i", "Effective annual rate i", "e.g. 0.05");
    html += makeField("n", "Number of payments n", "e.g. 10");
  }

  container.innerHTML = html;
}

function getNumber(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const value = el.value.trim();
  if (value === "") return null;
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function showError(message) {
  document.getElementById("calcResultBox").style.display = "none";
  document.getElementById("calcMessage").innerHTML =
    `<div class="fmc-alert fmc-alert-error">${message}</div>`;
}

function showResult(formula, resultText) {
  document.getElementById("calcMessage").innerHTML = "";
  document.getElementById("calcFormula").innerHTML = formula;
  document.getElementById("calcResult").innerHTML = resultText;
  document.getElementById("calcResultBox").style.display = "block";

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
}

function computeResult() {
  const type = document.getElementById("calcType").value;

  if (type === "pv") {
    const fv = getNumber("fv");
    const i = getNumber("i");
    const n = getNumber("n");
    if (fv === null || i === null || n === null) return showError("Please fill in all required inputs.");
    const pv = fv / Math.pow(1 + i, n);
    showResult(
      `Using \\[ PV = \\frac{FV}{(1+i)^n} \\]`,
      `\\( PV \\approx ${pv.toFixed(6)} \\)`
    );
  }

  if (type === "fv") {
    const pv = getNumber("pv");
    const i = getNumber("i");
    const n = getNumber("n");
    if (pv === null || i === null || n === null) return showError("Please fill in all required inputs.");
    const fv = pv * Math.pow(1 + i, n);
    showResult(
      `Using \\[ FV = PV(1+i)^n \\]`,
      `\\( FV \\approx ${fv.toFixed(6)} \\)`
    );
  }

  if (type === "ear") {
    const j = getNumber("j");
    const m = getNumber("m");
    if (j === null || m === null) return showError("Please fill in all required inputs.");
    const i = Math.pow(1 + j / m, m) - 1;
    showResult(
      `Using \\[ i = \\left(1+\\frac{j}{m}\\right)^m - 1 \\]`,
      `\\( i \\approx ${i.toFixed(6)} \\)`
    );
  }

  if (type === "nominal") {
    const i = getNumber("i");
    const m = getNumber("m");
    if (i === null || m === null) return showError("Please fill in all required inputs.");
    const j = m * (Math.pow(1 + i, 1 / m) - 1);
    showResult(
      `Using \\[ j = m\\left((1+i)^{1/m} - 1\\right) \\]`,
      `\\( j \\approx ${j.toFixed(6)} \\)`
    );
  }

  if (type === "delta") {
    const i = getNumber("i");
    if (i === null) return showError("Please fill in all required inputs.");
    const delta = Math.log(1 + i);
    showResult(
      `Using \\[ \\delta = \\ln(1+i) \\]`,
      `\\( \\delta \\approx ${delta.toFixed(6)} \\)`
    );
  }

  if (type === "annuity-acc") {
    const payment = getNumber("payment");
    const i = getNumber("i");
    const n = getNumber("n");
    if (payment === null || i === null || n === null) return showError("Please fill in all required inputs.");
    const sAngleN = (Math.pow(1 + i, n) - 1) / i;
    const acc = payment * sAngleN;
    showResult(
      `Using \\[ s_{\\overline{n}|} = \\frac{(1+i)^n - 1}{i}, \\qquad AV = R\\, s_{\\overline{n}|} \\]`,
      `\\( AV \\approx ${acc.toFixed(6)} \\)`
    );
  }

  if (type === "annuity-payment") {
    const acc = getNumber("acc");
    const i = getNumber("i");
    const n = getNumber("n");
    if (acc === null || i === null || n === null) return showError("Please fill in all required inputs.");
    const sAngleN = (Math.pow(1 + i, n) - 1) / i;
    const payment = acc / sAngleN;
    showResult(
      `Using \\[ s_{\\overline{n}|} = \\frac{(1+i)^n - 1}{i}, \\qquad R = \\frac{AV}{s_{\\overline{n}|}} \\]`,
      `\\( R \\approx ${payment.toFixed(6)} \\)`
    );
  }
}

function clearCalculator() {
  renderInputs();
  document.getElementById("calcMessage").innerHTML = "";
  document.getElementById("calcResultBox").style.display = "none";
}

renderInputs();
</script>
