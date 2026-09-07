---
title: Conditional Probability · GLM Distributions
title_fr: Probabilité conditionnelle · Distributions des GLM

cycle: foundations-01
cycle_week: 2

start_date: 2026-09-13
end_date: 2026-09-19

status: planned

active:
  - actuarial-exam-1
  - research-actuarial-glm-tweedie
  - physical-training-consistency

maintenance:
  - actuarial-fm-diagnostic
  - english-conversation-practice
  - lean-fundamentals
  - writing-reading-practice

user_inputs:
  literary_book: Mort à crédit
  finance_book: The Intelligent Investor

quests:

  # ============================================================
  # ACTUARIAL — EXAM P
  # ============================================================

  - domain: actuarial
    node: actuarial-exam-1
    task: Strengthen counting, conditional probability, independence, unions, intersections, and Bayes-style reasoning through cumulative practice.
    task_fr: Renforcer le dénombrement, les probabilités conditionnelles, l'indépendance, les unions, les intersections et le raisonnement de type Bayes par une pratique cumulative.

    completion:
      - Review permutations and combinations
      - Review conditional probability
      - Review independence
      - Review unions and intersections
      - Complete Bayes-style problems
      - Complete one timed mixed set
      - Rework recurring Week 01 errors

    completion_fr:
      - Revoir permutations et combinaisons
      - Revoir la probabilité conditionnelle
      - Revoir l'indépendance
      - Revoir les unions et intersections
      - Compléter des problèmes de type Bayes
      - Compléter une série mixte chronométrée
      - Refaire les erreurs récurrentes de la semaine 01

  # ============================================================
  # ACTUARIAL — FM MAINTENANCE
  # ============================================================

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: Keep FM warm with two short sessions focused on interest-rate measures and calculator fluency.
    task_fr: Maintenir FM actif avec deux courtes séances centrées sur les mesures de taux et la maîtrise de la calculatrice.

    completion:
      - Complete two short FM sessions
      - Review rate conversions
      - Practice calculator workflows
      - Record recurring errors

    completion_fr:
      - Compléter deux courtes séances FM
      - Revoir les conversions de taux
      - Pratiquer les procédures à la calculatrice
      - Noter les erreurs récurrentes

  # ============================================================
  # RESEARCH
  # ============================================================

  - domain: research
    node: research-actuarial-glm-tweedie
    task: Read Goldburd pages 16–30 and summarize weights, offsets, insurance distributions, multicollinearity, and GLM limitations.
    task_fr: Lire les pages 16 à 30 de Goldburd et résumer les poids, offsets, distributions d'assurance, la multicolinéarité et les limites des GLM.

    completion:
      - Understand weights and offsets
      - Review severity distributions
      - Review frequency distributions
      - Understand the Tweedie distribution
      - Review logistic regression
      - Understand multicollinearity
      - Write a short GLM limitations note

    completion_fr:
      - Comprendre les poids et offsets
      - Revoir les distributions de sévérité
      - Revoir les distributions de fréquence
      - Comprendre la distribution Tweedie
      - Revoir la régression logistique
      - Comprendre la multicolinéarité
      - Rédiger une courte note sur les limites des GLM

  # ============================================================
  # READING / WRITING
  # ============================================================

  - domain: writing
    node: writing-reading-practice
    task: Read about 70 additional pages of Mort à crédit.
    task_fr: Lire environ 70 pages supplémentaires de Mort à crédit.

  - domain: writing
    node: writing-reading-practice
    task: Continue The Intelligent Investor at a sustainable pace and take brief notes.
    task_fr: Poursuivre L'Investisseur intelligent à un rythme soutenable et prendre quelques notes.

  # ============================================================
  # LEAN
  # ============================================================

  - domain: lean
    node: lean-fundamentals
    task: Study propositions as types and formalize one simple proposition yourself.
    task_fr: Étudier les propositions comme types et formaliser soi-même une proposition simple.

  # ============================================================
  # ENGLISH
  # ============================================================

  - domain: english
    node: english-conversation-practice
    task: Complete one English conversation and explain one technical idea simply.
    task_fr: Compléter une conversation en anglais et expliquer simplement une idée technique.

  # ============================================================
  # PHYSICAL
  # ============================================================

  - domain: physical
    node: physical-training-consistency
    task: Complete the normal physical protocol and record the first full consistency week.
    task_fr: Compléter le protocole physique normal et enregistrer la première semaine complète de régularité.

    completion:
      - Morning routine followed
      - Strength schedule followed
      - Daily movement target pursued
      - Evening routine followed
      - Week reviewed without treating individual misses as a reset

    completion_fr:
      - Routine du matin suivie
      - Programme de musculation suivi
      - Objectif de mouvement quotidien poursuivi
      - Routine du soir suivie
      - Semaine revue sans considérer un écart isolé comme un recommencement


# ============================================================
# DAILY PLAN
# ============================================================

