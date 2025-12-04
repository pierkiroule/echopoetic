import React from 'react'

// Petite bulle visuelle réutilisable.
export default function Bubble({ size = 20, style = {} }) {
  const s = { width: size, height: size, ...style }
  return <div className="bubble" style={s} />
}
