import { GeneratorUtils } from '@slowpoison/async-utils'
import { describe, it } from 'mocha'

// Only used for compilation against index.d.ts. No assertions needed.
describe('GeneratorUtils', () => {
  it('should compile under Typescript', () => {
    let lines = [ 1, 2, 3 ]
    GeneratorUtils.filter(lines[Symbol.iterator](), line => line > 1)
  })
})
