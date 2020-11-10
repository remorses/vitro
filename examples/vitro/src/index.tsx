import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { HomePage, ExperimentPage, VitroApp } from '@vitro/ui/esm'

import experimentsTree from './experimentsTree.json'

const absolutePath =
    '/Users/morse/Documents/GitHub/react-comics/examples/renderer/pages/experiments/example-package/src/anAwesomeExperiment.vitro.tsx'
const sourceExperimentPath =
    '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anAwesomeExperiment.vitro.tsx'

const imports = [
    // TODO cannot import from outside the snowpack folder, the only solution is to bundle the outside files as normal dependencies via esbuild (also in watch mode)
    // use a special alias that redirects to the root folder
    () =>
        import(
            '__root__/examples/example-package/src/anAwesomeExperiment.vitro'
        ),
]

const routes = [
    <Route path='/example'>
        {imports.map((importer) => (
            <ExperimentPage
                experimentsTree={experimentsTree}
                GlobalWrapper={null}
                absolutePath={absolutePath}
                sourceExperimentPath={sourceExperimentPath}
                fileExports={importer}
            />
        ))}
    </Route>,
]

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
