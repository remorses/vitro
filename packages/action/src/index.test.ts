import path from 'path'
import { getCurrentFolderName, deploy } from '.'
import { ACCESS_KEY, bucket, region, SECRET_KEY } from './tests-config'

jest.setTimeout(1000000)

test('deploy', async () => {
    console.log(
        await deploy({
            cwd: path.resolve(__dirname, '../../../examples'),
            baseDestination: 'vitro-examples',
            s3Config: {
                accessKeyId: ACCESS_KEY,
                secretAccessKey: SECRET_KEY,
                region: region,
                bucket: bucket,
            },
        }),
    )
})

test('getCurrentFolderName', () => {
    expect(getCurrentFolderName()).toBeTruthy()
})
