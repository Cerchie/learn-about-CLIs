import { Command } from '@oclif/core'

export default class Start extends Command {
    static description = 'explains what a command is'

    static examples = [`A command is...`]

    async run(): Promise<void> {
        this.log(
            `A command executes some action, like sending JSON to an API, sending a password over a protocol, or registering a user selection. It can take in an argument, which is non-optional and positional, like 'commands' in 'learn commands'. Or it can take in an optional flag, like 'learn commands --help'.`
        )
    }
}
