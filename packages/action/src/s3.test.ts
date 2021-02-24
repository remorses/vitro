import { makeTempFolder } from '@vitro/screenshot'
import { S3Uploader } from './s3'
import fs from 'fs-extra'
import path from 'path'
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const region = 'eu-west-1'
const bucket = 'testshitkjhdgfslkjsdbf'

const { ACCESS_KEY, SECRET_KEY } = process.env
if (!ACCESS_KEY || !SECRET_KEY) {
    throw new Error(`Missing s3 credentials in env`)
}

describe('s3', () => {
    const client = new S3Uploader({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY,
        region,
    })
    test('download', async () => {
        const localDir = await makeTempFolder()
        await client.downloadFolder({
            bucket,
            localDir,
            s3Folder: 'markdown',
            onDownload: console.log,
        })
        await fs.remove(localDir)
    })
    test('upload', async () => {
        const res = await client.uploadImage({
            destination: 'some/folder/file.json',
            filePath: path.resolve(__dirname, '../package.json'),
            bucket,
        })
        console.log(res['Location'])
    })
})
