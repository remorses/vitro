import { generateModulesMap } from '../src/modules_map'

describe('modules map', () => {
    it('generate', async () => {
        const code = await generateModulesMap({
            globs: ['../example-package/**/*.story.tsx'],
            ignore: ['node_modules'],
        })
        console.log(code)
    })
})
