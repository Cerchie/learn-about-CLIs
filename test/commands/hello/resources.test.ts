import { expect, test } from '@oclif/test'

describe('resources', () => {
    test.stdout()
        .command(['start'])
        .it('returns resources', (ctx) => {
            expect(ctx.stdout).to.contain('https://clig.dev/')
        })
})
