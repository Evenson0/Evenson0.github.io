---
title: Continuous Random Variables · GLM Model Form
title_fr: Variables aléatoires continues · Forme d'un GLM

cycle: foundations-01
cycle_week: 4

start_date: 2026-09-27
end_date: 2026-10-03

status: planned

active:
  - actuarial-exam-1
  - research-actuarial-glm-model-form
  - physical-training-consistency

maintenance:
  - actuarial-fm-diagnostic
  - english-conversation-practice
  - lean-theorem-proving
  - mathematics-proof-writing

quests:

  # ============================================================
  # ACTUARIAL - EXAM P
  # ============================================================

  - domain: actuarial
    node: actuarial-exam-1
    task: Build a strong foundation in continuous random variables, densities, distribution functions, expectation, variance, and the major continuous distributions used on Exam P.
    task_fr: Construire une base solide sur les variables aléatoires continues, les densités, les fonctions de répartition, l'espérance, la variance et les principales distributions continues de l'examen P.

    completion:
      - Understand probability density functions
      - Understand cumulative distribution functions
      - Move fluently between PDFs and CDFs
      - Compute expectations and variances
      - Review uniform distributions
      - Review exponential distributions
      - Review normal distributions
      - Complete one timed continuous-probability set
      - Rework recurring errors

    completion_fr:
      - Comprendre les fonctions de densité
      - Comprendre les fonctions de répartition
      - Passer avec aisance des densités aux fonctions de répartition
      - Calculer espérances et variances
      - Revoir les distributions uniformes
      - Revoir les distributions exponentielles
      - Revoir les distributions normales
      - Compléter une série chronométrée de probabilité continue
      - Refaire les erreurs récurrentes

  # ============================================================
  # ACTUARIAL - FM MAINTENANCE
  # ============================================================

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: Keep FM warm with two short sessions focused on previously studied interest concepts.
    task_fr: Maintenir FM actif avec deux courtes séances centrées sur les concepts d'intérêt déjà étudiés.

    completion:
      - Complete two short FM sessions
      - Review rate conversions
      - Review present and accumulated values
      - Update the FM error log if necessary

    completion_fr:
      - Compléter deux courtes séances FM
      - Revoir les conversions de taux
      - Revoir les valeurs actuelles et accumulées
      - Mettre à jour le journal d'erreurs FM si nécessaire

  # ============================================================
  # RESEARCH
  # ============================================================

  - domain: research
    node: research-actuarial-glm-model-form
    task: Read Goldburd pages 43–61 and write a technical note on insurance GLM model form.
    task_fr: Lire les pages 43 à 61 de Goldburd et rédiger une note technique sur la forme des GLM en assurance.

    completion:
      - Understand target-variable choice
      - Understand distribution choice
      - Review variable selection
      - Understand nonlinear transformations
      - Understand splines
      - Understand categorical grouping
      - Understand interactions
      - Write one technical note connecting the concepts

    completion_fr:
      - Comprendre le choix de la variable cible
      - Comprendre le choix de la distribution
      - Revoir la sélection des variables
      - Comprendre les transformations non linéaires
      - Comprendre les splines
      - Comprendre le regroupement des catégories
      - Comprendre les interactions
      - Rédiger une note technique reliant les concepts

  # ============================================================
  # MATHEMATICS
  # ============================================================

  - domain: mathematics
    node: mathematics-proof-writing
    task: Write one complete nontrivial mathematical proof with explicit assumptions, logical steps, and conclusion.
    task_fr: Rédiger une démonstration mathématique complète non triviale avec hypothèses, étapes logiques et conclusion explicites.

  # ============================================================
  # LEAN
  # ============================================================

  - domain: lean
    node: lean-theorem-proving
    task: Study quantifiers and equality and formalize one proof using them.
    task_fr: Étudier les quantificateurs et l'égalité et formaliser une preuve les utilisant.

  # ============================================================
  # ENGLISH
  # ============================================================

  - domain: english
    node: english-conversation-practice
    task: Complete one English conversation and explain one actuarial or probability concept clearly.
    task_fr: Compléter une conversation en anglais et expliquer clairement un concept actuariel ou probabiliste.

  # ============================================================
  # PHYSICAL
  # ============================================================

  - domain: physical
    node: physical-training-consistency
    task: Continue the current physical protocol and monitor whether the routine remains sustainable.
    task_fr: Poursuivre le protocole physique actuel et vérifier que la routine reste soutenable.

    completion:
      - Morning routine followed consistently
      - Strength schedule followed
      - Daily movement target pursued
      - Evening routine followed consistently
      - Recovery and fatigue reviewed at the end of the week

    completion_fr:
      - Routine du matin suivie régulièrement
      - Programme de musculation suivi
      - Objectif de mouvement quotidien poursuivi
      - Routine du soir suivie régulièrement
      - Récupération et fatigue revues à la fin de la semaine


# ============================================================
# DAILY PLAN
# ============================================================

