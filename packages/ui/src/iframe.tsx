import createCache from '@emotion/cache'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

let memoizedCreateCacheWithContainer = (container: any = undefined) => {
    let newCache = createCache({
        container,
        key: 'dfgdsfg',
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
                    style={{
                        width: '100%',
                        minHeight: '100%',
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
