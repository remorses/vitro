import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { HomePage, ExperimentPage, VitroApp } from '@vitro/ui/bundle'

import '@vitro/ui/src/inspect-mode.css'
// @ts-expect-error
import experimentsTree from '/vitro-experiments-tree.js'

declare const GlobalWrapper: ComponentType

// GlobalWrapper import goes here

declare const __ROUTES__: {
    fileExports: () => any
    url: string
    sourceExperimentPath: string
}[]

// routes go here

const routes = __ROUTES__
    .filter((x) => x.url)
    .map(({ fileExports, url: route, sourceExperimentPath }) => {
        return (
            <Route key={route} path={route}>
                <ExperimentPage
                    experimentsTree={experimentsTree}
                    GlobalWrapper={GlobalWrapper}
                    sourceExperimentPath={sourceExperimentPath}
                    fileExports={fileExports}
                />
            </Route>
        )
    })

ReactDOM.render(
    <Router>
        <VitroApp experimentsTree={experimentsTree}>
            <Switch>
                <Route path='/' exact>
                    <HomePage experimentsTree={experimentsTree} />
                </Route>
                {routes}
            </Switch>
        </VitroApp>
    </Router>,

    document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// @ts-ignore
if (import.meta.hot) {
    // @ts-ignore
    import.meta.hot.accept()
}