days:

  # ============================================================
  # SUNDAY — SEPTEMBER 13
  # ============================================================

  - date: 2026-09-13
    weekday: sunday
    title: Review and begin
    title_fr: Revoir et commencer

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Rework the most important Week 01 P errors, then review conditional probability fundamentals.
        text_fr: Refaire les principales erreurs P de la semaine 01, puis revoir les bases de la probabilité conditionnelle.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 30–45 min
        text: Read Goldburd pages 16–20 and take concise notes.
        text_fr: Lire les pages 16 à 20 de Goldburd et prendre des notes concises.

      - domain: writing
        node: writing-reading-practice
        time: 30 min
        text: Read about 15 pages of Mort à crédit.
        text_fr: Lire environ 15 pages de Mort à crédit.


  # ============================================================
  # MONDAY — SEPTEMBER 14
  # ============================================================

  - date: 2026-09-14
    weekday: monday
    title: Counting
    title_fr: Dénombrement

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–90 min
        text: Exam P — permutations, combinations, and counting problems.
        text_fr: Examen P — permutations, combinaisons et problèmes de dénombrement.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 30–45 min
        text: Read Goldburd pages 21–25.
        text_fr: Lire les pages 21 à 25 de Goldburd.

      - domain: writing
        node: writing-reading-practice
        time: 25–30 min
        text: Continue Mort à crédit.
        text_fr: Poursuivre Mort à crédit.


  # ============================================================
  # TUESDAY — SEPTEMBER 15
  # ============================================================

  - date: 2026-09-15
    weekday: tuesday
    title: Independence and Bayes
    title_fr: Indépendance et Bayes

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: Exam P — independence, conditional probability, and Bayes-style problems.
        text_fr: Examen P — indépendance, probabilités conditionnelles et problèmes de type Bayes.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance — effective, nominal, and discount-rate conversions.
        text_fr: Entretien FM — conversions entre taux effectifs, nominaux et taux d'escompte.

      - domain: writing
        node: writing-reading-practice
        time: 25–30 min
        text: Continue The Intelligent Investor and take brief notes.
        text_fr: Poursuivre L'Investisseur intelligent et prendre quelques notes.


  # ============================================================
  # WEDNESDAY — SEPTEMBER 16
  # ============================================================

  - date: 2026-09-16
    weekday: wednesday
    title: Connect the probability tools
    title_fr: Relier les outils de probabilité

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: Exam P — mixed counting, unions, intersections, independence, and conditional probability.
        text_fr: Examen P — série mixte de dénombrement, unions, intersections, indépendance et probabilités conditionnelles.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 30–45 min
        text: Read Goldburd pages 26–30.
        text_fr: Lire les pages 26 à 30 de Goldburd.

      - domain: lean
        node: lean-fundamentals
        time: 30–45 min
        text: Study propositions as types and reproduce two simple examples.
        text_fr: Étudier les propositions comme types et reproduire deux exemples simples.


  # ============================================================
  # THURSDAY — SEPTEMBER 17
  # ============================================================

  - date: 2026-09-17
    weekday: thursday
    title: Correct the recurring errors
    title_fr: Corriger les erreurs récurrentes

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–90 min
        text: Rework recurring P errors from Weeks 01–02 and solve new problems targeting those weaknesses.
        text_fr: Refaire les erreurs P récurrentes des semaines 01 et 02 et résoudre de nouveaux problèmes ciblant ces faiblesses.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 45–60 min
        text: Write the short note on weights, offsets, distributions, multicollinearity, and GLM limitations.
        text_fr: Rédiger la courte note sur les poids, offsets, distributions, la multicolinéarité et les limites des GLM.

      - domain: writing
        node: writing-reading-practice
        time: 30 min
        text: Read another 15–20 pages of Mort à crédit.
        text_fr: Lire 15 à 20 pages supplémentaires de Mort à crédit.


  # ============================================================
  # FRIDAY — SEPTEMBER 18
  # ============================================================

  - date: 2026-09-18
    weekday: friday
    title: Timed probability
    title_fr: Probabilité chronométrée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Complete one timed mixed P set covering general and conditional probability.
        text_fr: Compléter une série P mixte chronométrée couvrant la probabilité générale et conditionnelle.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: FM maintenance — short mixed set with calculator practice.
        text_fr: Entretien FM — courte série mixte avec pratique de la calculatrice.

      - domain: english
        node: english-conversation-practice
        time: 60 min
        text: Complete one English conversation and explain conditional probability in simple English.
        text_fr: Compléter une conversation en anglais et expliquer simplement la probabilité conditionnelle en anglais.


  # ============================================================
  # SATURDAY — SEPTEMBER 19
  # ============================================================

  - date: 2026-09-19
    weekday: saturday
    title: Consolidate the foundation
    title_fr: Consolider les fondements

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Complete 30–40 cumulative P problems and fully review the week's errors.
        text_fr: Compléter 30 à 40 problèmes P cumulatifs et revoir entièrement les erreurs de la semaine.

      - domain: research
        node: research-actuarial-glm-tweedie
        time: 30–45 min
        text: Clean and finalize the GLM distributions and limitations note.
        text_fr: Nettoyer et finaliser la note sur les distributions et limites des GLM.

      - domain: lean
        node: lean-fundamentals
        time: 30–45 min
        text: Formalize one simple proposition yourself without copying the final proof.
        text_fr: Formaliser soi-même une proposition simple sans copier la preuve finale.

      - domain: writing
        node: writing-reading-practice
        time: 30 min
        text: Reach the week's Mort à crédit reading target.
        text_fr: Atteindre l'objectif de lecture de Mort à crédit pour la semaine.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare Week 03.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la semaine 03.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
