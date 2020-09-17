#!/usr/bin/env node
import yargs from 'yargs'
import devCommand from './dev'
import initCommand from './init'
import buildCommand from './build'
import migrateCommand from './migrate'
import { withErrorHandling } from './support'

yargs
    .option('verbose', {
        alias: 'v',
        type: 'boolean',
        default: false,
    })
    // .middleware([
    //     (argv) => {
    //         if (argv.verbose) {
    //             winston.configure({
    //                 ...winstonConf,
    //                 level: 'debug',
    //             })
    //             return
    //         }
    //         winston.configure({ ...winstonConf, silent: true, level: 'error' })
    //     },
    // ])
    .command(withErrorHandling(devCommand))
    .command(withErrorHandling(initCommand))
    .command(withErrorHandling(buildCommand))
    .command(withErrorHandling(migrateCommand))
    // .demandCommand()
    .help('h').help('help').argv



// TODO on dev and init command cli asks to login, then redirects to the dashboard page to connect vercel and github, the dashboard main button is to import a repository to deploy its vitro app 
// TODO deploy command,  if the user prefers to use the cli instead he can login in the cli and run deploy, it calls the API as a github hook would do, calls the vercel cli on the current vitro app path