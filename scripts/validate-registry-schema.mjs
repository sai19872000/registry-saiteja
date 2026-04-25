#!/usr/bin/env node
// Validates all public/r/*.json files against schemas/registry.json.
// Uses AJV v8 with draft-07 meta-schema awareness.
// Exit non-zero if any file fails validation.
import { readFileSync, readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import Ajv from 'ajv'

const __dir = dirname(fileURLToPath(import.meta.url))
const root = join(__dir, '..')

// Load the cached shadcn registry schemas; strip $schema refs so AJV doesn't
// try to resolve draft-07 meta-schema URLs (not supported in AJV v8 core).
const rawSchema = JSON.parse(readFileSync(join(root, 'schemas', 'registry.json'), 'utf8'))
const { $schema: _drop1, ...schema } = rawSchema

const rawItemSchema = JSON.parse(readFileSync(join(root, 'schemas', 'registry-item.json'), 'utf8'))
const { $schema: _drop2, ...itemSchema } = rawItemSchema

const ajv = new Ajv({ strict: false, allErrors: true })
// Add item schema first under the URI the main schema's $ref expects.
ajv.addSchema(itemSchema, 'https://ui.shadcn.com/schema/registry-item.json')
const validateIndex = ajv.compile(schema)
const validateItem = ajv.getSchema('https://ui.shadcn.com/schema/registry-item.json')

const dir = join(root, 'public', 'r')
const files = readdirSync(dir).filter((f) => f.endsWith('.json'))

let errors = 0
for (const file of files) {
  const data = JSON.parse(readFileSync(join(dir, file), 'utf8'))
  // registry.json is the index; all others are per-item files.
  const validate = file === 'registry.json' ? validateIndex : validateItem
  const valid = validate(data)
  if (!valid) {
    console.error(`FAIL ${file}`)
    for (const err of validate.errors ?? []) {
      console.error(`  ${err.instancePath} ${err.message}`)
    }
    errors++
  } else {
    console.log(`OK   ${file}`)
  }
}

if (errors > 0) {
  console.error(`\n${errors} file(s) failed schema validation.`)
  process.exit(1)
}
console.log(`\n✓ All ${files.length} registry JSON files pass schema validation.`)
