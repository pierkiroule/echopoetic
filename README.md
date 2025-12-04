# Le Nid Échopoétique

Coller · Assembler · Réécrire · Envoler · Recycler

Webapp poétique solo-first, hors réseau, centrée sur le recyclage circulaire des textes.

## Concept
- **Bulles** : fragments courts importés ou collectés localement.
- **Le nid** : espace de composition solo-only. On assemble, on réécrit, on demande une variation via une **IA locale** (stub) comme aide à la métamorphose.
- **Envol** : à l'export (image/texte), le poème final n'est pas archivé. Il est dissous et **recyclé** en 3 à 7 nouvelles bulles qui rejoignent la bibliothèque locale.
- **Aucun réseau** : pas de WebRTC, pas de partage, pas de synchro. Tout reste dans le navigateur.

## Trajectoire poétique
- **Accueil** : Le landing affiche simplement le titre et deux portes d'entrée : « Entrer dans le nid » et « Ouvrir la bibliothèque ». Aucune explication longue dans l'interface, seulement l'essentiel et un fond noir minimaliste.
- **Collecter des bulles** : importer ou coller des fragments externes via l'importeur local. Les bulles sont stockées uniquement dans `localStorage`.
- **Composer dans le nid** : assembler librement, réécrire, et solliciter l'IA locale (stub `src/ia/localLLM_stub.jsx`) comme aide à la métamorphose.
- **Recycler après l'envol** : à chaque export, `core/recycler.js` transforme le poème final en bulles fraîches réinjectées dans la bibliothèque locale.

## Garanties solo-only
- Pas de réseau, pas de diffusion : le nid reste clos, tout reste sur l'appareil.
- LocalStorage pour la bibliothèque et les états, vidage seulement sur action explicite.
- Pas de dépendance supplémentaire : animations et style en CSS, composants React sobres.

## Architecture minimale
- `src/App.jsx` : affiche `Home.jsx` et le style global.
- `src/components/Home.jsx` : landing minimaliste centrée sur le titre, le sous-titre et deux boutons.
- `src/components/Sky.jsx` : décor animé précédent (peut être réutilisé plus tard si besoin).
- `src/core/moods.jsx` : liste de tonalités de base.
- `src/core/tagsEngine.jsx` : utilitaires de tags simples.
- `src/core/importer.js` : import local, découpe de texte, stockage `localStorage` solo-only.
- `src/core/recycler.js` : recycle un poème final en nouvelles bulles locales.
- `src/ia/localLLM_stub.jsx` : stub d'IA locale pour suggérer des variations.
- `src/styles/poetry.css` : style global minimaliste.

## Flux utilisateur
1. **Coller** : importer un texte externe (manuel ou fichier) avec l'importeur local.
2. **Assembler** : choisir des bulles dans la bibliothèque locale et les agencer dans le nid.
3. **Réécrire** : modifier librement, solliciter l'IA locale comme aide à la métamorphose (pas d'appel réseau).
4. **Envoler** : exporter le poème (image/texte) quand il est prêt.
5. **Recycler** : l'export déclenche `core/recycler.js` pour créer 3 à 7 nouvelles bulles injectées dans la bibliothèque locale.

## Commandes utiles
- `npm install`
- `npm run dev`
- `npm run build`
