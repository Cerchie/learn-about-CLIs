import { Command, Flags, ux } from '@oclif/core'
import * as inquirer from 'inquirer'

const prompt = inquirer.createPromptModule()

export default class Start extends Command {
    static description = 'start'

    static examples = [
        `Welcome to this interactive tour of CLI best practices! Let's get started.`,
    ]

    static args = {}

    async run(): Promise<void> {
        this.log(
            'Welcome to this interactive tour of how CLIs work! Run --help to see all the commands.'
        )
        prompt([
            {
                name: 'startingPoint',
                message: 'select a starting point',
                type: 'list',
                choices: [
                    { name: 'commands' },
                    { name: 'args' },
                    { name: 'flags' },
                    { name: 'exit' },
                ],
            },
        ]).then((answers) => {
            switch (answers.startingPoint) {
                case 'commands': {
                    this.log(
                        'A command executes some action. Run this command to learn more: letsgo learn commands'
                    )
                    break
                }
                case 'args': {
                    this.log(
                        "An argument is a command's parameter. Run this command to learn more: letsgo learn args"
                    )
                    break
                }
                case 'flags': {
                    this.log(
                        'A flag modifies a command. Run this command to learn more: letsgo learn flags'
                    )
                    break
                }
                case 'exit': {
                }
            }
        })
    }
}
