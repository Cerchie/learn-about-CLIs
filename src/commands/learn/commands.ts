import { Command } from '@oclif/core'
import * as inquirer from 'inquirer'
import * as chalk from 'chalk'

const prompt = inquirer.createPromptModule()

export default class Commands extends Command {
    static description = 'explains what a command is'

    static examples = [`A command is...`]

    async run(): Promise<void> {
        this.log(
            `A command executes some action, like sending JSON to an API, sending a password over a protocol, or registering a user selection.`
        )
        this.log(
            `It can take in an argument, which is non-optional and positional, like ${chalk.green(
                'commands'
            )} in  ${chalk.green('learn commands')}.`
        )
        this.log(
            `Or it can take in an optional flag, like ${chalk.green(
                'letsgo learn commands --help'
            )}.`
        )

        prompt([
            {
                name: 'nextStep',
                message: 'select a next step',
                type: 'list',
                choices: [
                    { name: 'args' },
                    { name: 'flags' },
                    { name: 'exit' },
                ],
            },
        ]).then((answers) => {
            switch (answers.nextStep) {
                case 'args': {
                    this.log(
                        `An argument is a command's parameter. Learn more by running: ${chalk.green(
                            'letsgo learn args'
                        )}`
                    )
                    break
                }
                case 'flags': {
                    this.log(
                        `A flag modifies a command. Learn more by running: ${chalk.green(
                            'letsgo learn args'
                        )}`
                    )
                    break
                }
                case 'exit': {
                }
            }
        })
    }
}
