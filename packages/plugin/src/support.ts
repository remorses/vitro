
import { attempt, mapKeys } from 'lodash'
import path from 'path'
import dedent from 'dedent'
import { isError } from 'util'

export const debug = (...args) => {
    if (process.env.DEBUG) {
        console.error('[DEBUG]', ...args)
    }
}

export function isWithin(outer, inner) {
    const rel = path.relative(outer, inner)
    return !rel.startsWith('../') && rel !== '..'
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
export function removeExtension(f: string) {
    const parsed = path.parse(f)
    const p = {
        ...parsed,
        base: parsed.name,
    }
    return path.format(p)
}

export function dedentTo(to: string, code: string) {
    return dedent(code)
        .split('\n')
        .map((x) => to + x)
        .join('\n')
}
