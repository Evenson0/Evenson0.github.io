---
title: Discrete Random Variables · Building an Insurance GLM
title_fr: Variables aléatoires discrètes · Construction d'un GLM d'assurance

cycle: foundations-01
cycle_week: 3

start_date: 2026-09-20
end_date: 2026-09-26

status: planned

active:
  - actuarial-exam-1
  - research-actuarial-glm-workflow
  - physical-training-consistency

maintenance:
  - actuarial-fm-diagnostic
  - english-conversation-practice
  - lean-theorem-proving
  - writing-literary-note

user_inputs:
  literary_book: Mort à crédit

quests:

  # ============================================================
  # ACTUARIAL — EXAM P
  # ============================================================

  - domain: actuarial
    node: actuarial-exam-1
    task: Build a strong foundation in discrete random variables, expectation, variance, and the main discrete distributions used on Exam P.
    task_fr: Construire une base solide sur les variables aléatoires discrètes, l'espérance, la variance et les principales distributions discrètes de l'examen P.

    completion:
      - Understand probability mass functions
      - Compute expectations
      - Compute variances
      - Review Bernoulli and binomial distributions
      - Review geometric distributions
      - Review Poisson distributions
      - Complete one timed discrete-probability set
      - Rework recurring errors

    completion_fr:
      - Comprendre les fonctions de masse
      - Calculer les espérances
      - Calculer les variances
      - Revoir les distributions de Bernoulli et binomiale
      - Revoir les distributions géométriques
      - Revoir les distributions de Poisson
      - Compléter une série chronométrée de probabilité discrète
      - Refaire les erreurs récurrentes

  # ============================================================
  # ACTUARIAL — FM MAINTENANCE
  # ============================================================

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: Keep FM warm with two short sessions without competing with Exam P preparation.
    task_fr: Maintenir FM actif avec deux courtes séances sans entrer en concurrence avec la préparation de l'examen P.

    completion:
      - Complete two short FM sessions
      - Revisit one prior weak area
      - Complete one small mixed set
      - Update the FM error log if necessary

    completion_fr:
      - Compléter deux courtes séances FM
      - Revoir une ancienne faiblesse
      - Compléter une petite série mixte
      - Mettre à jour le journal d'erreurs FM si nécessaire

  # ============================================================
  # RESEARCH
  # ============================================================

  - domain: research
    node: research-actuarial-glm-workflow
    task: Read Goldburd pages 31–42 and design the workflow for a future public-data insurance GLM reproduction.
    task_fr: Lire les pages 31 à 42 de Goldburd et concevoir le processus d'une future reproduction GLM sur données publiques.

    completion:
      - Understand the model-building process
      - Understand data preparation
      - Understand train-validation-test splitting
      - Write a modeling objective
      - Sketch the future reproduction workflow
      - Identify the outputs the reproduction should produce

    completion_fr:
      - Comprendre le processus de construction du modèle
      - Comprendre la préparation des données
      - Comprendre la séparation entraînement-validation-test
      - Écrire un objectif de modélisation
      - Esquisser le processus de la future reproduction
      - Identifier les résultats que la reproduction devra produire

  # ============================================================
  # WRITING / READING
  # ============================================================

  - domain: writing
    node: writing-literary-note
    task: Continue Mort à crédit and write 300–500 original words about one feature of its writing.
    task_fr: Poursuivre Mort à crédit et écrire 300 à 500 mots originaux sur un aspect de son écriture.

    completion:
      - Continue the week's literary reading
      - Select one stylistic or thematic feature
      - Write 300–500 original words
      - Avoid producing only a plot summary

    completion_fr:
      - Poursuivre la lecture littéraire de la semaine
      - Sélectionner un aspect stylistique ou thématique
      - Écrire 300 à 500 mots originaux
      - Éviter de produire seulement un résumé de l'intrigue

  # ============================================================
  # LEAN
  # ============================================================

  - domain: lean
    node: lean-theorem-proving
    task: Study propositions and proofs and add one small logical proof to your Lean work.
    task_fr: Étudier les propositions et les preuves et ajouter une petite preuve logique au travail Lean.

  # ============================================================
  # ENGLISH
  # ============================================================

  - domain: english
    node: english-conversation-practice
    task: Practice everyday situations and spontaneous follow-up questions during one English conversation.
    task_fr: Travailler des situations quotidiennes et des questions spontanées pendant une conversation en anglais.

  # ============================================================
  # PHYSICAL
  # ============================================================

  - domain: physical
    node: physical-training-consistency
    task: Complete another consistent week of the current physical protocol.
    task_fr: Compléter une nouvelle semaine régulière du protocole physique actuel.

    completion:
      - Morning routine followed consistently
      - Strength schedule followed
      - Daily movement target pursued
      - Evening routine followed consistently
      - Recovery problems recorded if they appear

    completion_fr:
      - Routine du matin suivie régulièrement
      - Programme de musculation suivi
      - Objectif de mouvement quotidien poursuivi
      - Routine du soir suivie régulièrement
      - Problèmes de récupération notés s'ils apparaissent


# ============================================================
# DAILY PLAN
# ============================================================

