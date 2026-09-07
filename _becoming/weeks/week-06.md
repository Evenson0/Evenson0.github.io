---
title: Multivariate Probability · GLM Validation
title_fr: Probabilité multivariée · Validation d'un GLM

cycle: foundations-01
cycle_week: 6

start_date: 2026-10-11
end_date: 2026-10-17

status: planned

active:
  - actuarial-exam-1
  - research-actuarial-glm-validation
  - physical-training-consistency

maintenance:
  - actuarial-fm-diagnostic
  - english-conversation-practice
  - lean-theorem-proving

quests:

  # ============================================================
  # ACTUARIAL - EXAM P
  # ============================================================

  - domain: actuarial
    node: actuarial-exam-1
    task: Build a strong foundation in joint distributions, marginal distributions, conditional distributions, covariance, correlation, and multivariate expectation.
    task_fr: Construire une base solide sur les distributions conjointes, marginales et conditionnelles, la covariance, la corrélation et l'espérance multivariée.

    completion:
      - Understand joint PMFs
      - Understand joint PDFs
      - Derive marginal distributions
      - Work with conditional distributions
      - Compute conditional expectations
      - Compute covariance
      - Compute correlation
      - Review independence in a multivariate setting
      - Complete one timed multivariate set
      - Rework recurring errors

    completion_fr:
      - Comprendre les fonctions de masse conjointes
      - Comprendre les densités conjointes
      - Déterminer les distributions marginales
      - Travailler avec les distributions conditionnelles
      - Calculer les espérances conditionnelles
      - Calculer la covariance
      - Calculer la corrélation
      - Revoir l'indépendance dans un contexte multivarié
      - Compléter une série multivariée chronométrée
      - Refaire les erreurs récurrentes

  # ============================================================
  # ACTUARIAL - FM MAINTENANCE
  # ============================================================

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: Keep FM warm with two short sessions while Exam P remains the primary actuarial objective.
    task_fr: Maintenir FM actif avec deux courtes séances pendant que l'examen P reste l'objectif actuariel principal.

    completion:
      - Complete two short FM sessions
      - Revisit one previously studied topic
      - Complete one small mixed set
      - Keep calculator skills active

    completion_fr:
      - Compléter deux courtes séances FM
      - Revoir un sujet déjà étudié
      - Compléter une petite série mixte
      - Maintenir les automatismes à la calculatrice

  # ============================================================
  # RESEARCH
  # ============================================================

  - domain: research
    node: research-actuarial-glm-validation
    task: Read Goldburd pages 75–85 and write a concise note on validation, diagnostics, and model reliability.
    task_fr: Lire les pages 75 à 85 de Goldburd et rédiger une note concise sur la validation, les diagnostics et la fiabilité des modèles.

    completion:
      - Read Goldburd pages 75–85
      - Understand validation objectives
      - Identify useful diagnostic tools
      - Understand why in-sample fit is insufficient
      - Identify signs of model instability
      - Connect validation to insurance pricing practice
      - Write one concise technical note

    completion_fr:
      - Lire les pages 75 à 85 de Goldburd
      - Comprendre les objectifs de validation
      - Identifier les outils de diagnostic utiles
      - Comprendre pourquoi l'ajustement sur les données d'entraînement ne suffit pas
      - Identifier les signes d'instabilité d'un modèle
      - Relier la validation à la pratique de tarification en assurance
      - Rédiger une note technique concise

  # ============================================================
  # LEAN
  # ============================================================

  - domain: lean
    node: lean-theorem-proving
    task: Spend one focused session repairing, simplifying, or improving a Lean proof already written.
    task_fr: Consacrer une séance ciblée à corriger, simplifier ou améliorer une preuve Lean déjà écrite.

  # ============================================================
  # ENGLISH
  # ============================================================

  - domain: english
    node: english-conversation-practice
    task: Complete one English conversation and explain covariance or correlation without relying only on formulas.
    task_fr: Compléter une conversation en anglais et expliquer la covariance ou la corrélation sans dépendre uniquement des formules.

  # ============================================================
  # PHYSICAL
  # ============================================================

  - domain: physical
    node: physical-training-consistency
    task: Continue the current physical protocol while monitoring cumulative fatigue and recovery.
    task_fr: Poursuivre le protocole physique actuel tout en surveillant la fatigue cumulative et la récupération.

    completion:
      - Morning routine followed consistently
      - Strength schedule followed
      - Daily movement target pursued
      - Evening routine followed consistently
      - Cumulative fatigue reviewed
      - Recovery problems recorded if they appear

    completion_fr:
      - Routine du matin suivie régulièrement
      - Programme de musculation suivi
      - Objectif de mouvement quotidien poursuivi
      - Routine du soir suivie régulièrement
      - Fatigue cumulative revue
      - Problèmes de récupération notés s'ils apparaissent


# ============================================================
# DAILY PLAN
# ============================================================

