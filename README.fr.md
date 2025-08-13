# 🚀 Application Full Stack

Une application web full-stack moderne construite avec Next.js 15, incluant l'authentification utilisateur, l'intégration de base de données MongoDB, et un design responsive.

## 🌐 Démo en Direct
**🔗 [Essayez-le en direct sur Vercel](https://full-stack-app-sooty.vercel.app/)**

> 🇬🇧 **English version available**: [README.md](README.md)

## ✨ Fonctionnalités

- **🔐 Authentification**: OAuth GitHub sécurisé avec NextAuth.js
- **📊 Base de données**: Intégration MongoDB avec Mongoose ODM
- **🎨 Interface moderne**: Design responsive avec TailwindCSS 4
- **⚡ Performance**: Construit avec Next.js 15 et React 19
- **🛡️ Sécurité des types**: Support complet TypeScript
- **🔧 Prêt pour la production**: Optimisé pour le déploiement Vercel
- **📱 Compatible mobile**: Design responsive qui fonctionne sur tous les appareils

## 💻 Stack Technologique

Cette application full-stack exploite des technologies modernes pour la scalabilité, la sécurité et les performances :

### 🎯 Framework Principal
| Technologie | Description |
|---|---|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) | Framework React full-stack avec App Router et composants serveur |
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) | React 19 moderne avec hooks et fonctionnalités concurrentes |
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) | Développement type-safe avec vérification de types complète |

### 🔐 Authentification & Sécurité
| Technologie | Description |
|---|---|
| ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white) | Solution d'authentification complète avec fournisseurs OAuth |
| ![GitHub](https://img.shields.io/badge/GitHub_OAuth-181717?style=for-the-badge&logo=github&logoColor=white) | Intégration OAuth GitHub sécurisée pour l'authentification utilisateur |

### 🗄️ Base de Données & ORM
| Technologie | Description |
|---|---|
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | Base de données NoSQL pour un stockage de données flexible |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | Modélisation d'objets MongoDB élégante pour Node.js |

### 🎨 Styling & Interface
| Technologie | Description |
|---|---|
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | Framework CSS utility-first pour un développement UI rapide |
| ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) | CSS moderne avec propriétés personnalisées et design responsive |

### 🛠️ Outils de Développement
| Technologie | Description |
|---|---|
| ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) | Linting de code pour une qualité de code cohérente |
| ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white) | Validation de schéma TypeScript-first |

