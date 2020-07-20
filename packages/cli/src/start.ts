import { runCommand, printGreen, printRed } from './support'
import path from 'path'
import { NEXT_APP_PATH, CMD } from './contsants'
import { CommandModule } from 'yargs'
import { existsSync } from 'fs-extra'

const command: CommandModule = {
    command: ['start', '*'],
    describe: 'Starts vitro dev server',
    builder: (argv) => {
        argv.option('port', {
            alias: 'p',
            type: 'string',
            default: '7007',
            required: false,
            description: 'The port for the dev server',
        })
        return argv
    },
    handler: async (argv) => {
        console.log('starting the server')
        await start({ port: argv.port, verbose: Boolean(argv.verbose) })
    },
} // as CommandModule

export default command

async function start({ port, verbose }) {
    if (!existsSync(NEXT_APP_PATH)) {
        printRed(
            `There is no ${NEXT_APP_PATH} folder, you probably need to run '${CMD} new' first`,
            true,
        )
        return process.exit(1)
    }
    return await runCommand({
        command: `yarn next dev -p ${port} ${path.resolve('.', NEXT_APP_PATH)}`,
        env: verbose
            ? {
                  VERBOSE: 'true',
              }
            : {},
        // cwd: path.resolve('.', NEXT_APP_PATH),
    }).catch((e) => {
        throw new Error(`could not start ${CMD}`)
    })
}
