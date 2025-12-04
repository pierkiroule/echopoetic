// Recycle un poème final en nouvelles "bulles" locales.
// Pas de réseau : tout est pensé pour rester sur l'appareil et nourrir la bibliothèque locale.

function splitIntoFragments(text) {
  const raw = String(text || '')
  if (!raw.trim()) return []

  const primary = raw.split(/[\n\.\!\?;:]+/g)
  const fragments = []

  primary.forEach((part) => {
    part
      .split(/[,]+/g)
      .map((p) => p.trim())
      .filter(Boolean)
      .forEach((p) => fragments.push(p))
  })

  return fragments
}

function chunkByWords(text, minWords = 5, maxWords = 9) {
  const words = String(text || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  const chunks = []
  let i = 0

  while (i < words.length) {
    const remaining = words.length - i
    const chunkSize = Math.min(maxWords, Math.max(minWords, Math.ceil(remaining / Math.ceil(remaining / maxWords))))
    chunks.push(words.slice(i, i + chunkSize).join(' '))
    i += chunkSize
  }

  return chunks
}

export function recyclePoem(poem, { min = 3, max = 7 } = {}) {
  const baseFragments = splitIntoFragments(poem)
  let pool = baseFragments.flatMap((frag) => {
    const wordCount = frag.split(/\s+/).filter(Boolean).length
    return wordCount > 14 ? chunkByWords(frag, 6, 10) : [frag]
  })

  // Si pas assez de fragments, on découpe progressivement les plus longs.
  while (pool.length < min && pool.length > 0) {
    const target = pool.shift()
    const pieces = chunkByWords(target, 4, 8)
    pool.push(...pieces)
  }

  if (pool.length > max) {
    pool = pool.slice(0, max)
  }

  return pool
}

export default { recyclePoem }
