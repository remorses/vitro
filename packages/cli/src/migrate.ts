import { runMigrateCodemod } from '@vitro/codemod'
import { CommandModule } from 'yargs'


const command: CommandModule = {
    command: ['migrate <glob>'],
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
} // as CommandModule

export default command
