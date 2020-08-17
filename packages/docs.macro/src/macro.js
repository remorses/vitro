const { createMacro } = require('babel-plugin-macros')
const mdx = require('@mdx-js/mdx')
const { createHash } = require('crypto')
const {
    default: restSpreadSyntax,
} = require('@babel/plugin-proposal-object-rest-spread')
const { default: jsxSyntax } = require('@babel/plugin-syntax-jsx')
const { parse } = require('@babel/parser')
const dedent = require('dedent')

var md = require('markdown-it')()
var jsx = require('markdown-it-jsx')
md.use(jsx)

export const mdxComponentPrefix = '_VitroMdx'

function docsMDX({ references, babel, state }) {
    const { types: t } = babel
    const { docs = [], imports = [] } = references
    docs.forEach((reference, referenceIndex) => {
        // Collect all imports from within the MDX string
        // Grab the raw mdx code
        let rawCode = reference.parent.quasi.quasis[0].value.raw
        // Transform mdx code
        let mdxCode = md.render(dedent(rawCode))
        // console.log('mdxCode first', '\n\n\n', mdxCode, '\n\n\n')

        // mdxCode = mdxCode.replace(/\bexports/g, 'module.exports')
        // collect imports here
        // let { code } = babel.transform(mdxCode, {
        //     filename: state.file.opts.filename,
        //     plugins: [jsxSyntax, restSpreadSyntax, importVisitor],
        // })
        // replace export default
        const name = `${mdxComponentPrefix}${hash(mdxCode)}${referenceIndex}`
        mdxCode = dedent(`export function ${name}() {
            return (
                <>
                    ${mdxCode}
                </>
            )
        }`)

        // console.log('mdxCode after', '\n\n\n', mdxCode, '\n\n\n')
        // transform the code back to an ast

        // if (referenceIndex > 0) {
        //     // remove duplicate makeShortcode
        //     mdxCode = mdxCode.replace(/const makeShortcode(.|\s| )*\};/, '')
        // }
        let ast = parse(mdxCode, {
            sourceType: 'module',
            plugins: ['jsx', restSpreadSyntax],
        })

        // Replace the docs`` content with the ast above
        reference.parentPath.replaceWithMultiple(ast.program.body)
        // Insert any imports we encountered
        // reference.hub.file.path.node.body.unshift(...mdxImports)
    })
}

function hash(data) {
    return createHash('sha1').update(data).digest('hex')
}

module.exports = createMacro(docsMDX)
