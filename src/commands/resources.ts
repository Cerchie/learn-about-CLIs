import { Command } from '@oclif/core'
import * as chalk from 'chalk'

export default class Start extends Command {
    static description = 'lists favorite resources'

    static examples = [`resources: `]

    async run(): Promise<void> {
        this.log(
            `resources: ${chalk.blue('https://clig.dev/')}, ${chalk.blue(
                'https://devcenter.heroku.com/articles/cli-style-guide'
            )}`
        )
    }
}
