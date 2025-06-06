# Getartway.app ✨

Ce `README.md` fournit les étapes nécessaires pour installer et lancer le projet en développement local. Pour une documentation technique plus détaillée sur l'architecture, les technologies et les contributeurs, veuillez consulter [la documentation technique](https://github.com/baptiste-jullion/getartway.app/wiki/Documentation-Technique)

## 🚀 Démarrage Rapide

Suivez ces étapes pour mettre en place et lancer le projet sur votre machine locale.

### Prérequis

Assurez-vous d'avoir les outils suivants installés sur votre système :

*   **Docker** et **Docker Compose** : Essentiels pour lancer les services du projet.
    *   [Installer Docker](https://docs.docker.com/get-docker/)
*   **Bun**: Utilisé pour gérer les dépendances et exécuter les scripts du projet.
    *   [Installer Bun](https://bun.sh/docs/installation)

### 1. Cloner le dépôt

Commencez par cloner le dépôt sur votre machine locale :

```bash
git clone https://github.com/baptiste-jullion/getartway.app.git
cd getartway.app
```

### 2. Configuration des variables d'environnement

Copiez le fichier d'exemple des variables d'environnement et configurez-les.

```bash
cp .env.example .env
```

Ouvrez le fichier `.env` et remplissez les valeurs.

*   `DB_PORT`: Port pour la base de données PostgreSQL (ex: `5432`).
*   `API_PORT`: Port pour l'API backend (ex: `3000`).
*   `WEBSITE_PORT`: Port pour le site web (ex: `3001`).
*   `API_URL`: L'URL complète de votre API. **Très important pour l'application mobile.**
*   `MAPBOX_PUBLIC_KEY`: Votre clé publique Mapbox (commence par `pk.`).
*   `MAPBOX_SECRET_KEY`: Votre clé secrète Mapbox (commence par `sk.`).
*   `EAS_TOKEN`: Token pour les services Expo Application Services (EAS).

### 3. Lancer les services Docker (API & Base de données)

Le projet utilise Docker Compose pour orchestrer la base de données PostgreSQL (avec PostGIS) et l'API backend.

Cette commande va :
*   Construire les images Docker nécessaires.
*   Lancer le service de base de données.
*   Lancer le service API.
*   Pour l'API en développement, elle va également :
    *   Réinitialiser la base de données (`prisma migrate reset --force`)
    *   Exécuter les migrations (`prisma migrate deploy`)
    *   Initialiser la base de données avec des données de base (`prisma db seed`).

```bash
bun docker:dev:start
```

Les services devraient être accessibles aux adresses suivantes (selon vos configurations dans `.env`):
*   **API Backend**: `http://localhost:API_PORT` (par défaut `http://localhost:3000`)
*   **Base de données**: `localhost:DB_PORT` (par défaut `localhost:5432`)

Pour arrêter les services Docker :

```bash
bun docker:dev:stop
```

### 4. Accéder à la documentation de l'API (Scalar)

Une fois l'API lancée via Docker, vous pouvez accéder à sa documentation interactive à l'adresse suivante :

`http://localhost:API_PORT/docs` (ex: `http://localhost:3000/docs`)

### 5. Lancer l'application mobile

L'application mobile est une application Expo/React Native.

1.  Accédez au répertoire `mobile` :
    ```bash
    cd mobile
    ```
2.  Installez les dépendances du projet mobile.
    ```bash
    bun install
    ```
3.  Lancez le serveur de développement Expo :
    ```bash
    bun run android
    ```
    Cela ouvrira une nouvelle page dans votre navigateur avec un QR code. Vous pouvez scanner ce QR code avec l'application Expo Go sur votre téléphone ou lancer l'application sur un émulateur/simulateur.

---

## 🧪 Exécuter les Tests

Pour exécuter la suite de tests du projet (principalement les tests de l'API), utilisez la commande Docker dédiée :

```bash
bun docker:test:start
```

Cette commande lancera un environnement de test isolé (avec sa propre base de données), exécutera les tests définis, puis s'arrêtera.

---

## ☁️ Déploiement

Le déploiement est géré automatiquement via les GitHub Actions lors des pushes sur la branche `main`. Vous pouvez consulter le workflow de déploiement ici :

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
