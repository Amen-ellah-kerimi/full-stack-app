# 🚀 Application Full Stack

Une application web full-stack moderne construite avec Next.js 15, incluant l'authentification utilisateur, l'intégration de base de données MongoDB, et un design responsive.

> 🇬🇧 **English version available**: [README.md](README.md)

## ✨ Fonctionnalités

- **🔐 Authentification**: OAuth GitHub sécurisé avec NextAuth.js
- **📊 Base de données**: Intégration MongoDB avec Mongoose ODM
- **🎨 Interface moderne**: Design responsive avec TailwindCSS 4
- **⚡ Performance**: Construit avec Next.js 15 et React 19
- **🛡️ Sécurité des types**: Support complet TypeScript
- **🔧 Prêt pour la production**: Optimisé pour le déploiement Vercel
- **📱 Compatible mobile**: Design responsive qui fonctionne sur tous les appareils

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn
- Base de données MongoDB (Atlas ou locale)
- Application GitHub OAuth ([Créer une ici](https://github.com/settings/applications/new))

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone <votre-url-repo>
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
