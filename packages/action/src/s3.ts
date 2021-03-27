import { Upload } from '@aws-sdk/lib-storage'
import fs from 'fs'
import s3 from '@auth0/s3'
import mime from 'mime-types'
import { S3Client, S3, CompleteMultipartUploadOutput } from '@aws-sdk/client-s3'
import { once, on } from 'events'

export class S3API {
    client: S3
    region: string
    legacyClient: any
    constructor({
        accessKeyId,
        secretAccessKey,
        region,
        endpoint = undefined,
    }) {
        this.region = region
        this.client = new S3({
            region,
            credentials: { accessKeyId, secretAccessKey },
            // apiVersion: 'v3',

            // useArnRegion: true,
            endpoint,
        })
        this.legacyClient = s3.createClient({
            maxAsyncS3: 20, // this is the default
            s3RetryCount: 3, // this is the default
            s3RetryDelay: 1000, // this is the default
            multipartUploadThreshold: 20971520, // this is the default (20 MB)
            multipartUploadSize: 15728640, // this is the default (15 MB)
            s3Options: {
                accessKeyId,
                secretAccessKey,
                region,
                endpoint,
            },
        })
    }

    async uploadFile({
        destination,
        filePath,
        bucket,
        onProgress = ({}: any) => {},
    }) {
        try {
            const Body = await fs.promises.readFile(filePath)
            const upload = new Upload({
                client: this.client,

                params: {
                    Bucket: bucket,
                    Key: destination,
                    Body,

                    ACL: 'public-read',
                    ContentType: mime.lookup(filePath) || '',
                },
            })

            upload.on('httpUploadProgress', (progress) => {
                onProgress && onProgress(progress)
            })

            const res = await upload.done()

            return res
        } catch (e) {
            throw e
        }
    }

    async uploadFolder({ destination, folderPath, bucket }) {
        const emitter = this.legacyClient.uploadDir({
            localDir: folderPath,
            s3Params: {
                Prefix: destination,
                Bucket: bucket,
            },
            getS3Params(localFile, s3Object, callback) {
                callback(null, {
                    ACL: 'public-read',
                })
            },
        })
        await new Promise((resolve, reject) => {
            emitter.on('end', resolve)
            emitter.on('error', reject)
        })
        return `https://${bucket}.s3.${this.region}.amazonaws.com/${destination}/`
    }

    async downloadFolder({ localDir, s3Folder, bucket, onDownload }) {
        const downloader = this.legacyClient.downloadDir({
            s3Params: {
                Prefix: s3Folder,
                Bucket: bucket,
            },
            localDir,
        })
        downloader.on('error', () => {})
        downloader.on('fileDownloadEnd', (filePath) => {
            onDownload && onDownload(filePath)
        })

        await once(downloader, 'end')
    }
}
