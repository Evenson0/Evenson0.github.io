---
title: Distribution Mastery · GLM Refinement
title_fr: Maîtrise des distributions · Amélioration d'un GLM

cycle: foundations-01
cycle_week: 5

start_date: 2026-10-04
end_date: 2026-10-10

status: planned

active:
  - actuarial-exam-1
  - research-actuarial-glm-refinement
  - physical-training-consistency

maintenance:
  - actuarial-fm-diagnostic
  - english-conversation-practice
  - lean-theorem-proving
  - writing-reading-practice

user_inputs:
  literary_book: Mort à crédit
  finance_book: The Intelligent Investor

quests:

  # ============================================================
  # ACTUARIAL - EXAM P
  # ============================================================

  - domain: actuarial
    node: actuarial-exam-1
    task: Consolidate the major discrete and continuous distributions, expectation, variance, and cumulative problem solving.
    task_fr: Consolider les principales distributions discrètes et continues, l'espérance, la variance et la résolution cumulative de problèmes.

    completion:
      - Build a working map of the major Exam P distributions
      - Recognize appropriate distributions from problem statements
      - Review expectations and variances
      - Review discrete distributions
      - Review continuous distributions
      - Complete cumulative mixed practice
      - Complete one timed mixed set
      - Rework recurring errors

    completion_fr:
      - Construire une carte fonctionnelle des principales distributions de l'examen P
      - Reconnaître les distributions appropriées à partir des énoncés
      - Revoir espérances et variances
      - Revoir les distributions discrètes
      - Revoir les distributions continues
      - Compléter une pratique cumulative mixte
      - Compléter une série mixte chronométrée
      - Refaire les erreurs récurrentes

  # ============================================================
  # ACTUARIAL - FM MAINTENANCE
  # ============================================================

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: Keep FM warm with two short sessions without reducing the time needed for Exam P.
    task_fr: Maintenir FM actif avec deux courtes séances sans réduire le temps nécessaire à la préparation de l'examen P.

    completion:
      - Complete two short FM sessions
      - Review one prior weak area
      - Complete one short mixed set
      - Keep calculator skills active

    completion_fr:
      - Compléter deux courtes séances FM
      - Revoir une ancienne faiblesse
      - Compléter une courte série mixte
      - Maintenir les automatismes à la calculatrice

  # ============================================================
  # RESEARCH
  # ============================================================

  - domain: research
    node: research-actuarial-glm-refinement
    task: Read Goldburd pages 62–74 and summarize model fit, model comparison, residual analysis, and stability.
    task_fr: Lire les pages 62 à 74 de Goldburd et résumer l'ajustement, la comparaison des modèles, l'analyse des résidus et la stabilité.

    completion:
      - Understand model fit
      - Understand model comparison
      - Review residual analysis
      - Understand stability considerations
      - Identify warning signs of a poor model
      - Write a concise technical summary

    completion_fr:
      - Comprendre l'ajustement du modèle
      - Comprendre la comparaison des modèles
      - Revoir l'analyse des résidus
      - Comprendre les considérations de stabilité
      - Identifier les signes d'un mauvais modèle
      - Rédiger un résumé technique concis

  # ============================================================
  # WRITING / READING
  # ============================================================

  - domain: writing
    node: writing-reading-practice
    task: Read 40–60 pages of Mort à crédit without forcing an unrealistic weekly volume.
    task_fr: Lire 40 à 60 pages de Mort à crédit sans imposer un volume hebdomadaire irréaliste.

  - domain: writing
    node: writing-reading-practice
    task: Continue The Intelligent Investor and write only the notes worth keeping.
    task_fr: Poursuivre L'Investisseur intelligent et écrire uniquement les notes qui méritent d'être conservées.

  # ============================================================
  # LEAN
  # ============================================================

  - domain: lean
    node: lean-theorem-proving
    task: Study basic tactics and rewrite one earlier Lean proof more cleanly.
    task_fr: Étudier les tactiques de base et réécrire plus proprement une ancienne preuve Lean.

  # ============================================================
  # ENGLISH
  # ============================================================

  - domain: english
    node: english-conversation-practice
    task: Complete one English conversation with part of the session focused on explaining a technical idea clearly.
    task_fr: Compléter une conversation en anglais avec une partie consacrée à l'explication claire d'une idée technique.

  # ============================================================
  # PHYSICAL
  # ============================================================

  - domain: physical
    node: physical-training-consistency
    task: Continue the physical protocol and evaluate whether the routine remains sustainable after several consecutive weeks.
    task_fr: Poursuivre le protocole physique et évaluer si la routine reste soutenable après plusieurs semaines consécutives.

    completion:
      - Morning routine followed consistently
      - Strength schedule followed
      - Daily movement target pursued
      - Evening routine followed consistently
      - Fatigue and recovery reviewed
      - Adjustments made only if genuinely necessary

    completion_fr:
      - Routine du matin suivie régulièrement
      - Programme de musculation suivi
      - Objectif de mouvement quotidien poursuivi
      - Routine du soir suivie régulièrement
      - Fatigue et récupération revues
      - Ajustements faits uniquement s'ils sont réellement nécessaires


