// Importeur local : découpe un texte externe en bulles et les place en localStorage.
// Solo-only : aucune diffusion réseau, bibliothèque strictement locale.

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
    console.warn('Impossible d\'écrire la bibliothèque locale', err)
  }
  return bubbles
}

function extractFragments(text) {
  if (!text || typeof text !== 'string') return []
  return text
    .split(/[\n\.\!\?;:,]+/g)
    .map((t) => t.trim())
    .filter(Boolean)
}

export function importText(rawText, { storageKey = DEFAULT_STORAGE_KEY } = {}) {
  const fragments = extractFragments(rawText)
  const existing = safeRead(storageKey)
  const merged = Array.from(new Set([...(existing || []), ...fragments]))
  return safeWrite(merged, storageKey)
}

export function clearLibrary({ storageKey = DEFAULT_STORAGE_KEY } = {}) {
  if (typeof localStorage === 'undefined') return []
  localStorage.removeItem(storageKey)
  return []
}

export { extractFragments, DEFAULT_STORAGE_KEY }

export default { importText, clearLibrary, extractFragments }
