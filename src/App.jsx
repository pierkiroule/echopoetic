import React from 'react'
import Sky from './components/Sky'
import './styles/poetry.css'

// App principal — affiche `Sky` par défaut.
export default function App() {
  return (
    <div className="app-root">
      <div className="scene">
        <Sky />

        <main className="hero" aria-label="Présentation d'Échopoetic">
          <p className="eyebrow">Poésie résonante partagée</p>
          <h1>Échopoetic</h1>
          <p className="lede">
            Une toile immersive pour écouter le souffle du monde, écrire à plusieurs voix et
            laisser l'IA locale cueillir des images délicates.
          </p>

          <div className="cta-row">
            <button type="button" className="primary">Entrer dans l'atelier</button>
            <button type="button" className="ghost">Découvrir le manifeste</button>
          </div>

          <div className="pill-row" aria-hidden>
            <span>Local-first</span>
            <span>Audio-réactif</span>
            <span>Coécriture</span>
          </div>
        </main>

        <section className="dev-guide" aria-label="Poursuivre le développement">
          <h2>Comment poursuivre le dev ?</h2>
          <p className="dev-lede">
            Quelques repères rapides pour itérer sans perdre la tonalité immersive :
          </p>

          <div className="guide-grid">
            <article className="guide-card">
              <h3>Itérer sur la scène</h3>
              <p>Ajoute des motifs audio-réactifs dans <code>src/components/Sky.jsx</code> ou des shaders légers.</p>
              <button type="button" className="ghost">Voir les hooks audio</button>
            </article>

            <article className="guide-card">
              <h3>Brancher l'atelier</h3>
              <p>Connecte les CTA à ton flow (routing ou modale) via <code>App.jsx</code>.</p>
              <div className="guide-actions">
                <button type="button" className="primary">Lier l'atelier</button>
                <button type="button" className="ghost">Créer la modale</button>
              </div>
            </article>

            <article className="guide-card">
              <h3>Soigner l'accessibilité</h3>
              <p>Teste le contraste, ajoute des focus visibles et réduis les animations si besoin.</p>
              <button type="button" className="ghost">Checklist a11y</button>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}
