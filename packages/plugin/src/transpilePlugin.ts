
// forked from https://github.com/martpie/next-transpile-modules/blob/master/src/next-transpile-modules.js

import path from 'path'
import globrex from 'globrex'
import { regexEqual } from './support'

const PATH_DELIMITER = '[\\\\/]' // match 2 antislashes or one slash

const generateIncludes = (modules) => {
    if (!modules?.length) {
        return []
    }
    return [
        new RegExp(`(${modules.map(safePath).join('|')})$`),
        new RegExp(
            `(${modules
                .map(safePath)
                .join('|')})${PATH_DELIMITER}(?!.*node_modules)`,
        ),
    ]
}

const generateExcludes = (modules) => {
    if (!modules?.length) {
        return []
    }
    return [
        new RegExp(
            `node_modules${PATH_DELIMITER}(?!(${modules
                .map(safePath)
                .join('|')})(${PATH_DELIMITER}|$)(?!.*node_modules))`,
        ),
    ]
}

const safePath = (module) => module.split(/[\\\/]/g).join(PATH_DELIMITER)

export function transpilationPlugin({
    rootPath,
    doNotTranspile = [],
    transpileModules = [],
    isWebpack5 = false,
}) {
    const doNotTranspileRegexes = doNotTranspile.map(
        (x) =>
            globrex(x, {
                filepath: true,
                globstar: true,
                extended: true,
            }).path.regex,
    )
    const includes = generateIncludes(transpileModules)
    const excludes = [
        ...doNotTranspileRegexes,
        ...generateExcludes(transpileModules),
    ]
    return (nextConfig) => ({
        webpack: (config, options) => {
            const loader = config.module.rules.find((x) => {
                return regexEqual(x.test, /\.(tsx|ts|js|mjs|jsx)$/)
            })

            if (typeof loader.exclude === 'function') {
                const original = loader.exclude
                loader.exclude = (p) => {
                    if (excludes.some((r) => r.test(p))) {
                        return true
                    }
                    if (includes.some((r) => r.test(p))) {
                        return false
                    }
                    return /node_modules/.test(p)
                    // return original(p)
                }
            } else {
                throw new Error('unsupported next version, ' + loader.exclude)
            }

            // delete loader.include
            loader.include = [
                rootPath,
                ...loader.include,
                ...generateIncludes(transpileModules),
            ]

            const shouldBeInServerBundle = (ctx, req) => {
                return includes.find((include) =>
                    req.startsWith('.')
                        ? include.test(path.resolve(ctx, req))
                        : include.test(req),
                )
                req = req.startsWith('.') ? path.resolve(ctx, req) : req
                // if (excludes.some((r) => r.test(req))) {
                //     return false
                // }
                if (includes.find((include) => include.test(req))) {
                    return true
                }
                return false
            }
            // bundle transpiled stuff on server on server
            if (config.externals) {
                config.externals = config.externals.map((external) => {
                    if (typeof external !== 'function') return external

                    return isWebpack5
                        ? ({ context, request }, cb) => {
                              return shouldBeInServerBundle(context, request)
                                  ? cb()
                                  : external({ context, request }, cb)
                          }
                        : (ctx, req, cb) => {
                              return shouldBeInServerBundle(ctx, req)
                                  ? cb()
                                  : external(ctx, req, cb)
                          }
                })
            }

            // TODO symlinks that have folder different than the one in node_modules will never match
            config.resolve.symlinks = false
            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }
            return config
        },
        webpackDevMiddleware(config) {
            // Replace /node_modules/ by the new exclude RegExp (including the modules
            // that are going to be transpiled)
            // https://github.com/zeit/next.js/blob/815f2e91386a0cd046c63cbec06e4666cff85971/packages/next/server/hot-reloader.js#L335
            if (!transpileModules?.length) {
                if (typeof nextConfig.webpackDevMiddleware === 'function') {
                    return nextConfig.webpackDevMiddleware(config)
                }
                return config
            }

            const ignored = isWebpack5
                ? config.watchOptions.ignored.concat(transpileModules)
                : config.watchOptions.ignored
                      .filter(
                          (pattern) =>
                              !regexEqual(pattern, /[\\/]node_modules[\\/]/) &&
                              pattern !== '**/node_modules/**',
                      )
                      .concat(excludes)

            config.watchOptions.ignored = ignored

            if (typeof nextConfig.webpackDevMiddleware === 'function') {
                return nextConfig.webpackDevMiddleware(config)
            }

            return config
        },
    })
}
