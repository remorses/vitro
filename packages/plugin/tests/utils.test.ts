import pico from 'picomatch'
import * as assert from 'assert'

describe('picomatch', () => {
    it('handles ./ prefix', () => {
        const match = pico('./stories/**/*.story.tsx')
        assert.ok(match('stories/ciao/x.story.tsx'))
        assert.ok(match('stories/xxx/ciao/x.story.tsx'))
    })
    // it('handles windows paths', () => {
    //     const match = pico('./stories/**/*.story.tsx', {})
    //     assert.ok(
    //         match('/adsfsdf/stories/xxx/ciao/x.story.tsx'.replace(/\//g, '\\')),
    //     )
    // })
})
