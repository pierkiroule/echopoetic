// Recycle un poème final en nouvelles "bulles" locales.
// Pas de réseau : tout reste sur l'appareil et nourrit la bibliothèque locale.

import { createBubble, fragmentizeText } from './bubbles'
import { appendBubbles, DEFAULT_STORAGE_KEY } from './importer'

function limitFragments(pool, { min = 3, max = 7 } = {}) {
  if (!Array.isArray(pool)) return []
  let limited = pool.filter(Boolean)

  if (limited.length > max) {
    limited = limited.slice(0, max)
  }

  if (limited.length < min && limited.length > 0) {
    let i = 0
    while (limited.length < min) {
      limited.push(limited[i % limited.length])
      i += 1
    }
  }

  return limited
}

export function recyclePoem(poem, { min = 3, max = 7, storageKey = DEFAULT_STORAGE_KEY } = {}) {
  const fragments = fragmentizeText(poem, { minWords: 3, maxWords: 6 })
  const pool = limitFragments(fragments, { min, max })

  const bubbles = pool
    .map((frag) => createBubble(frag, { source: 'recyclage' }))
    .filter(Boolean)

  appendBubbles(bubbles, { storageKey, source: 'recyclage' })
  return bubbles
}

export default { recyclePoem }
