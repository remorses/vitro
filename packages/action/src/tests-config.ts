import path from 'path'

require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

export const region = 'eu-west-1';

export const bucket = 'testshitkjhdgfslkjsdbf';

export const { ACCESS_KEY, SECRET_KEY } = process.env
if (!ACCESS_KEY || !SECRET_KEY) {
    throw new Error(`Missing s3 credentials in env`)
}