### 🚀 Déploiement & Hébergement
| Technologie | Description |
|---|---|
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Déploiement optimisé avec fonctions serverless |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | Environnement d'exécution pour les fonctionnalités côté serveur |

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn
- Base de données MongoDB (Atlas ou locale)
- Application GitHub OAuth ([Créer une ici](https://github.com/settings/applications/new))

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Amen-ellah-kerimi/full-stack-app.git
   cd full-stack-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```

   Éditer `.env.local` et ajouter votre configuration :
   ```env
   # Base de données MongoDB
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/full-stack-app?retryWrites=true&w=majority
   
   # Configuration NextAuth.js
   NEXTAUTH_SECRET=votre-secret-nextauth-ici
   NEXTAUTH_URL=http://localhost:3000
   
   # Fournisseur OAuth GitHub
   GITHUB_CLIENT_ID=votre-client-id-github
   GITHUB_CLIENT_SECRET=votre-client-secret-github
   ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir votre navigateur**
   Naviguer vers [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Variables d'environnement

| Variable | Description | Requis |
|----------|-------------|---------|
| `MONGODB_URI` | Chaîne de connexion MongoDB | ✅ Oui |
| `NEXTAUTH_SECRET` | Clé secrète NextAuth.js | ✅ Oui |
| `NEXTAUTH_URL` | URL de l'app pour NextAuth.js | ✅ Oui |
| `GITHUB_CLIENT_ID` | ID client OAuth GitHub | ✅ Oui |
| `GITHUB_CLIENT_SECRET` | Secret client OAuth GitHub | ✅ Oui |

### Configuration GitHub OAuth

1. **Créer une application GitHub OAuth** :
   - Aller sur [Paramètres développeur GitHub](https://github.com/settings/developers)
   - Cliquer sur "New OAuth App"
   - Définir l'URL de callback d'autorisation : `http://localhost:3000/api/auth/callback/github`

2. **Obtenir les identifiants** :
   - Copier l'ID client et le secret client
   - Les ajouter à votre fichier `.env.local`

### Configuration MongoDB

1. **MongoDB Atlas** (Recommandé) :
   - Créer un compte sur [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Créer un nouveau cluster
   - Obtenir la chaîne de connexion et l'ajouter à `MONGODB_URI`

2. **MongoDB local** :
   - Installer MongoDB localement
   - Utiliser la chaîne de connexion : `mongodb://localhost:27017/full-stack-app`

## 🚀 Déploiement

### Validation de Production

Avant de déployer, exécutez le script de validation de production pour vous assurer que tout est configuré correctement :

```bash
npm run validate:prod
```

Ce script vérifie :
- ✅ Variables d'environnement requises (MONGODB_URI, NEXTAUTH_SECRET, GitHub OAuth)
- ✅ Tous les fichiers requis existent
- ✅ Les dépendances sont installées
- ✅ Le projet se construit avec succès
- ✅ La connexion à la base de données fonctionne
- ✅ Les routes API sont correctement configurées
- ✅ La configuration NextAuth est complète

### Déployer sur Vercel (Recommandé)

1. **Pousser vers GitHub**
   ```bash
   git add .
   git commit -m "Commit initial"
   git push origin main
   ```

2. **Déployer sur Vercel**
   - Visiter [Vercel](https://vercel.com)
   - Importer votre dépôt GitHub
   - Ajouter les variables d'environnement :
     - `MONGODB_URI` : Votre chaîne de connexion MongoDB
     - `NEXTAUTH_SECRET` : Générer avec `openssl rand -base64 32`
     - `NEXTAUTH_URL` : Votre URL de production (ex: `https://votre-app.vercel.app`)
     - `GITHUB_CLIENT_ID` : Votre ID client OAuth GitHub
     - `GITHUB_CLIENT_SECRET` : Votre secret client OAuth GitHub
   - Déployer !

3. **Mettre à jour GitHub OAuth**
   - Mettre à jour l'URL de callback d'autorisation : `https://votre-app.vercel.app/api/auth/callback/github`

## 🛠️ Développement

### Structure du projet

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/  # Routes API NextAuth.js
│   │   └── debug/               # Route API de débogage
│   ├── globals.css              # Styles globaux
│   ├── layout.tsx               # Layout racine
│   └── page.tsx                 # Page d'accueil
├── lib/
│   ├── authOptions.ts           # Configuration NextAuth.js
│   ├── auth.ts                  # Utilitaires d'authentification
│   └── mongoose.ts              # Connexion MongoDB
├── models/
│   └── User.ts                  # Modèle utilisateur
├── schemas/                     # Schémas de validation Zod
└── types/                       # Définitions de types TypeScript
```

### Stack technique

- **Framework** : Next.js 15 avec App Router
- **Authentification** : NextAuth.js avec GitHub OAuth
- **Base de données** : MongoDB avec Mongoose ODM
- **Styles** : TailwindCSS 4
- **Langage** : TypeScript
- **Validation** : Zod
- **Déploiement** : Prêt pour Vercel

### Scripts

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire pour la production
npm run start        # Démarrer le serveur de production
npm run lint         # Exécuter ESLint
npm run validate:prod # Valider la préparation pour la production
```

## 🐛 Dépannage

### Problèmes courants

#### "MongooseError: Operation buffering timed out"
- **Solution** : Vérifier votre chaîne de connexion MongoDB
- **Vérifier** : S'assurer que votre IP est autorisée dans MongoDB Atlas

#### "NextAuth.js: Missing secret"
- **Solution** : Ajouter `NEXTAUTH_SECRET` à vos variables d'environnement
- **Générer** : Utiliser `openssl rand -base64 32` pour générer un secret

#### "Erreur GitHub OAuth"
- **Solution** : Vérifier la configuration de votre app GitHub OAuth
- **Vérifier** : S'assurer que l'URL de callback correspond à votre URL de déploiement

## 📄 Licence

Licence MIT - voir le fichier [LICENSE](LICENSE) pour les détails

---

**Construit avec ❤️ en utilisant Next.js 15, React 19, MongoDB, et NextAuth.js**
