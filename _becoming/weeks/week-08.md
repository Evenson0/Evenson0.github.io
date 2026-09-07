---
title: P Exam Mode · ANAM I
title_fr: Mode examen P · ANAM I

cycle: foundations-01
cycle_week: 8

start_date: 2026-10-25
end_date: 2026-10-31

status: planned

active:
  - actuarial-exam-1
  - research-actuarial-anam
  - physical-training-consistency

maintenance:
  - actuarial-fm-diagnostic
  - english-conversation-practice
  - lean-mathematics-in-lean
  - writing-reading-practice

quests:

  # ============================================================
  # ACTUARIAL - EXAM P
  # ============================================================

  - domain: actuarial
    node: actuarial-exam-1
    task: Enter full Exam P mode with realistic timed simulations, aggressive error review, and targeted repair of the weakest remaining areas.
    task_fr: Entrer pleinement en mode examen P avec des simulations chronométrées réalistes, une revue intensive des erreurs et une correction ciblée des dernières faiblesses.

    completion:
      - Complete at least two substantial timed mixed simulations
      - Review every simulation completely
      - Rework every important missed problem
      - Review correct answers obtained inefficiently
      - Identify the final two weakest areas
      - Complete targeted repair sessions
      - Refine skip and guessing strategy
      - Refine time-management strategy
      - Update the complete P error log

    completion_fr:
      - Compléter au moins deux simulations mixtes chronométrées substantielles
      - Revoir entièrement chaque simulation
      - Refaire chaque problème important manqué
      - Revoir les bonnes réponses obtenues de façon inefficace
      - Identifier les deux dernières faiblesses principales
      - Compléter des séances de correction ciblées
      - Affiner la stratégie de saut et de réponse au hasard
      - Affiner la stratégie de gestion du temps
      - Mettre à jour tout le journal d'erreurs P

  # ============================================================
  # ACTUARIAL - FM MAINTENANCE
  # ============================================================

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: Complete only one light FM maintenance session this week so that nearly all actuarial energy remains available for Exam P.
    task_fr: Compléter une seule séance légère d'entretien FM cette semaine afin de conserver presque toute l'énergie actuarielle pour l'examen P.

    completion:
      - Complete one short FM session
      - Review familiar material only
      - Keep calculator skills active
      - Do not introduce a major new FM topic

    completion_fr:
      - Compléter une courte séance FM
      - Revoir uniquement du contenu familier
      - Maintenir les automatismes à la calculatrice
      - Ne pas introduire de nouveau sujet FM important

  # ============================================================
  # RESEARCH - ANAM
  # ============================================================

  - domain: research
    node: research-actuarial-anam
    task: Read the first half of Laub, Pho, and Wong and reconstruct the motivation, architecture, and interpretability argument of ANAM.
    task_fr: Lire la première moitié de Laub, Pho et Wong et reconstruire la motivation, l'architecture et l'argument d'interprétabilité d'ANAM.

    completion:
      - Understand the insurance pricing problem
      - Understand why GLMs remain attractive
      - Understand the motivation for moving beyond GLMs
      - Understand the additive neural architecture
      - Understand the intended notion of interpretability
      - Record technical questions
      - Write a concise structural summary

    completion_fr:
      - Comprendre le problème de tarification en assurance
      - Comprendre pourquoi les GLM restent attractifs
      - Comprendre la motivation pour dépasser les GLM
      - Comprendre l'architecture neuronale additive
      - Comprendre la notion d'interprétabilité visée
      - Noter des questions techniques
      - Rédiger un résumé structurel concis

  # ============================================================
  # WRITING / READING
  # ============================================================

  - domain: writing
    node: writing-reading-practice
    task: Keep literary reading light this week and use it primarily as recovery from Exam P preparation.
    task_fr: Garder la lecture littéraire légère cette semaine et l'utiliser principalement comme récupération entre les séances de préparation à P.

  # ============================================================
  # LEAN
  # ============================================================

  - domain: lean
    node: lean-mathematics-in-lean
    task: Complete only one short Lean session if Exam P preparation is on schedule.
    task_fr: Compléter seulement une courte séance Lean si la préparation de l'examen P est à jour.

  # ============================================================
  # ENGLISH
  # ============================================================

  - domain: english
    node: english-conversation-practice
    task: Complete one light English conversation if practical.
    task_fr: Compléter une conversation légère en anglais si cela est raisonnable.

  # ============================================================
  # PHYSICAL
  # ============================================================

  - domain: physical
    node: physical-training-consistency
    task: Maintain the physical protocol without adding volume, and prioritize recovery as Exam P approaches.
    task_fr: Maintenir le protocole physique sans augmenter le volume et donner la priorité à la récupération à l'approche de l'examen P.

    completion:
      - Maintain the morning routine
      - Follow the strength plan without adding volume
      - Continue daily movement
      - Maintain the evening routine
      - Protect sleep and recovery
      - Review consistency over Weeks 01–08

    completion_fr:
      - Maintenir la routine du matin
      - Suivre le programme de musculation sans ajouter de volume
      - Poursuivre le mouvement quotidien
      - Maintenir la routine du soir
      - Protéger le sommeil et la récupération
      - Revoir la régularité des semaines 01 à 08