days:

  # ============================================================
  # SUNDAY — SEPTEMBER 20
  # ============================================================

  - date: 2026-09-20
    weekday: sunday
    title: Enter discrete probability
    title_fr: Entrer dans la probabilité discrète

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P — introduce discrete random variables, PMFs, expectation, and variance.
        text_fr: Examen P — introduire les variables aléatoires discrètes, fonctions de masse, espérance et variance.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 30–45 min
        text: Read Goldburd pages 31–34 and identify the main stages of model building.
        text_fr: Lire les pages 31 à 34 de Goldburd et identifier les principales étapes de construction d'un modèle.

      - domain: writing
        node: writing-literary-note
        time: 30 min
        text: Continue Mort à crédit.
        text_fr: Poursuivre Mort à crédit.


  # ============================================================
  # MONDAY — SEPTEMBER 21
  # ============================================================

  - date: 2026-09-21
    weekday: monday
    title: Bernoulli and binomial
    title_fr: Bernoulli et binomiale

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P — Bernoulli and binomial distributions with 20–25 focused problems.
        text_fr: Examen P — distributions de Bernoulli et binomiale avec 20 à 25 exercices ciblés.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 30–45 min
        text: Read Goldburd pages 35–38 and take notes on data preparation.
        text_fr: Lire les pages 35 à 38 de Goldburd et prendre des notes sur la préparation des données.

      - domain: writing
        node: writing-literary-note
        time: 25–30 min
        text: Continue Mort à crédit and mark one passage worth analyzing.
        text_fr: Poursuivre Mort à crédit et repérer un passage qui mérite d'être analysé.


  # ============================================================
  # TUESDAY — SEPTEMBER 22
  # ============================================================

  - date: 2026-09-22
    weekday: tuesday
    title: Geometric and Poisson
    title_fr: Géométrique et Poisson

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75 min
        text: Exam P — geometric and Poisson distributions with focused practice.
        text_fr: Examen P — distributions géométrique et de Poisson avec pratique ciblée.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance — revisit one prior interest-theory weakness.
        text_fr: Entretien FM — revoir une faiblesse précédente en théorie de l'intérêt.

      - domain: writing
        node: writing-literary-note
        time: 25–30 min
        text: Continue literary reading.
        text_fr: Poursuivre la lecture littéraire.


  # ============================================================
  # WEDNESDAY — SEPTEMBER 23
  # ============================================================

  - date: 2026-09-23
    weekday: wednesday
    title: Build the modeling workflow
    title_fr: Construire le processus de modélisation

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: Exam P — mixed discrete random-variable problems.
        text_fr: Examen P — problèmes mixtes sur les variables aléatoires discrètes.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 45–60 min
        text: Read Goldburd pages 39–42 and sketch the complete GLM reproduction workflow.
        text_fr: Lire les pages 39 à 42 de Goldburd et esquisser le processus complet de reproduction GLM.

      - domain: lean
        node: lean-theorem-proving
        time: 30–45 min
        text: Study propositions and simple proof structure in Lean.
        text_fr: Étudier les propositions et la structure de preuves simples dans Lean.


  # ============================================================
  # THURSDAY — SEPTEMBER 24
  # ============================================================

  - date: 2026-09-24
    weekday: thursday
    title: Attack difficult problems
    title_fr: Attaquer les problèmes difficiles

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P — solve difficult discrete problems and rework recurring errors.
        text_fr: Examen P — résoudre des problèmes discrets difficiles et refaire les erreurs récurrentes.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 45 min
        text: Write the modeling objective and define the expected outputs of the future reproduction.
        text_fr: Rédiger l'objectif de modélisation et définir les résultats attendus de la future reproduction.

      - domain: writing
        node: writing-literary-note
        time: 45 min
        text: Draft 300–500 original words about one feature of Mort à crédit.
        text_fr: Rédiger 300 à 500 mots originaux sur un aspect de Mort à crédit.


  # ============================================================
  # FRIDAY — SEPTEMBER 25
  # ============================================================

  - date: 2026-09-25
    weekday: friday
    title: Timed discrete practice
    title_fr: Pratique discrète chronométrée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Complete one timed Exam P set focused on discrete random variables.
        text_fr: Compléter une série P chronométrée centrée sur les variables aléatoires discrètes.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance — complete one short mixed set and review the calculator workflow.
        text_fr: Entretien FM — compléter une courte série mixte et revoir l'utilisation de la calculatrice.

      - domain: english
        node: english-conversation-practice
        time: 60 min
        text: Complete one general English conversation with spontaneous follow-up questions.
        text_fr: Compléter une conversation générale en anglais avec des questions spontanées.


  # ============================================================
  # SATURDAY — SEPTEMBER 26
  # ============================================================

  - date: 2026-09-26
    weekday: saturday
    title: Consolidate discrete probability
    title_fr: Consolider la probabilité discrète

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Exam P — complete a cumulative general-probability and discrete-random-variable set, then review every error.
        text_fr: Examen P — compléter une série cumulative de probabilité générale et de variables aléatoires discrètes, puis revoir chaque erreur.

      - domain: research
        node: research-actuarial-glm-workflow
        time: 45–60 min
        text: Finalize the future public-data GLM reproduction workflow.
        text_fr: Finaliser le processus de la future reproduction GLM sur données publiques.

      - domain: lean
        node: lean-theorem-proving
        time: 30–45 min
        text: Add one small logical proof that you understand completely.
        text_fr: Ajouter une petite preuve logique entièrement comprise.

      - domain: writing
        node: writing-literary-note
        time: 30 min
        text: Revise the 300–500 word literary note.
        text_fr: Réviser la note littéraire de 300 à 500 mots.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare Week 04.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la semaine 04.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
