import { batchedPromiseAll } from 'batched-promise-all'
import dify from 'dify-bin'
import { once } from 'events'
import fs from 'fs-extra'
import http from 'http'
import os from 'os'
import path from 'path'
import playwright, { Browser, ElementHandle } from 'playwright'
import { glob } from 'smart-glob'
import * as uuid from 'uuid'

export async function screenshot({
    targetFolder = '',
    baseUrl,
    browserType = 'chromium',
    onScreenshot = ({ path, relativePath }) => {},
}) {
    if (targetFolder) {
        targetFolder = path.resolve(targetFolder)
        await fs.ensureDir(targetFolder)
    } else {
        targetFolder = getGitRef()
        targetFolder = path.resolve(
            await fs.mkdtemp(path.join(os.tmpdir(), targetFolder)),
        )
    }

    const browser: Browser = await playwright[browserType].launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto(baseUrl)
    const tree = await page.evaluate(() => {
        return window['VITRO_TREE'] || {}
    })
    if (!Object.keys(tree).length) {
        return
    }
    // console.log(JSON.stringify(tree, null, 4))
    const stories = bfs(tree)
    for (let [i, node] of stories.entries()) {
        await page.evaluate((url) => {
            const history = window['VITRO_HISTORY']
            if (history) {
                history.push(url)
            } else {
                throw new Error(`cannot find history object`)
            }
        }, node.url)
        await page.waitForTimeout(300) // TODO emit an event for react that finishes rendering
        // await page.screenshot({ path: i + 'page.png' })
        const elements = await page.$$(`.${'__vitro-block'}`)
        if (!elements.length) {
            console.error(`Could not find stories for '${node.path}'`)
        }
        // console.log({ elements })
        const screenshots: string[] = []
        await batchedPromiseAll(
            elements,
            async function screen(element) {
                const name = await generateScreenshotName(element)
                if (!name) {
                    console.error(`cannot find name for element`)
                }
                const relativePath = path.join(node.path || '', name + '.jpg')
                const targetFile = path.resolve(targetFolder, relativePath)
                await fs.createFile(targetFile)
                await element.screenshot({
                    path: targetFile,
                })
                if (onScreenshot) {
                    await onScreenshot({ path: targetFile, relativePath })
                }
                screenshots.push(targetFile)
            },
            os.cpus().length * 2,
        )
    }
    // await compare({ folderA: targetFolder, folderB: targetFolder })
    await browser.close()
}

async function generateScreenshotName(element: ElementHandle<any>) {
    const exportName = await element.getAttribute('data-vitro-export-name')
    return exportName || ''
}

function getGitRef() {
    return require('child_process')
        .execSync('git rev-parse HEAD')
        .toString()
        .trim()
}

// import { generateModulesMap } from '../src/stories'

export async function staticServer({ root, port }) {
    var serveStatic = require('serve-static')

    // Serve up public/ftp folder
    var serve = serveStatic(root, {
        index: ['index.html', 'index.htm'],
    })
    var finalhandler = require('finalhandler')

    // Create server
    let server = http.createServer(function onRequest(req, res) {
        serve(req, res, finalhandler(req, res))
    })

    // Listen
    server = server.listen(port)
    await once(server, 'listening')
    return server
}

export function asyncDiff({ a, b, output }) {
    return new Promise((resolve, reject) => {
        dify([`--output`, output, a, b], (err, out) => {
            if (err) {
                // TODO if diff is generated error is thrown
            }
            resolve(out?.stdout)
        })
    })
}

export async function compare({ folderA, folderB, targetFolder = '' }) {
    targetFolder = targetFolder || os.tmpdir()
    const filesA = await glob(path.posix.join(folderA, '**'), {
        absolute: true,
    })
    const result = await batchedPromiseAll(
        filesA,
        async (fileA) => {
            const relative = path.relative(folderA, fileA)
            const fileB = path.resolve(folderB, relative)
            if (!fs.existsSync(fileB)) {
                return
            }
            const output = path.resolve(targetFolder, uuid.v4() + '.png')
            // await fs.createFile(output)
            const result = await asyncDiff({ a: fileA, b: fileB, output })
            if (!fs.existsSync(output)) {
                return
            }
            console.log(output)
            return result
        },
        os.cpus().length,
    )
    return result.filter(Boolean)
}

// TODO how to share this type?
export interface ExperimentsTree {
    path?: string
    name?: string
    children?: ExperimentsTree[]
    url?: string
    title?: string
    // meta?: Record<string, any>
}

export function bfs(tree: ExperimentsTree): ExperimentsTree[] {
    const results = []
    // tree.depth = 0
    var queue = [tree]
    var n: ExperimentsTree

    while (queue.length > 0) {
        n = queue.shift()
        results.push(n)

        if (!n.children) {
            continue
        }
        for (var i = 0; i < n.children.length; i++) {
            const child = n.children[i]
            // child.depth = (n.depth || 0) + 1
            queue.push(child)
        }
    }
    return results
}
