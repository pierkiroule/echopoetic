// Stub d'un LLM local minimal — simule une génération asynchrone.
// L'idée: remplacer par une intégration réelle local-first plus tard.

export async function generatePoetry(prompt, opts = {}) {
  // Simulation asynchrone pour imiter latence d'un modèle local.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`~ écho: "${String(prompt).slice(0, 120)}" — (génération locale simulée)`)
    }, opts.delay || 250)
  })
}

export default { generatePoetry }
