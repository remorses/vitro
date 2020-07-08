"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _support = require('./support');
var _contsants = require('./contsants');


const command = {
    command: ['start', '*'],
    describe: 'Starts storyboards dev server',
    builder: (argv) => {
        argv.option('github-token', {
            type: 'string',
            default: '',
            required: false,
            description:
                'The github token to use for login, instead of using the browser',
        })
        return argv
    },
    handler: async (argv) => {
        console.log('starting the server')
        await startGokeServer(process.argv.slice(process.env.DEBUG ? 2 : 1)) // TODO this is brittle
    },
} // as CommandModule

exports. default = command

async function startGokeServer(a) {
    const command = _contsants.GOKE_START_COMMAND
    if (process.env.DEBUG) {
        console.log([...command, ...a])
    }
    const args = [...command.slice(1), ...a]
    return await _support.runCommand.call(void 0, {
        command: command[0],
        args,
        env: {
            WEB_UI_ASSETS: _contsants.WEB_UI_ASSETS,
        },
    }).catch((e) => {
        throw new Error('could not start goke server')
    })
}
