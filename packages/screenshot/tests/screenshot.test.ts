// import { generateModulesMap } from '../src/stories'
import path from 'path'
import http, { Server } from 'http'
import { screenshot, staticServer, compare } from '../src/screenshot'
import { buildHandler } from '@vitro/cli/dist/build'
import { once } from 'events'

describe('screenshot', () => {
    const port = 8070
    const out = path.resolve('out')
    const baseUrl = `http://localhost:${port}`
    const targetFolder = path.resolve(__dirname, '../../../screenshots')
    let server: Server
    before(async () => {
        await buildHandler({
            out,
            cwd: path.resolve(__dirname, '../../../examples'),
        })
        await staticServer({ port, root: out })
    })

    after(() => {
        server && server.close()
    })
    it('works', async () => {
        await screenshot({ baseUrl, targetFolder })
    })
    it('compare', async () => {
        const folderA = targetFolder
        const folderB = targetFolder + '2'
        await compare({ folderA, folderB })
    })
})
