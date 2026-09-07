---
title: Exam P · Final Week
title_fr: Examen P · Semaine finale

cycle: foundations-01
cycle_week: 9

start_date: 2026-11-01
end_date: 2026-11-07

status: planned

active:
  - actuarial-exam-1
  - physical-training-consistency

maintenance:
  - research-actuarial-anam
  - english-conversation-practice

quests:

  # ============================================================
  # ACTUARIAL - EXAM P
  # ============================================================

  - domain: actuarial
    node: actuarial-exam-1
    task: Finish Exam P preparation, reduce uncertainty rather than learn large new topics, and sit the examination on November 7, 2026.
    task_fr: Terminer la préparation de l'examen P, réduire les incertitudes plutôt qu'apprendre de nouveaux gros sujets et passer l'examen le 7 novembre 2026.

    completion:
      - Complete one final substantial simulation
      - Review the final simulation completely
      - Repair the highest-value remaining weaknesses
      - Review the complete error log
      - Review formulas and recurring setups
      - Finalize time-management strategy
      - Finalize skip and guessing strategy
      - Prepare calculator and required identification
      - Confirm exam logistics
      - Sit Exam P on November 7, 2026
      - Record immediate post-exam observations without attempting a full postmortem

    completion_fr:
      - Compléter une dernière simulation substantielle
      - Revoir entièrement la dernière simulation
      - Corriger les dernières faiblesses les plus importantes
      - Revoir tout le journal d'erreurs
      - Revoir les formules et mises en équation récurrentes
      - Finaliser la stratégie de gestion du temps
      - Finaliser la stratégie de saut et de réponse au hasard
      - Préparer la calculatrice et les pièces d'identité requises
      - Confirmer la logistique de l'examen
      - Passer l'examen P le 7 novembre 2026
      - Noter quelques observations immédiatement après l'examen sans faire une analyse complète

  # ============================================================
  # RESEARCH - LIGHT MAINTENANCE
  # ============================================================

  - domain: research
    node: research-actuarial-anam
    task: Keep ANAM research alive only through light reading or note cleanup if Exam P preparation is on schedule.
    task_fr: Maintenir la recherche ANAM uniquement par une lecture légère ou le nettoyage de notes si la préparation de P est à jour.

    completion:
      - No research work competes with final Exam P preparation
      - Existing ANAM notes remain organized
      - Optional light reading completed if energy permits

    completion_fr:
      - Aucun travail de recherche ne concurrence la préparation finale de P
      - Les notes ANAM existantes restent organisées
      - Une lecture légère facultative est faite si l'énergie le permet

  # ============================================================
  # ENGLISH - LIGHT MAINTENANCE
  # ============================================================

  - domain: english
    node: english-conversation-practice
    task: Keep English active with one light conversation only if it supports rather than disrupts the exam week.
    task_fr: Maintenir l'anglais actif avec une seule conversation légère uniquement si elle ne perturbe pas la semaine d'examen.

  # ============================================================
  # PHYSICAL
  # ============================================================

  - domain: physical
    node: physical-training-consistency
    task: Maintain the physical routine while prioritizing sleep, recovery, and exam readiness over training volume.
    task_fr: Maintenir la routine physique tout en donnant priorité au sommeil, à la récupération et à la préparation à l'examen plutôt qu'au volume d'entraînement.

    completion:
      - Maintain basic morning and evening routines
      - Continue normal daily movement when practical
      - Avoid unnecessary increases in training volume
      - Protect sleep throughout the week
      - Reduce or move sessions if they interfere with exam readiness
      - Resume the normal progression after the examination

    completion_fr:
      - Maintenir les routines de base du matin et du soir
      - Poursuivre le mouvement quotidien normal lorsque raisonnable
      - Éviter toute augmentation inutile du volume d'entraînement
      - Protéger le sommeil pendant toute la semaine
      - Réduire ou déplacer les séances si elles nuisent à la préparation à l'examen
      - Reprendre la progression normale après l'examen


# ============================================================
# DAILY PLAN
# ============================================================

