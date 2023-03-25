import { expect, test } from '@oclif/test'

describe('commands', () => {
    test.stdout()
        .command(['learn commands'])
        .it('returns text on a command', (ctx) => {
            expect(ctx.stdout).to.contain('A command executes some action')
        })
})
