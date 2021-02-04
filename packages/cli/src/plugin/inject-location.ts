import * as babel from '@babel/core'
import { PluginObj } from '@babel/core'

export function injectLocationPlugin({ types: t }: typeof babel): PluginObj {
    let filename = ''
    const visitor: babel.Visitor = {
        JSXOpeningElement(path) {
            const { node } = path
            const parent = path.findParent((x: any) => {
                // console.log({ t: x.node.type, name: x.node })
                return node !== x.node.openingElement
            })

            if (parent.node.type === 'JSXElement') {
                // only apply on jsx tags on root of components, if statements, ...
                return
            }

            const location = node.loc.start
            node.attributes.push(
                t.jsxAttribute(
                    t.jsxIdentifier('data-vitro-line'),
                    t.jsxExpressionContainer(t.numericLiteral(location.line)),
                ),
            )
            node.attributes.push(
                t.jsxAttribute(
                    t.jsxIdentifier('data-vitro-filename'),
                    t.stringLiteral(filename),
                ),
            )
        },
    }

    return {
        name: 'babel-plugin-inject-location',

        manipulateOptions(opts, parserOpts) {
            parserOpts.plugins.push('jsx')
        },
        visitor: {
            Program(path, state) {
                filename = state.file.opts.filename
                path.traverse(visitor)
            },
        },
    }
}

export default injectLocationPlugin