days:

  # ============================================================
  # SUNDAY - OCTOBER 11
  # ============================================================

  - date: 2026-10-11
    weekday: sunday
    title: Enter multivariate probability
    title_fr: Entrer dans la probabilité multivariée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Exam P - introduce joint distributions, joint PMFs, joint PDFs, and marginal distributions.
        text_fr: Examen P - introduire les distributions conjointes, fonctions de masse conjointes, densités conjointes et distributions marginales.

      - domain: research
        node: research-actuarial-glm-validation
        time: 30–45 min
        text: Read Goldburd pages 75–78 and identify the main purposes of model validation.
        text_fr: Lire les pages 75 à 78 de Goldburd et identifier les principaux objectifs de validation d'un modèle.


  # ============================================================
  # MONDAY - OCTOBER 12
  # ============================================================

  - date: 2026-10-12
    weekday: monday
    title: Marginal and conditional distributions
    title_fr: Distributions marginales et conditionnelles

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - derive marginal and conditional distributions from joint models and complete 20–25 focused problems.
        text_fr: Examen P - déterminer les distributions marginales et conditionnelles à partir de modèles conjoints et compléter 20 à 25 exercices ciblés.

      - domain: research
        node: research-actuarial-glm-validation
        time: 30–45 min
        text: Read Goldburd pages 79–82 and take notes on diagnostics and model reliability.
        text_fr: Lire les pages 79 à 82 de Goldburd et prendre des notes sur les diagnostics et la fiabilité du modèle.


  # ============================================================
  # TUESDAY - OCTOBER 13
  # ============================================================

  - date: 2026-10-13
    weekday: tuesday
    title: Covariance and correlation
    title_fr: Covariance et corrélation

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - covariance, correlation, expected products, and independence.
        text_fr: Examen P - covariance, corrélation, espérance des produits et indépendance.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance - review one previously studied interest-theory topic.
        text_fr: Entretien FM - revoir un sujet de théorie de l'intérêt déjà étudié.


  # ============================================================
  # WEDNESDAY - OCTOBER 14
  # ============================================================

  - date: 2026-10-14
    weekday: wednesday
    title: Conditional expectation
    title_fr: Espérance conditionnelle

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - conditional expectation and mixed multivariate problems.
        text_fr: Examen P - espérance conditionnelle et problèmes multivariés mixtes.

      - domain: research
        node: research-actuarial-glm-validation
        time: 30–45 min
        text: Read Goldburd pages 83–85 and identify signs of model instability.
        text_fr: Lire les pages 83 à 85 de Goldburd et identifier les signes d'instabilité d'un modèle.

      - domain: lean
        node: lean-theorem-proving
        time: 30–45 min
        text: Repair or simplify one Lean proof already written.
        text_fr: Corriger ou simplifier une preuve Lean déjà écrite.


  # ============================================================
  # THURSDAY - OCTOBER 15
  # ============================================================

  - date: 2026-10-15
    weekday: thursday
    title: Cumulative multivariate practice
    title_fr: Pratique multivariée cumulative

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Complete a cumulative Exam P set combining earlier topics with joint and conditional distributions.
        text_fr: Compléter une série cumulative de P combinant les sujets précédents avec les distributions conjointes et conditionnelles.

      - domain: research
        node: research-actuarial-glm-validation
        time: 45–60 min
        text: Draft the technical note on validation, diagnostics, stability, and insurance-pricing relevance.
        text_fr: Rédiger la première version de la note technique sur la validation, les diagnostics, la stabilité et leur pertinence en tarification d'assurance.


  # ============================================================
  # FRIDAY - OCTOBER 16
  # ============================================================

  - date: 2026-10-16
    weekday: friday
    title: Timed multivariate practice
    title_fr: Pratique multivariée chronométrée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Complete one timed multivariate Exam P block and fully review every error.
        text_fr: Compléter un bloc P multivarié chronométré et revoir entièrement chaque erreur.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance - complete one short mixed set with calculator practice.
        text_fr: Entretien FM - compléter une courte série mixte avec pratique de la calculatrice.

      - domain: english
        node: english-conversation-practice
        time: 60 min
        text: Complete one English conversation and explain covariance, correlation, and independence in plain language.
        text_fr: Compléter une conversation en anglais et expliquer la covariance, la corrélation et l'indépendance en langage simple.


  # ============================================================
  # SATURDAY - OCTOBER 17
  # ============================================================

  - date: 2026-10-17
    weekday: saturday
    title: Consolidate multivariate probability
    title_fr: Consolider la probabilité multivariée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90–120 min
        text: Complete a cumulative Exam P set covering general probability, discrete variables, continuous variables, distributions, and multivariate probability.
        text_fr: Compléter une série cumulative de P couvrant la probabilité générale, les variables discrètes, les variables continues, les distributions et la probabilité multivariée.

      - domain: actuarial
        node: actuarial-exam-1
        time: 30 min
        text: Review the complete P error log and identify the three most important remaining weaknesses.
        text_fr: Revoir tout le journal d'erreurs P et identifier les trois principales faiblesses restantes.

      - domain: research
        node: research-actuarial-glm-validation
        time: 45 min
        text: Clean and finalize the GLM validation note.
        text_fr: Nettoyer et finaliser la note sur la validation des GLM.

      - domain: physical
        node: physical-training-consistency
        time: 15 min
        text: Review fatigue, recovery, and whether the current physical workload remains sustainable.
        text_fr: Revoir la fatigue, la récupération et vérifier si la charge physique actuelle reste soutenable.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare Week 07.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la semaine 07.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
