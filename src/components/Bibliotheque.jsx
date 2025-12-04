import React, { useEffect, useMemo, useState } from 'react'
import { DEFAULT_STORAGE_KEY, readLibrary } from '../core/importer'

const MAX_SELECTION = 10

export default function Bibliotheque({ storageKey = DEFAULT_STORAGE_KEY, onPick }) {
  const [bubbles, setBubbles] = useState([])
  const [selectedIds, setSelectedIds] = useState([])

  useEffect(() => {
    setBubbles(readLibrary({ storageKey }))
  }, [storageKey])

  const pickedCount = selectedIds.length
  const canPickMore = pickedCount < MAX_SELECTION

  const availableBubbles = useMemo(() => bubbles || [], [bubbles])

  function handlePick(bubble) {
    if (!bubble || selectedIds.includes(bubble.id) || !canPickMore) return
    const updated = [...selectedIds, bubble.id]
    setSelectedIds(updated)
    if (onPick) {
      onPick(bubble, updated)
    }
  }

  return (
    <section className="bibliotheque" aria-label="Bibliothèque de bulles locales">
      <header className="bibliotheque-header">
        <div className="bibliotheque-title">
          <h2>Bibliothèque</h2>
          <p>
            Bulles locales · <strong>{pickedCount}</strong> sélectionnée{pickedCount > 1 ? 's' : ''} / {MAX_SELECTION}
          </p>
        </div>
      </header>

      <div className="bibliotheque-grid">
        {availableBubbles.map((bubble) => (
          <article key={bubble.id} className="bibliotheque-card">
            <div className="bibliotheque-fragment">
              <p>{bubble.fragment}</p>
              <span className="bibliotheque-tag">#{bubble.tag}</span>
            </div>
            <button
              type="button"
              className="bibliotheque-action"
              onClick={() => handlePick(bubble)}
              disabled={selectedIds.includes(bubble.id) || !canPickMore}
            >
              Cueillir
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