days:

  # ============================================================
  # SUNDAY - SEPTEMBER 27
  # ============================================================

  - date: 2026-09-27
    weekday: sunday
    title: Enter continuous probability
    title_fr: Entrer dans la probabilité continue

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - introduce continuous random variables, PDFs, CDFs, expectation, and variance.
        text_fr: Examen P - introduire les variables aléatoires continues, densités, fonctions de répartition, espérance et variance.

      - domain: research
        node: research-actuarial-glm-model-form
        time: 30–45 min
        text: Read Goldburd pages 43–47 and identify the main model-form decisions.
        text_fr: Lire les pages 43 à 47 de Goldburd et identifier les principales décisions concernant la forme du modèle.

      - domain: mathematics
        node: mathematics-proof-writing
        time: 20–30 min
        text: Select the mathematical statement that will be proved this week and write the assumptions clearly.
        text_fr: Choisir l'énoncé mathématique qui sera démontré cette semaine et écrire clairement les hypothèses.


  # ============================================================
  # MONDAY - SEPTEMBER 28
  # ============================================================

  - date: 2026-09-28
    weekday: monday
    title: Uniform and exponential
    title_fr: Uniforme et exponentielle

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - study uniform and exponential distributions and complete 20–25 focused problems.
        text_fr: Examen P - étudier les distributions uniforme et exponentielle et compléter 20 à 25 exercices ciblés.

      - domain: research
        node: research-actuarial-glm-model-form
        time: 30–45 min
        text: Read Goldburd pages 48–52 and take notes on distribution and variable choices.
        text_fr: Lire les pages 48 à 52 de Goldburd et prendre des notes sur le choix des distributions et des variables.


  # ============================================================
  # TUESDAY - SEPTEMBER 29
  # ============================================================

  - date: 2026-09-29
    weekday: tuesday
    title: Normal distribution
    title_fr: Loi normale

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - study the normal distribution, standardization, probabilities, and related problems.
        text_fr: Examen P - étudier la loi normale, la standardisation, les probabilités et les problèmes associés.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance - review rate conversions and present-value relationships.
        text_fr: Entretien FM - revoir les conversions de taux et les relations de valeur actuelle.

      - domain: mathematics
        node: mathematics-proof-writing
        time: 30 min
        text: Draft the main logical structure of the week's proof.
        text_fr: Rédiger la structure logique principale de la démonstration de la semaine.


  # ============================================================
  # WEDNESDAY - SEPTEMBER 30
  # ============================================================

  - date: 2026-09-30
    weekday: wednesday
    title: Connect PDFs and CDFs
    title_fr: Relier densités et fonctions de répartition

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: Exam P - mixed problems requiring movement between PDFs, CDFs, probabilities, expectation, and variance.
        text_fr: Examen P - problèmes mixtes demandant de passer entre densités, fonctions de répartition, probabilités, espérance et variance.

      - domain: research
        node: research-actuarial-glm-model-form
        time: 45–60 min
        text: Read Goldburd pages 53–57 and summarize nonlinear transformations, splines, and categorical grouping.
        text_fr: Lire les pages 53 à 57 de Goldburd et résumer les transformations non linéaires, les splines et le regroupement des catégories.

      - domain: lean
        node: lean-theorem-proving
        time: 30–45 min
        text: Study quantifiers and equality through small Lean examples.
        text_fr: Étudier les quantificateurs et l'égalité à travers de petits exemples Lean.


  # ============================================================
  # THURSDAY - OCTOBER 1
  # ============================================================

  - date: 2026-10-01
    weekday: thursday
    title: Difficult continuous problems
    title_fr: Problèmes continus difficiles

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Exam P - solve difficult continuous-distribution problems and rework recurring errors.
        text_fr: Examen P - résoudre des problèmes difficiles de distributions continues et refaire les erreurs récurrentes.

      - domain: research
        node: research-actuarial-glm-model-form
        time: 45–60 min
        text: Read Goldburd pages 58–61 and complete notes on interactions and model-form choices.
        text_fr: Lire les pages 58 à 61 de Goldburd et compléter les notes sur les interactions et les choix de forme du modèle.

      - domain: mathematics
        node: mathematics-proof-writing
        time: 45–60 min
        text: Write the first complete version of the mathematical proof.
        text_fr: Rédiger la première version complète de la démonstration mathématique.


  # ============================================================
  # FRIDAY - OCTOBER 2
  # ============================================================

  - date: 2026-10-02
    weekday: friday
    title: Timed continuous practice
    title_fr: Pratique continue chronométrée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Complete one timed Exam P set focused on continuous random variables and fully review every error.
        text_fr: Compléter une série P chronométrée centrée sur les variables aléatoires continues et revoir entièrement chaque erreur.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance - complete one short mixed set.
        text_fr: Entretien FM - compléter une courte série mixte.

      - domain: english
        node: english-conversation-practice
        time: 60 min
        text: Complete one English conversation and explain one probability concept without relying on formulas alone.
        text_fr: Compléter une conversation en anglais et expliquer un concept de probabilité sans dépendre uniquement des formules.


  # ============================================================
  # SATURDAY - OCTOBER 3
  # ============================================================

  - date: 2026-10-03
    weekday: saturday
    title: Consolidate continuous probability
    title_fr: Consolider la probabilité continue

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Exam P - complete a cumulative set combining general probability, discrete random variables, and continuous random variables.
        text_fr: Examen P - compléter une série cumulative combinant probabilité générale, variables aléatoires discrètes et variables aléatoires continues.

      - domain: research
        node: research-actuarial-glm-model-form
        time: 45–60 min
        text: Write and clean the technical note on insurance GLM model form.
        text_fr: Rédiger et nettoyer la note technique sur la forme des GLM en assurance.

      - domain: mathematics
        node: mathematics-proof-writing
        time: 45 min
        text: Revise the mathematical proof for clarity, completeness, and logical precision.
        text_fr: Réviser la démonstration mathématique pour améliorer sa clarté, sa complétude et sa précision logique.

      - domain: lean
        node: lean-theorem-proving
        time: 30–45 min
        text: Formalize one small proof using quantifiers or equality.
        text_fr: Formaliser une petite preuve utilisant les quantificateurs ou l'égalité.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare Week 05.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la semaine 05.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
