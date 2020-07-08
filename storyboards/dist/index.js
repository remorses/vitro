"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _globbase = require('glob-base'); var _globbase2 = _interopRequireDefault(_globbase);
var _micromatch = require('micromatch');
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _fs = require('fs');

const isObject = (val) =>
    val != null && typeof val === 'object' && Array.isArray(val) === false

 const toRequireContext = (input) => {
    switch (true) {
        case typeof input === 'string': {
            const { base, glob } = _globbase2.default.call(void 0, input)
            const regex = _micromatch.makeRe.call(void 0, glob)
                .toString()
                // webpack prepends the relative path with './'
                .replace(/^\/\^/, '/^\\.\\/')
                .replace(/\?:\^/g, '?:')

            return {
                path: base,
                recursive: glob.startsWith('**'),
                match: regex,
            }
        }
        case isObject(input): {
            return input
        }

        default: {
            throw new Error(
                'the provided input cannot be transformed into a require.context',
            )
        }
    }
}; exports.toRequireContext = toRequireContext

 const toRequireContextString = (input) => {
    const { path: p, recursive: r, match: m } = exports.toRequireContext.call(void 0, input)
    return `require.context('${p}', ${r}, ${m})`
}; exports.toRequireContextString = toRequireContextString

 async function aliasOfPackages(packages) {
    return Object.assign(
        {},
        await Promise.all(
            packages.map(async (p) => {
                const pkgPath = _path2.default.resolve(
                    __dirname,
                    '.',
                    'node_modules',
                    'react',
                )
                if (await exists(pkgPath)) {
                    return {
                        [p]: pkgPath,
                    }
                }
                return {}
            }),
        ),
    )
} exports.aliasOfPackages = aliasOfPackages;

async function exists(p) {
    try {
        await _fs.promises.access(p)
        return true
    } catch (e) {}
    return false
}
