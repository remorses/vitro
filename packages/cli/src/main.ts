#!/usr/bin/env node
import yargs from 'yargs'
import devCommand from './dev'
import initCommand from './init'
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
    .command(withErrorHandling(devCommand))
    .command(withErrorHandling(initCommand))
    .command(withErrorHandling(buildCommand))
    // .demandCommand()
    .help('h').argv
