import '@vitro/cli/reexports/inspect-mode.css'
import '@vitro/cli/reexports/inspector.css'

import {
    ExperimentPage,
    HomePage,
    VitroApp,
    history,
    useRouteChanged,
    getFileParam,
} from '@vitro/cli/reexports/ui'
import path from 'path'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import experimentsTree from '/vitro-experiments-tree.js'

// __ROOT__ goes here

// routes go here

// overrides go here

// __CONFIG__ goes here

const routes = __ROUTES__
    .filter((x) => x.url)
    .map(({ fileExports, url, sourceExperimentPath }) => {
        const componentsOverridesScope = Object.keys(__OVERRIDES__).find(
            (scopeDir) => {
                // console.log({ scopeDir, sourceExperimentPath })
                const isInside = !path
                    .relative(scopeDir, sourceExperimentPath)
                    .startsWith('..')
                if (isInside) {
                    return true
                }
                return false
            },
        )
        const overrides = __OVERRIDES__[componentsOverridesScope]
        return {
            url,
            param: getFileParam(url),
            Component: () => {
                return (
                    <ExperimentPage
                        config={__CONFIG__}
                        root={__ROOT__}
                        componentsOverrides={overrides}
                        experimentsTree={experimentsTree}
                        sourceExperimentPath={sourceExperimentPath}
                        fileExports={fileExports}
                    />
                )
            },
        }
    })

function MainApp() {
    const [fileParam, setFileParam] = useState(() =>
        getFileParam(window.location.href),
    )
    useRouteChanged(() => {
        setFileParam(getFileParam(window.location.href))
    })
    if (!fileParam) {
        return (
            <VitroApp experimentsTree={experimentsTree}>
                <HomePage experimentsTree={experimentsTree} />
                {/* TODO let user customize home  */}
            </VitroApp>
        )
    }
    const route = routes.find((route) => {
        return route.param === fileParam
    })

    if (!route) {
        return <VitroApp experimentsTree={experimentsTree}></VitroApp>
    }
    return (
        <VitroApp experimentsTree={experimentsTree}>
            <route.Component />
        </VitroApp>
    )
}

ReactDOM.render(<MainApp />, document.getElementById('root'))
