import {
    screenshot,
    staticServer,
    compare,
    makeTempFolder,
} from '@vitro/screenshot'

// import { generateModulesMap } from '../src/stories'
import { ClientRequest, Server } from 'http'
import path from 'path'
import { buildHandler } from '@vitro/cli/dist/build'
import { uploadFile } from './cloud-storage'
import { S3Uploader } from './s3'

async function main({ cwd, s3Config }) {
    const port = 8070
    const out = path.resolve('out')
    const baseUrl = `http://localhost:${port}`

    await buildHandler({
        cwd,
        out,
    })
    let server: Server = await staticServer({ port, root: out })

    if (s3Config) {
        const {
            accessKeyId,
            region,
            secretAccessKey,
            endpoint,
            bucket,
        } = s3Config

        const client = new S3Uploader({
            accessKeyId,
            region,
            secretAccessKey,
            endpoint,
        })

        const { targetFolder } = await screenshot({
            baseUrl,
            onScreenshot: async (data) => {
                const res = await client.uploadImage({
                    destination: data.relativePath,
                    filePath: data.path,
                    bucket,
                })
                console.log(res['Location'])
            },
        })
        let folderA = await makeTempFolder()
        let s3Folder = '' // TODO use the previous commit folder on s3
        await client.downloadFolder({
            bucket,
            localDir: folderA,
            s3Folder,
            onDownload: console.log,
        })
        await compare({ folderA, folderB: targetFolder })
    }
    server.close()
}

// main({
//     cwd: path.resolve(__dirname, '../../../examples'),
//     s3Config: {
//         region: 'eu-west-1',
//         // endpoint: 'https://storage.googleapis.com',
//         bucket: 'testshitkjhdgfslkjsdbf',
//     },
// }).catch(console.error)
