---
title: Transformations · Insurance GLM Reproduction
title_fr: Transformations · Reproduction d'un GLM d'assurance

cycle: foundations-01
cycle_week: 7

start_date: 2026-10-18
end_date: 2026-10-24

status: planned

active:
  - actuarial-exam-1
  - research-actuarial-glm-reproduction
  - physical-training-consistency

maintenance:
  - actuarial-fm-diagnostic
  - english-conversation-practice
  - lean-mathematics-in-lean
  - writing-reading-practice

user_inputs:
  literary_book: Mort à crédit

quests:

  # ============================================================
  # ACTUARIAL - EXAM P
  # ============================================================

  - domain: actuarial
    node: actuarial-exam-1
    task: Consolidate transformations, conditional expectation, covariance, multivariate probability, and the remaining weak areas before entering full Exam P mode.
    task_fr: Consolider les transformations, l'espérance conditionnelle, la covariance, la probabilité multivariée et les dernières faiblesses avant d'entrer pleinement en mode examen P.

    completion:
      - Review transformations of random variables
      - Review conditional expectation
      - Review covariance and correlation
      - Review joint and conditional distributions
      - Identify the two weakest remaining syllabus areas
      - Complete one substantial mixed set
      - Complete one timed mixed set
      - Rework recurring errors
      - Update the P error log

    completion_fr:
      - Revoir les transformations de variables aléatoires
      - Revoir l'espérance conditionnelle
      - Revoir la covariance et la corrélation
      - Revoir les distributions conjointes et conditionnelles
      - Identifier les deux dernières faiblesses principales du programme
      - Compléter une série mixte substantielle
      - Compléter une série mixte chronométrée
      - Refaire les erreurs récurrentes
      - Mettre à jour le journal d'erreurs P

  # ============================================================
  # ACTUARIAL - FM MAINTENANCE
  # ============================================================

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: Keep FM warm with two short sessions while preserving nearly all actuarial study capacity for Exam P.
    task_fr: Maintenir FM actif avec deux courtes séances tout en conservant presque toute la capacité d'étude actuarielle pour l'examen P.

    completion:
      - Complete two short FM sessions
      - Review previously studied material only
      - Avoid introducing a large new FM topic
      - Keep calculator workflows active

    completion_fr:
      - Compléter deux courtes séances FM
      - Revoir uniquement du contenu déjà étudié
      - Éviter d'introduire un nouveau gros sujet FM
      - Maintenir les automatismes à la calculatrice

  # ============================================================
  # RESEARCH
  # ============================================================

  - domain: research
    node: research-actuarial-glm-reproduction
    task: Finish Goldburd pages 86–104 and build the first complete reproducible version of the insurance GLM project.
    task_fr: Terminer les pages 86 à 104 de Goldburd et construire la première version complète et reproductible du projet GLM d'assurance.

    completion:
      - Finish Goldburd pages 86–104
      - Review model documentation
      - Select or finalize the dataset
      - Define the target variable
      - Define predictors
      - Document preprocessing
      - Fit the baseline GLM
      - Produce basic diagnostics
      - Begin validation
      - Keep the notebook reproducible
      - Record unresolved technical questions

    completion_fr:
      - Terminer les pages 86 à 104 de Goldburd
      - Revoir la documentation du modèle
      - Sélectionner ou finaliser les données
      - Définir la variable cible
      - Définir les prédicteurs
      - Documenter le prétraitement
      - Ajuster le GLM de référence
      - Produire des diagnostics de base
      - Commencer la validation
      - Garder le notebook reproductible
      - Noter les questions techniques non résolues

  # ============================================================
  # WRITING / READING
  # ============================================================

  - domain: writing
    node: writing-reading-practice
    task: Read about 60–80 pages of Mort à crédit while keeping Exam P preparation dominant.
    task_fr: Lire environ 60 à 80 pages de Mort à crédit tout en gardant la préparation de l'examen P prioritaire.

  # ============================================================
  # LEAN
  # ============================================================

  - domain: lean
    node: lean-mathematics-in-lean
    task: Begin Mathematics in Lean Chapter 2 and complete one small calculation proof.
    task_fr: Commencer le chapitre 2 de Mathematics in Lean et compléter une petite preuve de calcul.

  # ============================================================
  # ENGLISH
  # ============================================================

  - domain: english
    node: english-conversation-practice
    task: Complete one English conversation focused partly on professional introductions and work-related conversation.
    task_fr: Compléter une conversation en anglais portant en partie sur les présentations professionnelles et les conversations liées au travail.

  # ============================================================
  # PHYSICAL
  # ============================================================

  - domain: physical
    node: physical-training-consistency
    task: Continue the current physical protocol without increasing training volume as Exam P approaches.
    task_fr: Poursuivre le protocole physique actuel sans augmenter le volume d'entraînement à l'approche de l'examen P.

    completion:
      - Morning routine followed consistently
      - Strength schedule followed
      - Daily movement target pursued
      - Evening routine followed consistently
      - Recovery reviewed
      - No unnecessary increase in training volume

    completion_fr:
      - Routine du matin suivie régulièrement
      - Programme de musculation suivi
      - Objectif de mouvement quotidien poursuivi
      - Routine du soir suivie régulièrement
      - Récupération revue
      - Aucune augmentation inutile du volume d'entraînement


