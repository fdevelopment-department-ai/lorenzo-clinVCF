# ClinVCF-OS — Portfolio Lorenzo

Bienvenue dans le dépôt officiel du projet **ClinVCF-OS** développé dans le cadre de mon apprentissage et de mon portfolio. Ce projet est un site web vitrine responsive moderne.

---

## 📂 Informations sur le Code Source

Le projet est structuré de manière simple et standard pour un site web statique :

* **`index.html`** : Fichier principal du site. Il contient toute la structure sémantique du site (Header, Navbar, Hero section, sections Philosophie, Modules, ClinStore, SDK, Documentation, Tarifs, FAQ et la section de téléchargement).
* **`styles.css`** : Feuille de style principale. Elle centralise les variables de design (couleurs, polices Inter, thèmes) et gère l'affichage responsive et moderne du site.
* **`scripts/`** : Dossier contenant la logique JavaScript du site (comme la gestion dynamique des téléchargements ou des interactions).

---

## 🛠️ Commandes Git de Base à Savoir

Voici les commandes fondamentales à maîtriser au quotidien pour gérer ce dépôt.

### 1. Démarrer ou Récupérer un Projet
* **Initialiser un nouveau dépôt local :**
    ```bash
    git init
    ```
* **Cloner (télécharger) ce dépôt sur ta machine :**
    ```bash
    git clone <url_du_depot>
    ```

### 2. Travailler au Quotidien (Enregistrer et Envoyer)
* **Récupérer les dernières modifications du serveur :**
    ```bash
    git pull
    ```
* **Envoyer tes modifications locales vers GitHub :**
    ```bash
    git push origin <nom_de_la_branche>
    ```

### 3. Gérer les Branches (Fonctionnalités)
* **Créer une nouvelle branche et basculer dessus directement :**
    ```bash
    git checkout -b <nom_de_la_branche>
    ```
    *Exemple : `git checkout -b feature-nouvelle-section`*

* **Fusionner une branche (une fois ton travail terminé) :**
    1. Reviens sur ta branche principale : `git checkout main`
    2. Fusionne la branche de travail :
    ```bash
    git merge <nom_de_la_branche>
    ```

---

## 📦 Mise en Production & Automatisation

Toute la documentation concernant l'automatisation du déploiement continu par les tags Git et l'infrastructure associée se trouve dans le dossier suivant :
📁 `documents/00_Automatisation de la mise en production_FR_V1.pdf`
