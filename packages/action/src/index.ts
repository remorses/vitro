import { screenshot, staticServer, compare } from '@vitro/screenshot'
import admin from 'firebase-admin'

var serviceAccount = require('../serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})
// import { generateModulesMap } from '../src/stories'
import { Server } from 'http'
import path from 'path'
import { buildHandler } from '@vitro/cli/dist/build'
import { uploadFile } from './cloud-storage'

async function main() {
    const port = 8070
    const out = path.resolve('out')
    const baseUrl = `http://localhost:${port}`

    await buildHandler({
        cwd: path.resolve(__dirname, '../../../examples'),
        out,
    })
    let server: Server = await staticServer({ port, root: out })

    await screenshot({
        baseUrl,
        onScreenshot: async (data) => {
            const [res] = await admin.storage().bucket('playground-301710.appspot.com').upload(data.path, {
                contentType: 'image/jpeg',
                public: true,
                destination: data.relativePath,
            })
            console.log(`Uploaded at ${await res.publicUrl()}`)
        },
    })
    server.close()
}

main().catch(console.error)
