import { Command } from '@oclif/core'
import * as inquirer from 'inquirer'

const prompt = inquirer.createPromptModule()

export default class Args extends Command {
    static description = 'explains what an arg is'

    static examples = [`An arg is...`]

    async run(): Promise<void> {
        this.log(
            `A command line argument directs a command line program to perform something specific, for example: 'letsgo learn args', where 'args' is the argument.`
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
                        `An argument is a command's parameter. Learn more by running: letsgo learn args`
                    )
                    break
                }
                case 'flags': {
                    this.log(
                        `A flag modifies a command. Learn more by running: letsgo learn flags`
                    )
                    break
                }
                case 'exit': {
                }
            }
        })
    }
}
