import { generateModulesMap } from '../src/modules_map'

describe('modules map', () => {
    it('generate', async () => {
        const code = await generateModulesMap({
            globs: ['../README*'],
            ignore: ['node_modules'],
        })
        console.log(code)
    })
})
