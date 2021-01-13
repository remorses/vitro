import { Storage } from '@google-cloud/storage'
import fs from 'fs'
import os from 'os'
import slash from 'slash'
import path from 'path'
import { batchedPromiseAll } from 'batched-promise-all'
import { glob } from 'smart-glob'

async function uploadFolder({ folderPath, bucketName, destinationFolder }) {
    folderPath = path.resolve(folderPath)
    const storage = new Storage({})
    const files = await glob('**', {
        absolute: true,
        gitignore: false,
    })

    async function uploadFile(filePath: string) {
        let pathInFolder = slash(
            path.relative(path.dirname(folderPath), filePath),
        )

        const destination = path.posix.join(destinationFolder, pathInFolder)

        const [file, meta] = await storage
            .bucket(bucketName)
            .upload(filePath, { destination })
    }

    await batchedPromiseAll(files, uploadFile, os.cpus().length * 2)
}
