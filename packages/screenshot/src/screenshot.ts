import { bfs } from '@vitro/cli/dist/plugin'
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
    onScreenshot = ({ path }) => {},
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
                const targetFile = path.resolve(
                    targetFolder,
                    node.path || '',
                    name + '.jpg',
                )
                await element.screenshot({
                    path: targetFile,
                })
                if (onScreenshot) {
                    await onScreenshot({ path: targetFile })
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

/**
 *
 * 1. screenshot each page, following the tree, opening N tabs to do it concurrently
 * 2. Name every screenshot with the story location + the story export name
 * 2. Upload the screenshots to an s3 bucket, on a folder connected to the commit ref or time
 * 2. Upload a json file with the file tree, this way i won't need to do a glob match
 * 3. Download the previous screenshots, download them in a tmp folder
 * 3. for every image found in previous version, get the same relative path but in the new screenshots folder
 * 4. Execute the pixel by pixel comparison on each shot
 * 5. If the image has changes, upload those to S3 and print their urls
 * 6. Add a message on the PR with the changed files urls
 *
 *
 * commands are
 * - screenshot, do the screenshots and save them in a folder, returns the folder
 * - compare --to --from, uses the git ref to find current folder, download from bucket the previous version
 *
 *
 * The bucket will have a top level directory with name vitro-screenshots that will contain all the images
 */
