import { GeneratorUtils } from '@slowpoison/async-utils'
import { describe, it } from 'mocha'

// Only used for compilation against index.d.ts. No assertions needed.
describe('GeneratorUtils', () => {
  it('should be defined', () => {
    let lines = [ 1, 2, 3 ]
    GeneratorUtils.filter(lines, (line) => line > 1)
  })
})