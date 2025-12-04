// Moteur minimal de tags --- utilitaire léger pour associer des mots-clés.
// Ici on fournit des fonctions très simples; le moteur pourra être complexifié.

export function extractTags(text) {
  if (!text || typeof text !== 'string') return []
  // séparation simple par espaces, suppression de petits mots
  return text
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.replace(/[^\p{L}0-9]/gu, ''))
    .filter((w) => w.length > 3)
}

export function mergeTags(listA, listB) {
  const set = new Set([...(listA || []), ...(listB || [])])
  return Array.from(set)
}

export default { extractTags, mergeTags }
