import React from 'react'
import { MOODS } from '../core/moods'

// Sélecteur de mood minimal — renvoie un mood choisi.
export default function MoodSelector({ value, onChange }) {
  return (
    <label className="mood-selector">
      Mood:
      <select value={value} onChange={(e) => onChange && onChange(e.target.value)}>
        {MOODS.map((m) => (
          <option key={m.id} value={m.id}>
            {m.label}
          </option>
        ))}
      </select>
    </label>
  )
}
