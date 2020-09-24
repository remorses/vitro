import { VERBOSE } from './constants'
import { attempt, mapKeys } from 'lodash'
import path from 'path'
import { isError } from 'util'

export const debug = (...args) => {
    if (process.env.DEBUG) {
        console.error('[DEBUG]', ...args)
    }
}

export function resolve(p, opts?: { paths?: string[] }) {
    return path.dirname(
        require.resolve(path.join(p, 'package.json').toString(), opts),
    )
}

/**
 * Stolen from https://stackoverflow.com/questions/10776600/testing-for-equality-of-regular-expressions
 */
export const regexEqual = (x, y) => {
    return (
        x instanceof RegExp &&
        y instanceof RegExp &&
        x.source === y.source &&
        x.global === y.global &&
        x.ignoreCase === y.ignoreCase &&
        x.multiline === y.multiline
    )
}
