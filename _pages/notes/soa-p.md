---
title: "SOA P Exam Notes"
permalink: /notes/soa-p/
layout: single
author_profile: true
mathjax: false
---

<link rel="stylesheet" href="{{ '/assets/css/soa-p-notes.css' | relative_url }}">

<div class="p-notes">

  <div class="p-hero">
    <h2>SOA Exam P</h2>

    <p>
      These are my personal study notes for SOA Exam P: a growing
      collection of definitions, formulas, worked examples, and
      problem-solving methods in probability.
    </p>

    <div class="p-actions">

      {% assign p_pdf = site.static_files | where: "path", "/assets/pdf/soa-p-notes.pdf" | first %}
      {% if p_pdf %}
      <a
        href="{{ '/assets/pdf/soa-p-notes.pdf' | relative_url }}"
        class="p-btn"
        target="_blank"
        rel="noopener noreferrer">
        Open the PDF notes
      </a>
      {% endif %}

      <a
        href="{{ '/tools/soa-p-practice/' | relative_url }}"
        class="p-btn p-btn-secondary">
        Open the P practice tool
      </a>

      <a
        href="{{ '/notes/soa-p/formula-boxes/' | relative_url }}"
        class="p-btn">
        Open the Formula Boxes
      </a>

    </div>
  </div>

  <h2 class="p-section-title">Study Topics</h2>

  <div class="p-grid">

    <div class="p-card">
      <span class="p-tag">Foundations</span>
      <h3>General Probability</h3>
      <p>
        Events, set operations, probability rules, counting,
        conditional probability, independence, and Bayes' theorem.
      </p>
    </div>

    <div class="p-card">
      <span class="p-tag">Random Variables</span>
      <h3>Univariate Distributions</h3>
      <p>
        Discrete and continuous random variables, distribution
        functions, expectation, variance, transformations, and
        applications to insurance payments.
      </p>
    </div>

    <div class="p-card">
      <span class="p-tag">Joint Distributions</span>
      <h3>Multivariate Probability</h3>
      <p>
        Joint, marginal, and conditional distributions,
        covariance, correlation, and functions of several
        random variables.
      </p>
    </div>

  </div>

  <h2 class="p-section-title">Problem-Solving Guide</h2>

  <div class="p-card">
    <span class="p-tag">Rule 01</span>

    <h3>Minimum and Maximum Probabilities</h3>

    <p>
      Find the smallest and largest possible probabilities of
      a union or an intersection when only the individual event
      probabilities are known.
    </p>

    <div class="p-actions">
      <a
        href="{{ '/notes/soa-p/formula-boxes/' | relative_url }}#probability-bounds"
        class="p-btn">
        Read the rule and examples
      </a>
    </div>
  </div>

  <div class="p-note">
    Each Formula Box brings together the result, when to use it,
    why it works, and a worked example. New rules will be added
    as these notes develop.
  </div>

  <div class="p-actions">
    <a href="{{ '/notes/' | relative_url }}" class="p-btn">
      Back to all notes
    </a>
  </div>

</div>
