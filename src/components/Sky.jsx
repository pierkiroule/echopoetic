import React from 'react'

// Ciel animé minimaliste — animation réalisée par CSS keyframes.
// Pas de logique audio ici, juste l'architecture du composant.
export default function Sky() {
  // On crée quelques "bulles" visuelles pour la profondeur.
  const bubbles = new Array(8).fill(0)

  return (
    <section className="sky" aria-label="Ciel poétique animé">
      <div className="sky-gradient" />
      <div className="stars" />
      <div className="bubble-layer">
        {bubbles.map((_, i) => (
          <div key={i} className="bubble" style={{ '--i': i }} />
        ))}
      </div>
    </section>
  )
}
