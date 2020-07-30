#!/usr/bin/env node
import yargs from 'yargs'
import startCommand from './start'
import newCommand from './new'
import buildCommand from './build'
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
    .command(withErrorHandling(startCommand))
    .command(withErrorHandling(newCommand))
    .command(withErrorHandling(buildCommand))
    // .demandCommand()
    .help('h').argv
