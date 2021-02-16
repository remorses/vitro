// TODO on dev and init command cli asks to login, then redirects to the dashboard page to connect vercel and github, the dashboard main button is to import a repository to deploy its vitro app
// TODO deploy command,  if the user prefers to use the cli instead he can login in the cli and run deploy, it calls the API as a github hook would do, calls the vercel cli on the current vitro app path

import { runMigrateCodemod } from './index'
import yargs, { CommandModule } from 'yargs'

const storybookCommand: CommandModule = {
    command: ['storybook <glob>'],
    describe: 'Migrate from storybook to vitro',
    builder: (argv) => {
        argv.option('rename', {
            type: 'string',
            array: true,
            required: false,
            description:
                'rename files, for example --rename "\\.story\\.jsx:.vitro.jsx"',
        })
        argv.option('dry', {
            type: 'boolean',
            required: false,
            description: 'only show what files would be changed',
        })
        return argv
    },
    handler: async (argv: any) => {
        const glob = argv.glob
        if (!glob) {
            throw new Error('missing required positional argument glob')
        }
        await runMigrateCodemod({
            glob,
            renames: argv.rename || [],
            dryRun: argv.dry,
        })
    },
}

yargs
    .scriptName('vitro-codemod')
    .locale('en')
    .command(storybookCommand)
    .help('help', 'h').argv