# ============================================================
# DAILY PLAN
# ============================================================

days:

  # ============================================================
  # SUNDAY - OCTOBER 18
  # ============================================================

  - date: 2026-10-18
    weekday: sunday
    title: Transformations
    title_fr: Transformations

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Exam P - study transformations of random variables and complete focused practice.
        text_fr: Examen P - étudier les transformations de variables aléatoires et compléter une pratique ciblée.

      - domain: research
        node: research-actuarial-glm-reproduction
        time: 30–45 min
        text: Read Goldburd pages 86–91 and identify the remaining concepts needed for the reproduction.
        text_fr: Lire les pages 86 à 91 de Goldburd et identifier les derniers concepts nécessaires à la reproduction.

      - domain: writing
        node: writing-reading-practice
        time: 25–30 min
        text: Continue Mort à crédit.
        text_fr: Poursuivre Mort à crédit.


  # ============================================================
  # MONDAY - OCTOBER 19
  # ============================================================

  - date: 2026-10-19
    weekday: monday
    title: Conditional expectation
    title_fr: Espérance conditionnelle

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - conditional expectation, conditional distributions, and related multivariate problems.
        text_fr: Examen P - espérance conditionnelle, distributions conditionnelles et problèmes multivariés associés.

      - domain: research
        node: research-actuarial-glm-reproduction
        time: 30–45 min
        text: Read Goldburd pages 92–97 and update the reproduction plan.
        text_fr: Lire les pages 92 à 97 de Goldburd et mettre à jour le plan de reproduction.

      - domain: writing
        node: writing-reading-practice
        time: 25–30 min
        text: Continue literary reading.
        text_fr: Poursuivre la lecture littéraire.


  # ============================================================
  # TUESDAY - OCTOBER 20
  # ============================================================

  - date: 2026-10-20
    weekday: tuesday
    title: Weak area one
    title_fr: Première faiblesse

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - identify the weakest remaining topic from the error log and complete an intensive targeted session.
        text_fr: Examen P - identifier le sujet restant le plus faible dans le journal d'erreurs et compléter une séance intensive ciblée.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance - complete one short review session using previously studied material.
        text_fr: Entretien FM - compléter une courte séance de révision utilisant uniquement du contenu déjà étudié.

      - domain: research
        node: research-actuarial-glm-reproduction
        time: 20–30 min
        text: Finalize the dataset, target, and predictors for the GLM reproduction.
        text_fr: Finaliser les données, la variable cible et les prédicteurs de la reproduction GLM.


  # ============================================================
  # WEDNESDAY - OCTOBER 21
  # ============================================================

  - date: 2026-10-21
    weekday: wednesday
    title: Build the reproduction
    title_fr: Construire la reproduction

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: Exam P - work on the second weakest remaining topic and rework prior errors.
        text_fr: Examen P - travailler la deuxième faiblesse restante et refaire les erreurs précédentes.

      - domain: research
        node: research-actuarial-glm-reproduction
        time: 60–75 min
        text: Read Goldburd pages 98–104, build the preprocessing pipeline, and fit the baseline GLM.
        text_fr: Lire les pages 98 à 104 de Goldburd, construire le pipeline de prétraitement et ajuster le GLM de référence.

      - domain: lean
        node: lean-mathematics-in-lean
        time: 30–45 min
        text: Begin Mathematics in Lean Chapter 2.
        text_fr: Commencer le chapitre 2 de Mathematics in Lean.


  # ============================================================
  # THURSDAY - OCTOBER 22
  # ============================================================

  - date: 2026-10-22
    weekday: thursday
    title: Full mixed practice
    title_fr: Pratique entièrement mixte

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90–120 min
        text: Complete a substantial mixed Exam P set covering the full syllabus studied so far without topic labels.
        text_fr: Compléter une série P mixte substantielle couvrant tout le programme étudié jusqu'ici, sans indication du sujet.

      - domain: actuarial
        node: actuarial-exam-1
        time: 30 min
        text: Review every error and every correct answer obtained inefficiently.
        text_fr: Revoir chaque erreur ainsi que chaque bonne réponse obtenue de façon inefficace.

      - domain: research
        node: research-actuarial-glm-reproduction
        time: 45–60 min
        text: Produce basic diagnostics and begin model validation.
        text_fr: Produire les diagnostics de base et commencer la validation du modèle.


  # ============================================================
  # FRIDAY - OCTOBER 23
  # ============================================================

  - date: 2026-10-23
    weekday: friday
    title: Timed pressure
    title_fr: Pression chronométrée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90–120 min
        text: Complete a substantial timed Exam P set under strict exam-style conditions.
        text_fr: Compléter une série P chronométrée substantielle dans des conditions strictes proches de l'examen.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 20–30 min
        text: FM maintenance - complete one very short mixed review.
        text_fr: Entretien FM - compléter une très courte révision mixte.

      - domain: english
        node: english-conversation-practice
        time: 60 min
        text: Complete one English conversation focused partly on professional introductions and work-related discussion.
        text_fr: Compléter une conversation en anglais portant en partie sur les présentations professionnelles et les discussions liées au travail.


  # ============================================================
  # SATURDAY - OCTOBER 24
  # ============================================================

  - date: 2026-10-24
    weekday: saturday
    title: Enter exam mode
    title_fr: Entrer en mode examen

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Review the timed set in depth and classify the final P weaknesses into knowledge, setup, calculation, and time-management errors.
        text_fr: Revoir en profondeur la série chronométrée et classer les dernières faiblesses P en erreurs de connaissance, mise en équation, calcul et gestion du temps.

      - domain: actuarial
        node: actuarial-exam-1
        time: 30 min
        text: Define the exact priorities for the final two weeks before Exam P.
        text_fr: Définir les priorités exactes des deux dernières semaines avant l'examen P.

      - domain: research
        node: research-actuarial-glm-reproduction
        time: 60 min
        text: Finish the first complete reproducible version of the insurance GLM project and record unresolved questions.
        text_fr: Terminer la première version complète et reproductible du projet GLM d'assurance et noter les questions non résolues.

      - domain: lean
        node: lean-mathematics-in-lean
        time: 30–45 min
        text: Complete one small calculation proof from the Mathematics in Lean material.
        text_fr: Compléter une petite preuve de calcul à partir de Mathematics in Lean.

      - domain: writing
        node: writing-reading-practice
        time: 30 min
        text: Reach the week's literary reading target.
        text_fr: Atteindre l'objectif de lecture littéraire de la semaine.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare Week 08.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la semaine 08.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
