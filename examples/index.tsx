import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { HomePage, ExperimentPage, VitroApp } from '@vitro/ui/bundle'

import '@vitro/ui/src/inspect-mode.css'
import experimentsTree from './experimentsTree.json'

const routes = [
    {
        fileExports: () => import('./tailwind/src/example-tailwind.vitro.jsx'),
        route: '/experiments/tailwind/src/example-tailwind.vitro',
        absolutePath:
            '/Users/morse/Documents/GitHub/react-comics/examples/renderer/pages/experiments/example-package/src/anAwesomeExperiment.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anAwesomeExperiment.vitro.tsx',
    },
].map(({ fileExports, route, absolutePath, sourceExperimentPath }) => (
    <Route path={route}>
        <ExperimentPage
            experimentsTree={experimentsTree}
            GlobalWrapper={null}
            absolutePath={absolutePath}
            sourceExperimentPath={sourceExperimentPath}
            fileExports={fileExports}
        />
    </Route>
))

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
