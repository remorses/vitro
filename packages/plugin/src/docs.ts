import { transform } from 'esbuild'

var md = require('markdown-it')()
var jsx = require('markdown-it-jsx')
md.use(jsx)

export const mdxComponentPrefix = 'VitroMdx'

export async function makeJsx(opts: { markdown: string; index: number }) {
    const { index, markdown } = opts
    let code = md.render(markdown)
    const name = `${mdxComponentPrefix}__${index}__`
    code = `export function ${name}() {return (<>${code}</>);};`

    const result = await transform(code, {
        // format: 'esm', // passing format reorders exports https://github.com/evanw/esbuild/issues/710
        // sourcemap: 'inline',
        sourcefile: 'file.jsx',
        minifyWhitespace: true,
        // treeShaking: 'ignore-annotations',
        loader: 'jsx',
    })

    code = result.code
    const markdownLines = markdown.split('\n').length
    let codeLines = code.split('\n').length

    if (codeLines < markdownLines) {
        code += new Array(markdownLines - codeLines).fill('\n').join('')
    }

    if (markdownLines !== code.split('\n').length) {
        console.error(
            `Line numbers are different, source maps got invalidated, ${markdownLines} !== ${codeLines}`,
        )
    }

    // TODO maintain line numbers
    return code
}

function regexIndexOf(text, re, i = 0) {
    var indexInSuffix = text.slice(i).search(re)
    return indexInSuffix < 0 ? indexInSuffix : indexInSuffix + i
}

export async function transformInlineMarkdown(
    code: string,
    docsLiteral = 'docs',
) {
    const parts = code.split(new RegExp(docsLiteral + '`'))
    let result = parts[0]
    for (let [index, part] of parts.slice(1).entries()) {
        const markdownEndIndex = regexIndexOf(part, /`/) // TODO do not match escaped literal quotes
        const markdown = part.slice(0, markdownEndIndex)
        const jsxCode = await makeJsx({ markdown, index })
        result += jsxCode
        result += part.slice(markdownEndIndex + 1)
    }
    // console.log('-----\n\n', result, '\n\n-----------')

    return result
}