days:

  # ============================================================
  # SUNDAY - NOVEMBER 1
  # ============================================================

  - date: 2026-11-01
    weekday: sunday
    title: Final simulation
    title_fr: Simulation finale

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 2–3 h
        text: Complete the final substantial mixed Exam P simulation under realistic exam conditions.
        text_fr: Compléter la dernière simulation P mixte substantielle dans des conditions réalistes d'examen.

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–90 min
        text: Review the simulation completely and classify the remaining errors by concept, setup, calculation, and time management.
        text_fr: Revoir entièrement la simulation et classer les dernières erreurs par concept, mise en équation, calcul et gestion du temps.


  # ============================================================
  # MONDAY - NOVEMBER 2
  # ============================================================

  - date: 2026-11-02
    weekday: monday
    title: Repair the simulation
    title_fr: Corriger la simulation

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 90 min
        text: Rework every high-value error from the final simulation without immediately consulting the solution.
        text_fr: Refaire chaque erreur importante de la simulation finale sans consulter immédiatement la solution.

      - domain: actuarial
        node: actuarial-exam-1
        time: 30 min
        text: Reduce the remaining weaknesses to a short ranked list.
        text_fr: Réduire les faiblesses restantes à une courte liste classée par importance.

      - domain: research
        node: research-actuarial-anam
        time: 20–30 min
        text: Clean existing ANAM notes only if the Exam P work is complete.
        text_fr: Nettoyer les notes ANAM existantes uniquement si le travail de préparation à P est terminé.


  # ============================================================
  # TUESDAY - NOVEMBER 3
  # ============================================================

  - date: 2026-11-03
    weekday: tuesday
    title: Two weak areas
    title_fr: Deux dernières faiblesses

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: Complete targeted practice on the weakest remaining Exam P area.
        text_fr: Compléter une pratique ciblée sur la principale faiblesse restante de l'examen P.

      - domain: actuarial
        node: actuarial-exam-1
        time: 45–60 min
        text: Complete targeted practice on the second weakest remaining area.
        text_fr: Compléter une pratique ciblée sur la deuxième faiblesse restante.

      - domain: actuarial
        node: actuarial-exam-1
        time: 20 min
        text: Review the errors immediately and stop once the correction is understood.
        text_fr: Revoir immédiatement les erreurs et arrêter une fois la correction comprise.


  # ============================================================
  # WEDNESDAY - NOVEMBER 4
  # ============================================================

  - date: 2026-11-04
    weekday: wednesday
    title: Controlled mixed practice
    title_fr: Pratique mixte contrôlée

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60–75 min
        text: Complete a moderate mixed Exam P set with emphasis on clean setup, pacing, and avoiding careless errors.
        text_fr: Compléter une série P mixte modérée en mettant l'accent sur une mise en équation propre, le rythme et l'évitement des erreurs d'inattention.

      - domain: actuarial
        node: actuarial-exam-1
        time: 30–45 min
        text: Review the set and revisit only the concepts that still produce uncertainty.
        text_fr: Revoir la série et reprendre uniquement les concepts qui produisent encore de l'incertitude.

      - domain: english
        node: english-conversation-practice
        time: 30–45 min
        text: Complete one light English conversation only if it feels restorative.
        text_fr: Compléter une conversation légère en anglais uniquement si elle est reposante.


  # ============================================================
  # THURSDAY - NOVEMBER 5
  # ============================================================

  - date: 2026-11-05
    weekday: thursday
    title: Error log and strategy
    title_fr: Journal d'erreurs et stratégie

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 60 min
        text: Review the complete Exam P error log and redo only the highest-value unresolved examples.
        text_fr: Revoir tout le journal d'erreurs P et refaire uniquement les exemples non résolus les plus importants.

      - domain: actuarial
        node: actuarial-exam-1
        time: 30 min
        text: Review formulas, distribution recognition, common setups, and calculator procedures.
        text_fr: Revoir les formules, la reconnaissance des distributions, les mises en équation courantes et les procédures à la calculatrice.

      - domain: actuarial
        node: actuarial-exam-1
        time: 20 min
        text: Finalize pacing, skipping, returning, and educated-guessing strategy.
        text_fr: Finaliser la stratégie de rythme, de saut, de retour aux questions et de réponse au hasard raisonnée.


  # ============================================================
  # FRIDAY - NOVEMBER 6
  # ============================================================

  - date: 2026-11-06
    weekday: friday
    title: Light review only
    title_fr: Révision légère seulement

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: 30–45 min
        text: Complete only a light review of familiar formulas, recurring setups, and a few easy representative problems.
        text_fr: Faire uniquement une révision légère des formules familières, des mises en équation récurrentes et de quelques problèmes représentatifs faciles.

      - domain: actuarial
        node: actuarial-exam-1
        time: 20 min
        text: Prepare the calculator, identification, exam confirmation, route, timing, and anything required for tomorrow.
        text_fr: Préparer la calculatrice, les pièces d'identité, la confirmation de l'examen, le trajet, l'horaire et tout ce qui est requis pour demain.

      - domain: physical
        node: physical-training-consistency
        time: 10–20 min
        text: Keep movement easy and prioritize recovery and sleep.
        text_fr: Garder le mouvement léger et donner priorité à la récupération et au sommeil.

      - time: 10 min
        text: Stop studying early enough to arrive at the exam rested.
        text_fr: Arrêter d'étudier suffisamment tôt pour arriver reposé à l'examen.


  # ============================================================
  # SATURDAY - NOVEMBER 7
  # ============================================================

  - date: 2026-11-07
    weekday: saturday
    title: Exam P
    title_fr: Examen P

    tasks:

      - domain: actuarial
        node: actuarial-exam-1
        time: Exam
        text: Sit Exam P.
        text_fr: Passer l'examen P.

      - domain: actuarial
        node: actuarial-exam-1
        time: 10 min
        text: After the exam, record only immediate observations about timing, difficulty, and topics that felt uncertain.
        text_fr: Après l'examen, noter uniquement les observations immédiates sur le temps, la difficulté et les sujets qui ont semblé incertains.

      - time: Rest of day
        text: Stop Exam P preparation and recover. Do not begin the full postmortem today.
        text_fr: Arrêter la préparation à P et récupérer. Ne pas commencer l'analyse complète de l'examen aujourd'hui.

completed: []
---

## Weekly Review

### Progress

### Bottleneck

### Discovery

### Adjustment

### Roadmap Change
