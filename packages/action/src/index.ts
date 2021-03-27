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
import { S3API } from './s3'
import { execSync } from 'child_process'
import { URL } from 'url'

export async function deploy({ cwd, s3Config, baseDestination, out = 'dist' }) {
    out = path.resolve(out)
    const destination = path.posix.join(baseDestination, getCurrentFolderName())
    await buildHandler({
        cwd,
        out,
        configOverrides: {
            basePath: '/' + destination,
        },
    })
    if (s3Config) {
        const {
            accessKeyId,
            secretAccessKey,
            region,
            endpoint,
            bucket,
        } = s3Config

        const client = new S3API({
            accessKeyId,
            region,
            secretAccessKey,
            endpoint,
        })
        const url = await client.uploadFolder({
            folderPath: out,
            bucket,
            destination,
        })

        return new URL('index.html', url).toString()

        // const port = 8070
        // const baseUrl = `http://localhost:${port}`
        // let server: Server = await staticServer({ port, root: out })
        // const { targetFolder } = await screenshot({
        //     baseUrl,
        //     onScreenshot: async (data) => {
        //         const res = await client.uploadImage({
        //             destination: path.posix.join(
        //                 baseDestination,
        //                 data.relativePath,
        //             ),
        //             filePath: data.path,
        //             bucket,
        //         })
        //         console.log(res['Location'])
        //     },
        // })
        // const folderA = await makeTempFolder()
        // const previousFolder = ''
        // let s3FolderToCompare = path.posix.join(baseDestination, previousFolder)
        // await client.downloadFolder({
        //     bucket,
        //     localDir: folderA,
        //     s3Folder: s3FolderToCompare,
        //     onDownload: console.log,
        // })
        // await compare({ folderA, folderB: targetFolder })
        // server.close()
    }
}

export function getCurrentFolderName() {
    const output = execSync(`git rev-parse HEAD`, {})
    return output
        .toString()
        .trim()
        .slice(0, 6)
}

// main({
//     cwd: path.resolve(__dirname, '../../../examples'),
//     s3Config: {
//         region: 'eu-west-1',
//         // endpoint: 'https://storage.googleapis.com',
//         bucket: 'testshitkjhdgfslkjsdbf',
//     },
// }).catch(console.error)
