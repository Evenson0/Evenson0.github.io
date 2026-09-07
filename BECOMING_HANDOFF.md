# Becoming - état du projet et consignes de reprise

Dernière mise à jour : septembre 2026.

## À lire avant toute modification

Ce document est la mémoire de reprise du projet Becoming.

Avant toute modification liée à Becoming :

1. lire ce fichier en entier ;
2. lire `BECOMING.md` ;
3. inspecter les fichiers réellement utilisés ;
4. comprendre l'état actuel avant de proposer une modification.

Ne jamais recommencer l'implémentation à zéro simplement parce qu'une autre architecture semble plus élégante.

Ne jamais moderniser, restructurer ou complexifier Becoming sans raison concrète.

Une revue peut parfaitement se terminer par :

> Aucune modification importante nécessaire.

---

# 1. Intention du projet

`/becoming/` représente une progression personnelle à long terme traduite en actions concrètes.

L'inspiration vient des arbres de progression et systèmes de développement des jeux de stratégie ou RPG, mais sans vocabulaire enfantin, XP artificielle, récompenses arbitraires ou gamification décorative.

Le système doit rester :

- sérieux ;
- élégant ;
- motivant ;
- concret ;
- lisible ;
- utilisable rapidement sur téléphone ;
- fondé sur des preuves de progression réelles.

Becoming doit principalement répondre à trois questions :

1. Que dois-je faire aujourd'hui ?
2. Que dois-je accomplir cette semaine ?
3. Où ce travail me conduit-il à long terme ?

Le troisième niveau ne doit jamais écraser les deux premiers.

La Roadmap donne la direction.

La semaine donne les priorités.

La journée donne l'action.

---

# 2. Principe fondamental : evidence-based progression

Becoming n'est pas un habit tracker générique.

Les habitudes et routines peuvent y apparaître, mais elles servent des trajectoires plus profondes.

Un objectif important ne doit être considéré comme accompli que lorsque les critères correspondants sont réellement satisfaits.

Ne jamais inventer :

- une réussite ;
- un examen réussi ;
- une publication ;
- un résultat de recherche ;
- une progression physique ;
- une contribution ;
- une certification ;
- une preuve.

Lorsqu'une information n'est pas connue, la laisser inconnue.

Les plans futurs sont des plans, pas des accomplissements.

---

# 3. Pages visibles

Il existe deux pages principales :

- `/becoming/`
- `/becoming/roadmap/`

## `/becoming/`

Cette page rassemble maintenant :

- la période actuelle ;
- le sélecteur des semaines ;
- les objectifs hebdomadaires ;
- le plan quotidien de la semaine sélectionnée ;
- les tâches quotidiennes cochables ;
- le protocole physique permanent.

Les tâches quotidiennes sont dérivées des fichiers hebdomadaires.

Le protocole physique est ajouté séparément afin d'éviter de recopier les mêmes routines dans chaque journée de chaque semaine.

## `/becoming/roadmap/`

La Roadmap représente la progression complète.

Elle affiche notamment :

- les grands objectifs ;
- les domaines ;
- les nœuds de progression ;
- leurs dépendances ;
- leurs états ;
- leurs critères de progression ;
- leurs relations avec les étapes suivantes.

Ne pas transformer la Roadmap en liste de tâches quotidiennes.

---

# 4. Architecture conceptuelle

Le système comporte quatre couches distinctes.

## Couche 1 - Domains

Les grands domaines de développement.

Source :

```text
_data/becoming/domains.yml
