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
import { firebaseConfig } from './firebase'

async function uploadFolder({ folderPath, bucketName, destinationFolder }) {
    folderPath = path.resolve(folderPath)

    const files = await glob('**', {
        cwd: folderPath,
        absolute: true,
        gitignore: false,
    })

    await batchedPromiseAll(
        files,
        (filePath) =>
            uploadFile({
                destination: slash(
                    path.resolve(
                        destinationFolder,
                        path.relative(folderPath, filePath),
                    ),
                ),
                filePath: filePath,
            }),
        os.cpus().length * 2,
    )
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

export async function uploadFile(args: {
    destination: string
    filePath: string
}) {
    const { destination, filePath } = args

    console.log(`uploading to ${destination}`)

    const file = await fs.readFileSync(filePath)
    const ref = firebase.storage().ref().child(destination)

    // use the buffer's underlying arraybuffer
    const contentType = mime.lookup(filePath) || '*/*'
    const res = await ref.put(file.buffer, {
        contentType,
    })
    return res
}
