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
}) {
    return (config, options) => {
        const isWebpack5 = options.unstable_webpack5 || false

        const doNotTranspileRegexes = doNotTranspile.map(
            (x) =>
                globrex(x, {
                    filepath: true,
                    globstar: true,
                    extended: true,
                }).path.regex,
        )

        const loader = config.module.rules.find((x) => {
            return regexEqual(x.test, /\.(tsx|ts|js|mjs|jsx)$/)
        })

        const includes = generateIncludes(transpileModules)
        const excludes = [
            ...doNotTranspileRegexes,
            ...generateExcludes(transpileModules),
        ]

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

        // // Support CSS modules + global in node_modules
        // const nextCssLoaders = config.module.rules.find(
        //     (rule) => typeof rule.oneOf === 'object',
        // )

        // // .module.css
        // if (nextCssLoaders) {
        //     const nextCssLoader = nextCssLoaders.oneOf.find(
        //         (rule) =>
        //             rule.sideEffects === false &&
        //             regexEqual(rule.test, /\.module\.css$/),
        //     )

        //     const nextSassLoader = nextCssLoaders.oneOf.find(
        //         (rule) =>
        //             rule.sideEffects === false &&
        //             regexEqual(rule.test, /\.module\.(scss|sass)$/),
        //     )

        //     if (nextCssLoader) {
        //         nextCssLoader.issuer.or = nextCssLoader.issuer.and
        //             ? nextCssLoader.issuer.and.concat(includes)
        //             : includes
        //         nextCssLoader.issuer.not = excludes
        //         delete nextCssLoader.issuer.and
        //     }

        //     if (nextSassLoader) {
        //         nextSassLoader.issuer.or = nextSassLoader.issuer.and
        //             ? nextSassLoader.issuer.and.concat(includes)
        //             : includes
        //         nextSassLoader.issuer.not = excludes
        //         delete nextSassLoader.issuer.and
        //     }

        //     // Hack our way to disable errors on node_modules CSS modules
        //     const nextErrorCssModuleLoader = nextCssLoaders.oneOf.find(
        //         (rule) =>
        //             rule.use &&
        //             rule.use.loader === 'error-loader' &&
        //             rule.use.options &&
        //             (rule.use.options.reason ===
        //                 'CSS Modules \u001b[1mcannot\u001b[22m be imported from within \u001b[1mnode_modules\u001b[22m.\n' +
        //                     'Read more: https://err.sh/next.js/css-modules-npm' ||
        //                 rule.use.options.reason ===
        //                     'CSS Modules cannot be imported from within node_modules.\nRead more: https://err.sh/next.js/css-modules-npm'),
        //     )

        //     if (nextErrorCssModuleLoader) {
        //         nextErrorCssModuleLoader.exclude = includes
        //     }

        //     const nextErrorCssGlobalLoader = nextCssLoaders.oneOf.find(
        //         (rule) =>
        //             rule.use &&
        //             rule.use.loader === 'error-loader' &&
        //             rule.use.options &&
        //             (rule.use.options.reason ===
        //                 'Global CSS \u001b[1mcannot\u001b[22m be imported from within \u001b[1mnode_modules\u001b[22m.\n' +
        //                     'Read more: https://err.sh/next.js/css-npm' ||
        //                 rule.use.options.reason ===
        //                     'Global CSS cannot be imported from within node_modules.\nRead more: https://err.sh/next.js/css-npm'),
        //     )

        //     if (nextErrorCssGlobalLoader) {
        //         nextErrorCssGlobalLoader.exclude = includes
        //     }
        // }

        return config
    }
}
