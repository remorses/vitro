/**
 * This adds a __self={this} JSX attribute to all JSX elements, which React will use
 * to generate some runtime warnings.
 *
 *
 * == JSX Literals ==
 *
 * <sometag />
 *
 * becomes:
 *
 * <sometag __self={this} />
 */
import * as babel from '@babel/core'

import { NodePath, PluginObj } from '@babel/core'
import jsxSyntax from '@babel/plugin-syntax-jsx'

export default function plugin({ types: t }: typeof babel): PluginObj {
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
        inherits: jsxSyntax,
        visitor: {
            Program(path, state) {
                filename = state.file.opts.filename
                path.traverse(visitor)
            },
        },
    }
}
