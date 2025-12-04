import React from 'react'

export default function Home() {
  return (
    <main className="home" aria-label="Accueil du Nid Échopoétique">
      <p className="home-eyebrow">Solo-first · Hors réseau · LocalStorage</p>
      <h1 className="home-title">Le Nid Échopoétique</h1>
      <p className="home-subtitle">Coller · Assembler · Réécrire · Envoler · Recycler</p>

      <div className="home-actions">
        <button type="button" className="home-btn primary">Entrer dans le nid</button>
        <button type="button" className="home-btn ghost">Ouvrir la bibliothèque</button>
      </div>
    </main>
  )
}