# ============================================================
# DAILY PLAN
# ============================================================

days:

  # ============================================================
  # SUNDAY - OCTOBER 25
  # ============================================================

  - date: 2026-10-25
    weekday: sunday
    title: Simulation one
    title_fr: Première simulation

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 2–3 h
        text: Complete a substantial timed mixed Exam P simulation under strict exam-style conditions.
        text_fr: Compléter une simulation P mixte substantielle et chronométrée dans des conditions strictes proches de l'examen.

      - domain: actuarial
        node: actuarial-exam-1
        time: 60 min
        text: Review the simulation completely and classify every important error.
        text_fr: Revoir entièrement la simulation et classer chaque erreur importante.

      - domain: research
        node: research-actuarial-anam
        time: 30 min
        text: Begin the ANAM paper and reconstruct the pricing problem it is trying to solve.
        text_fr: Commencer l'article ANAM et reconstruire le problème de tarification qu'il cherche à résoudre.


  # ============================================================
  # MONDAY - OCTOBER 26
  # ============================================================

  - date: 2026-10-26
    weekday: monday
    title: Repair simulation one
    title_fr: Corriger la première simulation

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Rework every important error from Simulation 1 without looking at the final solution first.
        text_fr: Refaire chaque erreur importante de la première simulation sans regarder immédiatement la solution finale.

      - domain: actuarial
        node: actuarial-exam-1
        time: 30 min
        text: Identify the two weakest areas revealed by the simulation.
        text_fr: Identifier les deux principales faiblesses révélées par la simulation.

      - domain: research
        node: research-actuarial-anam
        time: 30 min
        text: Continue ANAM and focus on why the authors retain an additive structure.
        text_fr: Poursuivre ANAM et se concentrer sur les raisons du maintien d'une structure additive.


  # ============================================================
  # TUESDAY - OCTOBER 27
  # ============================================================

  - date: 2026-10-27
    weekday: tuesday
    title: Weakest area
    title_fr: Faiblesse principale

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Complete an intensive targeted session on the weakest remaining Exam P area.
        text_fr: Compléter une séance intensive ciblée sur la principale faiblesse restante de l'examen P.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 20–30 min
        text: FM maintenance - complete one very light review using familiar problems only.
        text_fr: Entretien FM - compléter une révision très légère avec uniquement des problèmes familiers.

      - domain: writing
        node: writing-reading-practice
        time: 20–30 min
        text: Read for recovery rather than for a page-count target.
        text_fr: Lire pour récupérer plutôt que pour atteindre un objectif de pages.


  # ============================================================
  # WEDNESDAY - OCTOBER 28
  # ============================================================

  - date: 2026-10-28
    weekday: wednesday
    title: Simulation two
    title_fr: Deuxième simulation

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 2–3 h
        text: Complete a second substantial timed mixed Exam P simulation under strict conditions.
        text_fr: Compléter une deuxième simulation P mixte substantielle et chronométrée dans des conditions strictes.

      - domain: actuarial
        node: actuarial-exam-1
        time: 45–60 min
        text: Review the highest-value errors immediately after the simulation.
        text_fr: Revoir immédiatement les erreurs les plus importantes après la simulation.

      - domain: research
        node: research-actuarial-anam
        time: 30 min
        text: Continue the first half of ANAM and map the additive neural architecture.
        text_fr: Poursuivre la première moitié d'ANAM et cartographier l'architecture neuronale additive.


  # ============================================================
  # THURSDAY - OCTOBER 29
  # ============================================================

  - date: 2026-10-29
    weekday: thursday
    title: Repair simulation two
    title_fr: Corriger la deuxième simulation

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Fully review Simulation 2 and compare its errors with Simulation 1.
        text_fr: Revoir entièrement la deuxième simulation et comparer ses erreurs à celles de la première.

      - domain: actuarial
        node: actuarial-exam-1
        time: 45–60 min
        text: Complete targeted problems on the remaining weak areas revealed by both simulations.
        text_fr: Compléter des problèmes ciblés sur les faiblesses restantes révélées par les deux simulations.

      - domain: research
        node: research-actuarial-anam
        time: 30 min
        text: Continue ANAM and write down the paper's intended meaning of interpretability.
        text_fr: Poursuivre ANAM et noter précisément ce que l'article entend par interprétabilité.


  # ============================================================
  # FRIDAY - OCTOBER 30
  # ============================================================

  - date: 2026-10-30
    weekday: friday
    title: Controlled pressure
    title_fr: Pression contrôlée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 75–90 min
        text: Complete a shorter timed mixed Exam P block with emphasis on pacing, skipping, and returning to difficult questions.
        text_fr: Compléter un bloc P mixte chronométré plus court en mettant l'accent sur le rythme, le saut des questions et le retour aux problèmes difficiles.

      - domain: actuarial
        node: actuarial-exam-1
        time: 30 min
        text: Refine the exam strategy for time management, educated guesses, and question order.
        text_fr: Affiner la stratégie d'examen pour la gestion du temps, les réponses au hasard raisonnées et l'ordre des questions.

      - domain: english
        node: english-conversation-practice
        time: 30–45 min
        text: Complete one light English conversation only if energy permits.
        text_fr: Compléter une conversation légère en anglais seulement si l'énergie le permet.


  # ============================================================
  # SATURDAY - OCTOBER 31
  # ============================================================

  - date: 2026-10-31
    weekday: saturday
    title: Close the gaps
    title_fr: Fermer les dernières lacunes

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90–120 min
        text: Review the complete P error log and redo the highest-value unresolved problems.
        text_fr: Revoir tout le journal d'erreurs P et refaire les problèmes non résolus les plus importants.

      - domain: actuarial
        node: actuarial-exam-1
        time: 30–45 min
        text: Write the final list of concepts, mistakes, and strategies that still require attention before November 7.
        text_fr: Écrire la liste finale des concepts, erreurs et stratégies qui demandent encore de l'attention avant le 7 novembre.

      - domain: research
        node: research-actuarial-anam
        time: 45 min
        text: Finish the first half of ANAM and write a concise summary of its motivation, architecture, and interpretability argument.
        text_fr: Terminer la première moitié d'ANAM et rédiger un résumé concis de sa motivation, de son architecture et de son argument d'interprétabilité.

      - domain: lean
        node: lean-mathematics-in-lean
        time: 20–30 min
        text: Complete one short Lean session only if the Exam P work is complete.
        text_fr: Compléter une courte séance Lean seulement si le travail de préparation à P est terminé.

      - domain: physical
        node: physical-training-consistency
        time: 15 min
        text: Review eight weeks of physical consistency and note only changes that are genuinely necessary.
        text_fr: Revoir huit semaines de régularité physique et noter uniquement les changements réellement nécessaires.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare the final Exam P week.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la dernière semaine avant l'examen P.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
