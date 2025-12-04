import React from 'react'
import Sky from './components/Sky'
import './styles/poetry.css'

// App principale — espace d'accueil du Nid Échopoétique (solo-first, local).
export default function App() {
  return (
    <div className="app-root">
      <div className="scene">
        <Sky />

        <main className="hero" aria-label="Présentation du Nid Échopoétique">
          <p className="eyebrow">Solo-first · Hors réseau · LocalStorage</p>
          <h1>Le Nid Échopoétique</h1>
          <p className="lede">
            Une webapp poétique, sans P2P, pour cueillir des bulles de texte, les assembler dans
            un nid, réécrire à voix basse avec une IA locale et recycler chaque envol en nouveaux
            fragments.
          </p>

          <div className="cta-row">
            <button type="button" className="primary">Entrer dans le nid</button>
            <button type="button" className="ghost">Ouvrir la bibliothèque locale</button>
          </div>

          <div className="pill-row" aria-hidden>
            <span>Solo-only</span>
            <span>LocalStorage</span>
            <span>IA d'atelier (stub)</span>
          </div>
        </main>

        <section className="dev-guide" aria-label="Cycle poétique circulaire">
          <h2>Coller · Assembler · Réécrire · Envoler · Recycler</h2>
          <p className="dev-lede">
            Pas de réseau, pas de diffusion : tout se passe sur l'appareil. Chaque poème partagé
            est recyclé en bulles fraîches qui nourrissent le nid.
          </p>

          <div className="guide-grid">
            <article className="guide-card">
              <h3>Collecter des bulles</h3>
              <p>
                Importe ou colle des fragments externes via l'importeur local. Les bulles sont
                stockées uniquement dans le stockage local du navigateur.
              </p>
              <button type="button" className="ghost">Coller un texte</button>
            </article>

            <article className="guide-card">
              <h3>Composer dans le nid</h3>
              <p>
                Assemble les bulles, réécris-les librement et sollicite l'IA locale (stub
                <code>ia/localLLM_stub.jsx</code>) comme aide à la métamorphose.
              </p>
              <div className="guide-actions">
                <button type="button" className="primary">Ouvrir le nid</button>
                <button type="button" className="ghost">Appeler l'IA locale</button>
              </div>
            </article>

            <article className="guide-card">
              <h3>Recycler après l'envol</h3>
              <p>
                Quand un poème est exporté (image ou texte), il est dissous en 3 à 7 nouvelles
                bulles via <code>core/recycler.js</code> et réinjecté dans la bibliothèque locale.
              </p>
              <button type="button" className="ghost">Voir la boucle circulaire</button>
            </article>
          </div>
        </section>

        <section className="solo-notes" aria-label="Garanties solo-only">
          <div className="note-card">
            <h3>Sans réseau</h3>
            <p>
              Aucun WebRTC, aucune synchro, aucune API externe : le nid reste clos, tout reste
              sur l'appareil.
            </p>
          </div>
          <div className="note-card">
            <h3>LocalStorage</h3>
            <p>
              Bibliothèque et états sont persistés avec <code>localStorage</code>. La
              bibliothèque est vidée seulement sur action explicite.
            </p>
          </div>
          <div className="note-card">
            <h3>Recyclage poétique</h3>
            <p>
              Chaque partage déclenche une métamorphose : le poème final se défait en bulles qui
              servent de matière première aux prochaines œuvres.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
