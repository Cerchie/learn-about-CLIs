import { expect, test } from '@oclif/test'

describe('commands', () => {
    test.stdout()
        .command(['learn commands'])
        .it('returns text on a command', (ctx) => {
            expect(ctx.stdout).to.contain('A command executes some action')
        })
})

describe('args', () => {
    test.stdout()
        .command(['learn args'])
        .it('returns text on args', (ctx) => {
            expect(ctx.stdout).to.contain(
                'A command line argument directs a command '
            )
        })
})

describe('flags', () => {
    test.stdout()
        .command(['learn flags'])
        .it('returns text on flags', (ctx) => {
            expect(ctx.stdout).to.contain('A command line flag modifies')
        })
})
