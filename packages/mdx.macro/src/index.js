const { createMacro } = require('babel-plugin-macros')
const mdx = require('@mdx-js/mdx')
const { createHash } = require('crypto')
const {
    default: restSpreadSyntax,
} = require('@babel/plugin-proposal-object-rest-spread')
const { default: jsxSyntax } = require('@babel/plugin-syntax-jsx')
const { parse } = require('@babel/parser')
const dedent = require('dedent')

// declare const inline: any

export const mdxComponentPrefix = '_VitroMdx'

function inlineMDX({ references, babel, state }) {
    const { types: t } = babel
    const { inline = [], imports = [] } = references
    inline.forEach((reference, referenceIndex) => {
        // Collect all imports from within the MDX string
        let mdxImports = []
        function importVisitor() {
            return {
                visitor: {
                    ImportDeclaration(path) {
                        // imports in mdx can sometimes include a comment, so we want to remove
                        // them. Additionally, because we remove them below we also want to
                        // clone them so we keep the reference
                        mdxImports.push(
                            t.removeComments(t.cloneNode(path.node)),
                        )
                        path.remove()
                    },
                },
            }
        }
        // Grab the raw mdx code
        let rawCode = reference.parent.quasi.quasis[0].value.raw
        // Transform mdx code
        let mdxCode = mdx.sync(dedent(rawCode))
        console.log('mdxCode first', '\n\n\n', mdxCode, '\n\n\n')

        // mdxCode = mdxCode.replace(/\bexports/g, 'module.exports')
        // collect imports here
        // let { code } = babel.transform(mdxCode, {
        //     filename: state.file.opts.filename,
        //     plugins: [jsxSyntax, restSpreadSyntax, importVisitor],
        // })
        // replace export default
        const name = `${mdxComponentPrefix}${hash(mdxCode)}${referenceIndex}`
        mdxCode = mdxCode.replace('export default function', `export function`)
        mdxCode = mdxCode.replace(/MDXContent/g, name)
        // mdxCode += `module.export ${name} = MDXContent`
        // let { code } = babel.transform(mdxCode, {
        //     filename: state.file.opts.filename,
        //     plugins: [jsxSyntax, restSpreadSyntax, importVisitor],
        // })

        // replaceWithMultiple will wrap the ast in an iife, adding the `return`
        // before the last node, in this case we want to return the function MDXContent component
        // code += `\nMDXContent`

        console.log('mdxCode after', '\n\n\n', mdxCode, '\n\n\n')
        // transform the code back to an ast

        // if (referenceIndex > 0) {
        //     // remove duplicate makeShortcode
        //     mdxCode = mdxCode.replace(/const makeShortcode(.|\s| )*\};/, '')
        // }
        let ast = parse(mdxCode, {
            sourceType: 'module',
            plugins: ['jsx', restSpreadSyntax],
        })

        // Replace the inline`` content with the ast above
        reference.parentPath.replaceWithMultiple(ast.program.body)
        // Insert any imports we encountered
        reference.hub.file.path.node.body.unshift(...mdxImports)
    })
}

function hash(data) {
    return createHash('sha1').update(data).digest('hex')
}

module.exports = createMacro(inlineMDX)
