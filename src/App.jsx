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
      </div>
    </div>
  )
}