# ============================================================
# DAILY PLAN
# ============================================================

days:

  # ============================================================
  # SUNDAY - OCTOBER 4
  # ============================================================

  - date: 2026-10-04
    weekday: sunday
    title: Build the distribution map
    title_fr: Construire la carte des distributions

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Build a one-page Exam P distribution map and solve 20 mixed distribution-identification problems.
        text_fr: Construire une carte d'une page des distributions de P et résoudre 20 problèmes mixtes d'identification des distributions.

      - domain: research
        node: research-actuarial-glm-refinement
        time: 30–45 min
        text: Read Goldburd pages 62–65 and identify the main model-fit concepts.
        text_fr: Lire les pages 62 à 65 de Goldburd et identifier les principaux concepts d'ajustement du modèle.

      - domain: writing
        node: writing-reading-practice
        time: 25–30 min
        text: Continue Mort à crédit.
        text_fr: Poursuivre Mort à crédit.


  # ============================================================
  # MONDAY - OCTOBER 5
  # ============================================================

  - date: 2026-10-05
    weekday: monday
    title: Expectation and variance
    title_fr: Espérance et variance

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - expectation, variance, moments, and applications across discrete and continuous distributions.
        text_fr: Examen P - espérance, variance, moments et applications dans les distributions discrètes et continues.

      - domain: research
        node: research-actuarial-glm-refinement
        time: 30–45 min
        text: Read Goldburd pages 66–69 and take notes on model comparison.
        text_fr: Lire les pages 66 à 69 de Goldburd et prendre des notes sur la comparaison des modèles.

      - domain: writing
        node: writing-reading-practice
        time: 25–30 min
        text: Continue The Intelligent Investor and record only useful notes.
        text_fr: Poursuivre L'Investisseur intelligent et noter uniquement les éléments utiles.


  # ============================================================
  # TUESDAY - OCTOBER 6
  # ============================================================

  - date: 2026-10-06
    weekday: tuesday
    title: Mixed distributions
    title_fr: Distributions mixtes

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - complete a mixed discrete and continuous distribution set without separating problems by topic.
        text_fr: Examen P - compléter une série mixte de distributions discrètes et continues sans séparer les problèmes par sujet.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance - review one prior weak area and complete a short problem set.
        text_fr: Entretien FM - revoir une ancienne faiblesse et compléter une courte série d'exercices.

      - domain: writing
        node: writing-reading-practice
        time: 25–30 min
        text: Continue Mort à crédit.
        text_fr: Poursuivre Mort à crédit.


  # ============================================================
  # WEDNESDAY - OCTOBER 7
  # ============================================================

  - date: 2026-10-07
    weekday: wednesday
    title: Repair recurring errors
    title_fr: Corriger les erreurs récurrentes

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75 min
        text: Select the five most important recurring P errors and solve new problems targeting each one.
        text_fr: Sélectionner les cinq erreurs P récurrentes les plus importantes et résoudre de nouveaux problèmes ciblant chacune d'elles.

      - domain: research
        node: research-actuarial-glm-refinement
        time: 30–45 min
        text: Read Goldburd pages 70–74 and focus on residual analysis and stability.
        text_fr: Lire les pages 70 à 74 de Goldburd et se concentrer sur l'analyse des résidus et la stabilité.

      - domain: lean
        node: lean-theorem-proving
        time: 30–45 min
        text: Study several basic Lean tactics through small examples.
        text_fr: Étudier plusieurs tactiques Lean de base à travers de petits exemples.


  # ============================================================
  # THURSDAY - OCTOBER 8
  # ============================================================

  - date: 2026-10-08
    weekday: thursday
    title: Cumulative probability
    title_fr: Probabilité cumulative

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Complete a cumulative Exam P set covering general probability, discrete variables, continuous variables, and distributions.
        text_fr: Compléter une série cumulative de P couvrant la probabilité générale, les variables discrètes, les variables continues et les distributions.

      - domain: research
        node: research-actuarial-glm-refinement
        time: 45–60 min
        text: Write the technical summary on model fit, comparison, residuals, and stability.
        text_fr: Rédiger le résumé technique sur l'ajustement, la comparaison, les résidus et la stabilité.

      - domain: writing
        node: writing-reading-practice
        time: 30 min
        text: Continue the week's literary reading.
        text_fr: Poursuivre la lecture littéraire de la semaine.


  # ============================================================
  # FRIDAY - OCTOBER 9
  # ============================================================

  - date: 2026-10-09
    weekday: friday
    title: Timed mixed practice
    title_fr: Pratique mixte chronométrée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Complete one timed mixed Exam P block and review every problem, including correct answers reached inefficiently.
        text_fr: Compléter un bloc P mixte chronométré et revoir chaque problème, y compris les bonnes réponses obtenues de façon inefficace.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance - complete one short mixed set and keep calculator use fluent.
        text_fr: Entretien FM - compléter une courte série mixte et maintenir les automatismes à la calculatrice.

      - domain: english
        node: english-conversation-practice
        time: 60 min
        text: Complete an English conversation and explain one probability or actuarial concept clearly.
        text_fr: Compléter une conversation en anglais et expliquer clairement un concept probabiliste ou actuariel.


  # ============================================================
  # SATURDAY - OCTOBER 10
  # ============================================================

  - date: 2026-10-10
    weekday: saturday
    title: Review the system
    title_fr: Revoir le système

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Review the full P error log, redo unresolved problems, and identify the three strongest remaining weaknesses.
        text_fr: Revoir tout le journal d'erreurs P, refaire les problèmes non résolus et identifier les trois principales faiblesses restantes.

      - domain: research
        node: research-actuarial-glm-refinement
        time: 45 min
        text: Clean and finalize the GLM refinement note.
        text_fr: Nettoyer et finaliser la note sur l'amélioration des GLM.

      - domain: lean
        node: lean-theorem-proving
        time: 30–45 min
        text: Rewrite one earlier Lean proof using cleaner tactics or structure.
        text_fr: Réécrire une ancienne preuve Lean avec des tactiques ou une structure plus propres.

      - domain: writing
        node: writing-reading-practice
        time: 30 min
        text: Reach the week's literary reading target.
        text_fr: Atteindre l'objectif de lecture littéraire de la semaine.

      - domain: physical
        node: physical-training-consistency
        time: 15 min
        text: Review recovery, fatigue, and whether the physical protocol remains sustainable.
        text_fr: Revoir la récupération, la fatigue et vérifier si le protocole physique reste soutenable.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare Week 06.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la semaine 06.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
