#!/usr/bin/env node
"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yargs = require('yargs'); var _yargs2 = _interopRequireDefault(_yargs);
var _start = require('./start'); var _start2 = _interopRequireDefault(_start);
var _support = require('./support');

_yargs2.default
    .option('file', {
        type: 'string',
        alias: 'f',
        default: 'docker-compose.yml',
    })
    .option('verbose', {
        alias: 'v',
        type: 'boolean',
        default: false,
    })
    .option('env-file', {
        type: 'string',
        default: '.env',
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
    .command(_support.withErrorHandling.call(void 0, _start2.default))
    // .demandCommand()
    .help('h').argv
