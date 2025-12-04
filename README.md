# Échopoetic

Cueillir / Cocréer / Polleniser

Web 3.5 frugal local-first

Échopoetic = Poésie Résonante Partagée

Projet: structure minimale Vite + React pour une application poétique immersive, audioreactive et IA locale.

Contenu actuel dans `src` (fichiers normalisés en `.jsx`):
- `components`: `Sky.jsx` (composant principal animé).
- `core`: `moods.jsx`, `tagsEngine.jsx`.
- `ia`: `localLLM_stub.jsx`.
- `styles`: `poetry.css`.

Nettoyage effectué: suppression des composants non utilisés (Bulles, Nest, MoodSelector, couche audio) pour alléger l'ossature tout en conservant les espaces `components`, `styles`, `core` et `ia` nécessaires pour la suite.

But: fournir une architecture sobre et locale — animation visuelle minimale (CSS keyframes) sans logique audio ni dépendances externes pour l'instant.

Déploiement Vercel:
- Vercel détecte automatiquement Vite grâce à `vercel.json` (build `npm run build`, sortie `dist`).
- Pour un SPA, toutes les routes sont réécrites vers `/` via `rewrites`.
- Commandes utiles: `npm install`, `npm run build`, puis `vercel --prod` si le CLI est configuré.

Prochaine étape suggérée:
- Initialiser un projet Vite + React (`npm create vite@latest`) puis déplacer ces fichiers sous `src` si nécessaire.
