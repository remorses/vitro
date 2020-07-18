// import { generateModulesMap } from '../src/stories'
import path from 'path'

describe('resolve', () => {
    it('outer dir', () => {
        console.log(require.resolve('react'))
        console.log(
            require.resolve('react', {
                paths: [path.resolve(__dirname, '../../../')],
            }),
        )
    })
})
