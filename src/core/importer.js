// Importeur local : découpe un texte externe en bulles et les place en localStorage.
// Solo-only : aucune diffusion réseau, bibliothèque strictement locale.

import { createBubble, fragmentizeText } from './bubbles'

const DEFAULT_STORAGE_KEY = 'echopoetic.bubbles'

function safeRead(key = DEFAULT_STORAGE_KEY) {
  if (typeof localStorage === 'undefined') return []
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : []
  } catch (err) {
    console.warn('Impossible de lire la bibliothèque locale', err)
    return []
  }
}

function safeWrite(bubbles, key = DEFAULT_STORAGE_KEY) {
  if (typeof localStorage === 'undefined') return bubbles
  try {
    localStorage.setItem(key, JSON.stringify(bubbles))
  } catch (err) {
    console.warn("Impossible d'écrire la bibliothèque locale", err)
  }
  return bubbles
}

function normalizeBubble(input, { source = 'import' } = {}) {
  if (!input) return null
  if (typeof input === 'string') {
    return createBubble(input, { source })
  }

  const { fragment, tag, id, createdAt, source: existingSource } = input || {}
  if (!fragment) return null

  const fallback = createBubble(fragment, { source })

  return {
    id: id || fallback?.id,
    fragment: String(fragment).trim(),
    tag: tag || fallback?.tag,
    createdAt: createdAt || Date.now(),
    source: existingSource || source,
  }
}

function normalizeLibrary(list, { source = 'import' } = {}) {
  return (list || [])
    .map((item) => normalizeBubble(item, { source }))
    .filter((b) => b && b.fragment)
}

function extractFragments(text) {
  return fragmentizeText(text, { minWords: 3, maxWords: 6 })
}

function appendBubbles(newBubbles, { storageKey = DEFAULT_STORAGE_KEY, source = 'import' } = {}) {
  const existing = normalizeLibrary(safeRead(storageKey), { source })
  const incoming = normalizeLibrary(newBubbles, { source })
  return safeWrite([...(existing || []), ...(incoming || [])], storageKey)
}

export function importText(rawText, { storageKey = DEFAULT_STORAGE_KEY } = {}) {
  const fragments = extractFragments(rawText)
  const bubbles = fragments
    .map((frag) => createBubble(frag, { source: 'import' }))
    .filter(Boolean)

  return appendBubbles(bubbles, { storageKey, source: 'import' })
}

export function clearLibrary({ storageKey = DEFAULT_STORAGE_KEY } = {}) {
  if (typeof localStorage === 'undefined') return []
  localStorage.removeItem(storageKey)
  return []
}

export function readLibrary({ storageKey = DEFAULT_STORAGE_KEY, source = 'import' } = {}) {
  return normalizeLibrary(safeRead(storageKey), { source })
}

export { extractFragments, DEFAULT_STORAGE_KEY, appendBubbles }

export default { importText, clearLibrary, extractFragments, readLibrary, appendBubbles }
