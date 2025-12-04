import React, { useState } from 'react'
import { recyclePoem } from '../core/recycler'

// Le Nid Échopoétique — carnet vertical pour composer des poèmes.
// Reçoit des bulles sélectionnées et les transforme en lignes éditables.
export default function Nest({ selectedBubbles = [] }) {
  const [lines, setLines] = useState(
    selectedBubbles.map((b) => ({
      id: b.id,
      text: b.text || '',
      tag: b.tag || '',
    }))
  )
  const [exported, setExported] = useState(false)

  // Mettre à jour le texte d'une ligne
  const updateLine = (id, newText) => {
    setLines(lines.map((l) => (l.id === id ? { ...l, text: newText } : l)))
  }

  // Supprimer une ligne
  const removeLine = (id) => {
    setLines(lines.filter((l) => l.id !== id))
  }

  // Réordonner : déplacer vers le haut
  const moveUp = (idx) => {
    if (idx === 0) return
    const newLines = [...lines]
    ;[newLines[idx - 1], newLines[idx]] = [newLines[idx], newLines[idx - 1]]
    setLines(newLines)
  }

  // Réordonner : déplacer vers le bas
  const moveDown = (idx) => {
    if (idx === lines.length - 1) return
    const newLines = [...lines]
    ;[newLines[idx], newLines[idx + 1]] = [newLines[idx + 1], newLines[idx]]
    setLines(newLines)
  }

  // Exporter le poème
  const exportPoem = () => {
    const poemText = lines.map((l) => l.text).join('\n')
    if (!poemText.trim()) {
      alert('Ton Nid est vide. Ajoute quelques mots.')
      return
    }

    // Passer au moteur de recyclage
    const newBubbles = recyclePoem(poemText)
    console.log('Poème recyclé, nouvelles bulles:', newBubbles)

    // Réinitialiser
    setLines([])
    setExported(true)
    setTimeout(() => setExported(false), 2000)
  }

  return (
    <div className="nest-container">
      <h3 className="nest-title">Ton Nid — Collage de mots recyclés</h3>

      {exported && <p className="nest-feedback">✓ Poème archivé et recyclé.</p>}

      <div className="nest-lines">
        {lines.length === 0 && !exported && (
          <p className="nest-empty">Sélectionne des bulles pour commencer...</p>
        )}
        {lines.map((line, idx) => (
          <div key={line.id} className="nest-line">
            <div className="nest-controls">
              <button
                className="nest-btn nest-btn-up"
                onClick={() => moveUp(idx)}
                disabled={idx === 0}
                title="Monter"
              >
                ↑
              </button>
              <button
                className="nest-btn nest-btn-down"
                onClick={() => moveDown(idx)}
                disabled={idx === lines.length - 1}
                title="Descendre"
              >
                ↓
              </button>
            </div>
            <input
              type="text"
              className="nest-input"
              value={line.text}
              onChange={(e) => updateLine(line.id, e.target.value)}
              placeholder="Fragment poétique..."
            />
            <button
              className="nest-btn nest-btn-delete"
              onClick={() => removeLine(line.id)}
              title="Supprimer"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {lines.length > 0 && (
        <button className="nest-export-btn" onClick={exportPoem}>
          Exporter le poème
        </button>
      )}
    </div>
  )
}
