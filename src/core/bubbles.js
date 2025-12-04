const THEME_TAGS = [
  'brume',
  'minéral',
  'feuille',
  'mémoire',
  'ombre',
  'eau',
  'nuit',
  'oiseau',
]

function generateId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `bubble-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function randomTag(tags = THEME_TAGS) {
  if (!Array.isArray(tags) || tags.length === 0) return 'brume'
  const idx = Math.floor(Math.random() * tags.length)
  return tags[idx]
}

function splitSentences(text) {
  return String(text || '')
    .split(/[\n\.\!\?;:]+/g)
    .map((t) => t.trim())
    .filter(Boolean)
}

function chunkWords(sentence, minWords = 3, maxWords = 6) {
  const words = String(sentence || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  const fragments = []
  let i = 0

  while (i < words.length) {
    const remaining = words.length - i

    if (remaining < minWords) {
      if (fragments.length) {
        const lastWords = fragments[fragments.length - 1].split(/\s+/)
        if (lastWords.length + remaining <= maxWords) {
          fragments[fragments.length - 1] = [...lastWords, ...words.slice(i)].join(' ')
        }
      }
      break
    }

    let size = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords
    size = Math.min(size, remaining)

    if (remaining - size === 1 && size > minWords) {
      size -= 1
    }

    const chunk = words.slice(i, i + size)
    fragments.push(chunk.join(' '))
    i += size
  }

  return fragments.filter((frag) => {
    const count = frag.split(/\s+/).filter(Boolean).length
    return count >= minWords && count <= maxWords
  })
}

function fragmentizeText(text, { minWords = 3, maxWords = 6 } = {}) {
  return splitSentences(text).flatMap((sentence) => chunkWords(sentence, minWords, maxWords))
}

function createBubble(fragment, { source = 'import', tagList = THEME_TAGS } = {}) {
  const clean = String(fragment || '').trim()
  if (!clean) return null
  return {
    id: generateId(),
    fragment: clean,
    tag: randomTag(tagList),
    createdAt: Date.now(),
    source,
  }
}

export { THEME_TAGS, fragmentizeText, createBubble, randomTag, generateId }
export default { THEME_TAGS, fragmentizeText, createBubble, randomTag, generateId }
