import { expect, test } from '@oclif/test'

describe('start', () => {
    test.stdout()
        .command(['start'])
        .it('runs start cmd', (ctx) => {
            expect(ctx.stdout).to.contain(
                'Welcome to this interactive tour of how CLIs work! Run --help to see all the commands.'
            )
        })
})
