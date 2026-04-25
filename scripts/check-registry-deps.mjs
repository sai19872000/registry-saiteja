#!/usr/bin/env node
// Walks registry.json and asserts every registryDependency slug resolves to
// another item in the same index. Exits non-zero on any miss.
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const registry = JSON.parse(readFileSync(join(__dir, '..', 'registry.json'), 'utf8'))

const knownSlugs = new Set(registry.items.map((item) => item.name))
let errors = 0

for (const item of registry.items) {
  for (const dep of item.registryDependencies ?? []) {
    if (!knownSlugs.has(dep)) {
      console.error(`ERROR: "${item.name}" has unresolvable registryDependency "${dep}"`)
      errors++
    }
  }
}

if (errors > 0) {
  console.error(`\n${errors} unresolvable registryDependenc${errors === 1 ? 'y' : 'ies'} found.`)
  process.exit(1)
}

console.log(`✓ All registryDependencies resolve (${registry.items.length} items checked).`)
