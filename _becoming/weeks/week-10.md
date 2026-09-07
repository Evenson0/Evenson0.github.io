---
title: FM Re-entry · GLM, GAM, and ANAM
title_fr: Retour à FM · GLM, GAM et ANAM

cycle: foundations-01
cycle_week: 10

start_date: 2026-11-08
end_date: 2026-11-14

status: planned

active:
  - actuarial-fm-diagnostic
  - research-pricing-flexible-models
  - physical-training-consistency

maintenance:
  - english-conversation-practice
  - lean-library-navigation
  - writing-literary-essay

quests:

  # ============================================================
  # ACTUARIAL - FM BECOMES PRIMARY
  # ============================================================

  - domain: actuarial
    node: actuarial-fm-diagnostic
    task: Re-enter FM seriously after Exam P, complete a fresh diagnostic, rebuild the error log, and identify the highest-value topics for the December exam.
    task_fr: Reprendre sérieusement FM après l'examen P, compléter un nouveau diagnostic, reconstruire le journal d'erreurs et identifier les sujets les plus importants pour l'examen de décembre.

    completion:
      - Complete one fresh mixed FM diagnostic
      - Record every meaningful error
      - Classify errors by concept, setup, algebra, calculator, and time management
      - Identify the three weakest FM areas
      - Review interest-rate fundamentals
      - Review present and accumulated value
      - Review nominal and effective rate conversions
      - Review discount rates
      - Begin annuity review
      - Establish the November-to-December FM study priorities

    completion_fr:
      - Compléter un nouveau diagnostic FM mixte
      - Noter chaque erreur importante
      - Classer les erreurs par concept, mise en équation, algèbre, calculatrice et gestion du temps
      - Identifier les trois principales faiblesses FM
      - Revoir les bases des taux d'intérêt
      - Revoir les valeurs actuelles et accumulées
      - Revoir les conversions entre taux nominaux et effectifs
      - Revoir les taux d'escompte
      - Commencer la révision des annuités
      - Établir les priorités FM de novembre jusqu'à l'examen de décembre

  # ============================================================
  # EXAM P - CLOSE THE LOOP
  # ============================================================

  - domain: actuarial
    node: actuarial-exam-1
    task: Write a short post-exam review of Exam P, then close the preparation cycle and move forward.
    task_fr: Rédiger une courte revue post-examen de P, puis fermer le cycle de préparation et passer à la suite.

    completion:
      - Record what felt easy
      - Record what felt difficult
      - Record any timing problems
      - Record topics that felt uncertain
      - Write lessons for a future attempt only if needed
      - Stop active Exam P preparation after the review

    completion_fr:
      - Noter ce qui a semblé facile
      - Noter ce qui a semblé difficile
      - Noter les éventuels problèmes de temps
      - Noter les sujets qui ont semblé incertains
      - Écrire les leçons pour une éventuelle future tentative seulement si nécessaire
      - Arrêter la préparation active de P après cette revue

  # ============================================================
  # RESEARCH
  # ============================================================

  - domain: research
    node: research-pricing-flexible-models
    task: Build a small reproducible comparison between a GLM and a more flexible additive model, and include ANAM only if the implementation is ready.
    task_fr: Construire une petite comparaison reproductible entre un GLM et un modèle additif plus flexible, et inclure ANAM uniquement si l'implémentation est prête.

    completion:
      - Use one common dataset
      - Fit a GLM baseline
      - Fit one flexible additive model
      - Use comparable evaluation metrics
      - Compare predictive behavior
      - Compare learned structure
      - Compare interpretability
      - Record where complexity improves the model
      - Record where complexity adds little value
      - Keep the work reproducible

    completion_fr:
      - Utiliser un même jeu de données
      - Ajuster un GLM de référence
      - Ajuster un modèle additif plus flexible
      - Utiliser des mesures d'évaluation comparables
      - Comparer le comportement prédictif
      - Comparer les structures apprises
      - Comparer l'interprétabilité
      - Noter où la complexité améliore le modèle
      - Noter où la complexité apporte peu de valeur
      - Garder le travail reproductible

  # ============================================================
  # WRITING / READING
  # ============================================================

  - domain: writing
    node: writing-literary-essay
    task: If Mort à crédit is finished, begin an 800–1,200 word literary essay; otherwise continue reading without forcing the essay.
    task_fr: Si Mort à crédit est terminé, commencer un essai littéraire de 800 à 1 200 mots ; sinon poursuivre la lecture sans forcer l'essai.

  # ============================================================
  # LEAN
  # ============================================================

  - domain: lean
    node: lean-library-navigation
    task: Learn to search mathlib and reuse existing lemmas in one small proof.
    task_fr: Apprendre à chercher dans mathlib et réutiliser des lemmes existants dans une petite preuve.

  # ============================================================
  # ENGLISH
  # ============================================================

  - domain: english
    node: english-conversation-practice
    task: Complete one English conversation structured like a professional meeting.
    task_fr: Compléter une conversation en anglais structurée comme une réunion professionnelle.

  # ============================================================
  # PHYSICAL
  # ============================================================

  - domain: physical
    node: physical-training-consistency
    task: Return to the normal physical protocol after Exam P week and continue building consistency.
    task_fr: Revenir au protocole physique normal après la semaine de l'examen P et poursuivre la construction de la régularité.

    completion:
      - Resume normal morning routine
      - Resume normal strength schedule
      - Continue daily movement target
      - Resume normal evening routine
      - Review recovery after the exam week

    completion_fr:
      - Reprendre la routine normale du matin
      - Reprendre le programme normal de musculation
      - Poursuivre l'objectif de mouvement quotidien
      - Reprendre la routine normale du soir
      - Revoir la récupération après la semaine d'examen


