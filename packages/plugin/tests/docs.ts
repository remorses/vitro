import { transformInlineMarkdown } from '../src/docs'
import prettier from 'prettier'
import path from 'path'

describe('docs transform', () => {
    it('works', () => {
        const code = `

export const x = () => {}

docs\`
## Title

paragraph

## Title 2

end
\`

function dummy() {
    console.log('hello')
}


docs\`

## Title2

> Quote that says something

A list of stuff

-   ciao
-   hello

## Another title

ok

    some code here
    hello hello

\`

        `
        const res = transformInlineMarkdown(code)
        const formatted = prettier.format(res, { parser: 'babel' })
        console.log(formatted)
    })
})
