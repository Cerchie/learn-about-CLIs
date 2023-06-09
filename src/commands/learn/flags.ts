import { Command, Flags } from '@oclif/core'
import * as inquirer from 'inquirer'
import * as chalk from 'chalk'

const prompt = inquirer.createPromptModule()

export default class LearnFlags extends Command {
    static description = 'explains what a flag is'

    static examples = [`A flag is...`]

    static flags = {
        name: Flags.string(),
    }

    async run(): Promise<void> {
        const { flags } = await this.parse(LearnFlags)
        this.log(`A command line flag modifies a command's behavior or output.`)
        this.log(
            `For example, ${chalk.green(
                'learn flags --help'
            )} changes the command behavior to show the help text.`
        )
        this.log(`Flags are optional.`)
        this.log(
            `You can run ${chalk.green(
                'learn flags --name=yourname'
            )} to see an example of how a flag can change output.`
        )
        if (flags.name)
            console.log(`Hello ${flags.name}! Hope you're finding this useful.`)
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
                        `A flag modifies a command. Learn more by running:  ${chalk.green(
                            'letsgo learn flags'
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
