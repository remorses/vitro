import Koa from 'koa'
import staticServe from 'koa-static'
import path from 'path'
import slash from 'slash'
import { TraversalResultType } from 'es-module-traversal'

export async function timedRun(func) {
    const start = process.hrtime.bigint()
    await func()
    const end = process.hrtime.bigint()
    return Math.round(Number(end - start) / 1e6)
}

export function osAgnosticResult(x: TraversalResultType): TraversalResultType {
    let { importPath, importer, resolvedImportPath } = x
    if (!isUrl(resolvedImportPath)) {
        resolvedImportPath = normalizePath(resolvedImportPath)
    }
    if (!isUrl(importer)) {
        importer = normalizePath(importer)
    }
    return {
        importPath,
        importer,
        resolvedImportPath,
    }
}

function normalizePath(filePath: string) {
    filePath = path.relative(process.cwd(), filePath)
    filePath = slash(filePath)
    return filePath
}

export function isUrl(str: string) {
    return str && str.startsWith('http://') || str.startsWith('https://')
}