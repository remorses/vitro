import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'
// import { FrameProvider } from './frame-provider'
// import extraScopePlugin from 'stylis-plugin-extra-scope'
import weakMemoize from '@emotion/weak-memoize'
import { ScopeProvider } from './scope_provider'
import stylisPluginExtraScope from 'stylis-plugin-extra-scope'
import { Heading } from '@chakra-ui/core'

let memoizedCreateCacheWithContainer = (container: any = undefined) => {
    let newCache = createCache({
        container,
        key: 'dfgdsfg', // TODO maybe emotion key should change?
        // stylisPlugins: [stylisPluginExtraScope('.App')],
    })
    return newCache
}

export function FramedComponent(C) {
    class Framed extends Component {
        // defaultProps = {
        //     frameProps: {
        //         frameBorder: 0,
        //     },
        // }

        updateIFrameContents = function () {
            const found = ReactDOM.findDOMNode(this) as any
            // console.log('head', found)
            if (!found?.contentDocument?.head) {
                return
            }
            ReactDOM.render(<C iframe={found} />, this.el)
        }

        render = function () {
            return (
                <iframe
                    // TODO insert global stories css here
                    style={{
                        width: '100%',
                        minHeight: '100%', // TODO add body stylings
                    }}
                    ref={(r) => (this.iframe = r)}
                    {...this.props.frameProps}
                />
            )
        }

        componentDidMount = function () {
            const found = ReactDOM.findDOMNode(this) as any
            var frameBody = found.contentDocument.body,
                el = document.createElement('div')
            frameBody.appendChild(el)
            this.el = el
            this.updateIFrameContents()
        }

        componentDidUpdate = function () {
            this.updateIFrameContents()
        }
    }
    return Framed
}
