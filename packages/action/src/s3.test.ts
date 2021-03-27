import { makeTempFolder } from '@vitro/screenshot'
import { S3API } from './s3'
import fs from 'fs-extra'
import path from 'path'
import { ACCESS_KEY, bucket, region, SECRET_KEY } from './tests-config'

describe('s3', () => {
    const client = new S3API({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_KEY,
        region: region,
    })
    test('download', async () => {
        const localDir = await makeTempFolder()
        await client.downloadFolder({
            bucket: bucket,
            localDir,
            s3Folder: 'markdown',
            onDownload: console.log,
        })
        await fs.remove(localDir)
    })
    test('upload', async () => {
        const res = await client.uploadFile({
            destination: 'some/folder/file.json',
            filePath: path.resolve(__dirname, '../package.json'),
            bucket,
        })
        console.log(res['Location'])
    })
    test('upload folder', async () => {
        const res = await client.uploadFolder({
            destination: 'some/folder/example_upload',
            folderPath: path.resolve(__dirname),
            bucket,
        })
        console.log(res)
    })
})