# ============================================================
# DAILY PLAN
# ============================================================

days:

  # ============================================================
  # SUNDAY - NOVEMBER 8
  # ============================================================

  - date: 2026-11-08
    weekday: sunday
    title: Close P, reopen FM
    title_fr: Fermer P, rouvrir FM

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 30–45 min
        text: Write the short Exam P post-exam review and close the preparation cycle.
        text_fr: Rédiger la courte revue post-examen de P et fermer le cycle de préparation.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 60–90 min
        text: Reopen the FM material, review the syllabus map, and prepare the diagnostic.
        text_fr: Reprendre le matériel FM, revoir la carte du programme et préparer le diagnostic.

      - time: 15 min
        text: Define the main FM objective for the period leading to the December exam.
        text_fr: Définir l'objectif principal FM pour la période menant à l'examen de décembre.


  # ============================================================
  # MONDAY - NOVEMBER 9
  # ============================================================

  - date: 2026-11-09
    weekday: monday
    title: Fresh FM diagnostic
    title_fr: Nouveau diagnostic FM

    tasks:

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 90–120 min
        text: Complete a fresh mixed FM diagnostic without reviewing solutions during the session.
        text_fr: Compléter un nouveau diagnostic FM mixte sans consulter les solutions pendant la séance.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 45–60 min
        text: Review the diagnostic and classify every meaningful error.
        text_fr: Revoir le diagnostic et classer chaque erreur importante.


  # ============================================================
  # TUESDAY - NOVEMBER 10
  # ============================================================

  - date: 2026-11-10
    weekday: tuesday
    title: Interest-rate foundations
    title_fr: Fondements des taux d'intérêt

    tasks:

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 75–90 min
        text: Review effective rates, nominal rates, discount rates, accumulation, and present value.
        text_fr: Revoir les taux effectifs, les taux nominaux, les taux d'escompte, l'accumulation et la valeur actuelle.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: Complete 15–20 focused problems on rate conversion and value equations.
        text_fr: Compléter 15 à 20 exercices ciblés sur les conversions de taux et les équations de valeur.

      - domain: writing
        node: writing-literary-essay
        time: 30 min
        text: Continue Mort à crédit or outline the literary essay if the book is finished.
        text_fr: Poursuivre Mort à crédit ou préparer le plan de l'essai littéraire si le livre est terminé.


  # ============================================================
  # WEDNESDAY - NOVEMBER 11
  # ============================================================

  - date: 2026-11-11
    weekday: wednesday
    title: Repair the weakest FM area
    title_fr: Corriger la principale faiblesse FM

    tasks:

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 90 min
        text: Work intensively on the weakest area identified by the FM diagnostic.
        text_fr: Travailler intensivement sur la principale faiblesse identifiée par le diagnostic FM.

      - domain: research
        node: research-pricing-flexible-models
        time: 45–60 min
        text: Prepare the common dataset and fit the GLM baseline for the flexible-model comparison.
        text_fr: Préparer le jeu de données commun et ajuster le GLM de référence pour la comparaison des modèles flexibles.

      - domain: lean
        node: lean-library-navigation
        time: 30–45 min
        text: Practice finding useful lemmas in mathlib for one small proof.
        text_fr: S'entraîner à trouver des lemmes utiles dans mathlib pour une petite preuve.


  # ============================================================
  # THURSDAY - NOVEMBER 12
  # ============================================================

  - date: 2026-11-12
    weekday: thursday
    title: Begin annuities
    title_fr: Commencer les annuités

    tasks:

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 75–90 min
        text: Review annuity-immediate, annuity-due, present value, accumulated value, and basic notation.
        text_fr: Revoir les annuités immédiates, les annuités à terme à échoir, les valeurs actuelles, les valeurs accumulées et la notation de base.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: Complete a focused annuity problem set.
        text_fr: Compléter une série ciblée d'exercices sur les annuités.

      - domain: research
        node: research-pricing-flexible-models
        time: 45–60 min
        text: Fit one flexible additive model using the same dataset and target as the GLM.
        text_fr: Ajuster un modèle additif flexible avec le même jeu de données et la même cible que le GLM.


  # ============================================================
  # FRIDAY - NOVEMBER 13
  # ============================================================

  - date: 2026-11-13
    weekday: friday
    title: Mixed FM practice
    title_fr: Pratique FM mixte

    tasks:

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 90 min
        text: Complete a mixed FM set combining interest-rate measures, value equations, and introductory annuities.
        text_fr: Compléter une série FM mixte combinant mesures de taux, équations de valeur et introduction aux annuités.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30–45 min
        text: Review every error and update the FM error log.
        text_fr: Revoir chaque erreur et mettre à jour le journal d'erreurs FM.

      - domain: english
        node: english-conversation-practice
        time: 60 min
        text: Complete an English conversation structured like a professional meeting.
        text_fr: Compléter une conversation en anglais structurée comme une réunion professionnelle.


  # ============================================================
  # SATURDAY - NOVEMBER 14
  # ============================================================

  - date: 2026-11-14
    weekday: saturday
    title: Establish the FM path
    title_fr: Établir la trajectoire FM

    tasks:

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 90–120 min
        text: Complete a cumulative FM set covering the material reviewed this week and compare performance with Monday's diagnostic.
        text_fr: Compléter une série FM cumulative couvrant le contenu revu cette semaine et comparer la performance avec le diagnostic de lundi.

      - domain: actuarial
        node: actuarial-fm-diagnostic
        time: 30 min
        text: Rank the three highest-value FM weaknesses for the remaining weeks before the December exam.
        text_fr: Classer les trois faiblesses FM les plus importantes pour les semaines restantes avant l'examen de décembre.

      - domain: research
        node: research-pricing-flexible-models
        time: 60 min
        text: Compare the GLM and flexible additive model using common metrics and record where flexibility actually helps.
        text_fr: Comparer le GLM et le modèle additif flexible avec des mesures communes et noter où la flexibilité apporte réellement quelque chose.

      - domain: writing
        node: writing-literary-essay
        time: 30–45 min
        text: Continue the literary book or begin the first 300–500 words of the essay if ready.
        text_fr: Poursuivre le livre littéraire ou commencer les 300 à 500 premiers mots de l'essai si le moment est venu.

      - domain: physical
        node: physical-training-consistency
        time: 15 min
        text: Review the return to the normal physical routine after Exam P.
        text_fr: Revoir le retour à la routine physique normale après l'examen P.

      - time: 15–20 min
        text: Complete the Becoming weekly review and prepare Week 11.
        text_fr: Compléter la revue hebdomadaire Becoming et préparer la semaine 11.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
