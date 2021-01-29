global.XMLHttpRequest = require('xmlhttprequest-ssl').XMLHttpRequest
import { firebase } from '@firebase/app'
import '@firebase/storage'
import '@firebase/auth'
import fs from 'fs'
import os from 'os'
import slash from 'slash'
import path from 'path'
import mime from 'mime-types'
import { batchedPromiseAll } from 'batched-promise-all'
import { glob } from 'smart-glob'
import { firebaseConfig } from '../firebase'

async function uploadFolder({ folderPath, bucketName, destinationFolder }) {
    folderPath = path.resolve(folderPath)

    const files = await glob('**', {
        cwd: folderPath,
        absolute: true,
        gitignore: false,
    })

    async function uploadFile(filePath: string) {
        let pathInFolder = slash(path.relative(folderPath, filePath))

        const destination = path.posix.join(destinationFolder, pathInFolder)

        console.log(`uploading to ${destination}`)

        const file = await fs.promises.readFile(filePath)
        const ref = firebase
            .storage()
            .ref()
            .child(destination)

        // use the buffer's underlying arraybuffer
        const contentType = mime.lookup(filePath) || '*/*'
        const res = await ref.put(file.buffer, {
            contentType,
            customMetadata: {
                // uid: 'abc123', // for enhanced security rules
            },
        })
    }

    await batchedPromiseAll(files, uploadFile, os.cpus().length * 2)
}

async function main() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    const credential = await firebase
        .auth()
        .signInWithEmailAndPassword(
            'beats.by.morse@gmail.com',
            process.env.PASS,
        )
    await uploadFolder({
        bucketName: 'vitro-test-1',
        destinationFolder: 'example-upload',
        folderPath: '/Users/morse/Documents/GitHub/react-comics/examples/out',
    })
}

main()
