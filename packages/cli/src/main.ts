#!/usr/bin/env node
import yargs from 'yargs'
import devCommand from './dev'
import initCommand from './init'

import migrateCommand from './migrate'
import { withErrorHandling } from './support'

yargs
    .option('verbose', {
        alias: 'v',
        type: 'boolean',
        default: false,
    })
    .option('filter', {
        alias: 'f',
        type: 'string',
        description: 'Only build experiments inside the specified path',
        array: true,
    })
    .command(withErrorHandling(initCommand))
    // .command(withErrorHandling(buildCommand))
    .command(withErrorHandling(migrateCommand))
    // .demandCommand()
    .command(withErrorHandling(devCommand))
    .help('help').argv

// TODO on dev and init command cli asks to login, then redirects to the dashboard page to connect vercel and github, the dashboard main button is to import a repository to deploy its vitro app
// TODO deploy command,  if the user prefers to use the cli instead he can login in the cli and run deploy, it calls the API as a github hook would do, calls the vercel cli on the current vitro app path


// the dev command becomes a wrapper around vite serve command, passing the configuration as an object and setting root to vite.config.js directory, the vite config is found with find-up and passed to the vite vitro plugin constructor with the filter options based on current cwd
// the build command is wrapper for vite too
// same for export