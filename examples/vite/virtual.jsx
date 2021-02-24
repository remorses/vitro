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
import path from './path'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import experimentsTree from '/vitro-experiments-tree.js'

// __ROOT__ goes here

// routes go here

// overrides go here

// __CONFIG__ goes here

const __ROOT__ = '/Users/morse/Documents/GitHub/react-comics/examples'
const __ROUTES__ = [
    {
        fileExports: () =>
            import('/markdown/src/docs-macro.vitro.jsx'),
        url: '/?file=markdown%2Fsrc%2Fdocs-macro.vitro.jsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/markdown/src/docs-macro.vitro.jsx',
    },
    {
        fileExports: () =>
            import(
                '/styled-components/src/big-height.vitro.jsx'
            ),
        url: '/?file=styled-components%2Fsrc%2Fbig-height.vitro.jsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/big-height.vitro.jsx',
    },
    {
        fileExports: () =>
            import('/styled-components/src/big-width.vitro.jsx'),
        url: '/?file=styled-components%2Fsrc%2Fbig-width.vitro.jsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/big-width.vitro.jsx',
    },
    {
        fileExports: () =>
            import(
                '/styled-components/src/example-styled-components.vitro.jsx'
            ),
        url:
            '/?file=styled-components%2Fsrc%2Fexample-styled-components.vitro.jsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/example-styled-components.vitro.jsx',
    },
    {
        fileExports: () =>
            import(
                '/styled-components/src/many-components.vitro.jsx'
            ),
        url: '/?file=styled-components%2Fsrc%2Fmany-components.vitro.jsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/styled-components/src/many-components.vitro.jsx',
    },
    {
        fileExports: () =>
            import('/tailwind/src/example-tailwind.vitro.jsx'),
        url: '/?file=tailwind%2Fsrc%2Fexample-tailwind.vitro.jsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/tailwind/src/example-tailwind.vitro.jsx',
    },
    {
        fileExports: () =>
            import(
                '/example-package-scope/example-sub-package-1/src/index.vitro.tsx'
            ),
        url:
            '/?file=example-package-scope%2Fexample-sub-package-1%2Fsrc%2Findex.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-1/src/index.vitro.tsx',
    },
    {
        fileExports: () =>
            import(
                '/example-package-scope/example-sub-package-2/src/index.vitro.tsx'
            ),
        url:
            '/?file=example-package-scope%2Fexample-sub-package-2%2Fsrc%2Findex.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-2/src/index.vitro.tsx',
    },
    {
        fileExports: () =>
            import(
                '/example-package/src/anAwesomeExperiment.vitro.tsx'
            ),
        url: '/?file=example-package%2Fsrc%2FanAwesomeExperiment.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anAwesomeExperiment.vitro.tsx',
    },
    {
        fileExports: () =>
            import(
                '/example-package/src/anotherExperiment.vitro.tsx'
            ),
        url: '/?file=example-package%2Fsrc%2FanotherExperiment.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherExperiment.vitro.tsx',
    },
    {
        fileExports: () =>
            import(
                '/example-package/src/anotherExperiment1.vitro.tsx'
            ),
        url: '/?file=example-package%2Fsrc%2FanotherExperiment1.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/anotherExperiment1.vitro.tsx',
    },
    {
        fileExports: () =>
            import(
                '/example-package/src/check-sourcemaps-work.vitro.tsx'
            ),
        url: '/?file=example-package%2Fsrc%2Fcheck-sourcemaps-work.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/check-sourcemaps-work.vitro.tsx',
    },
    {
        fileExports: () =>
            import(
                '/example-package/src/complex-components.vitro.tsx'
            ),
        url: '/?file=example-package%2Fsrc%2Fcomplex-components.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/complex-components.vitro.tsx',
    },
    {
        fileExports: () =>
            import(
                '/example-package/src/example_component.vitro.tsx'
            ),
        url: '/?file=example-package%2Fsrc%2Fexample_component.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/example_component.vitro.tsx',
    },
    {
        fileExports: () =>
            import('/example-package/src/experiment1.vitro.tsx'),
        url: '/?file=example-package%2Fsrc%2Fexperiment1.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/experiment1.vitro.tsx',
    },
    {
        fileExports: () =>
            import(
                '/example-package/src/stillAnotherExperiment.vitro.tsx'
            ),
        url: '/?file=example-package%2Fsrc%2FstillAnotherExperiment.vitro.tsx',
        sourceExperimentPath:
            '/Users/morse/Documents/GitHub/react-comics/examples/example-package/src/stillAnotherExperiment.vitro.tsx',
    },
]
const __OVERRIDES__ = {
    '/Users/morse/Documents/GitHub/react-comics/examples/example-package-scope/example-sub-package-2': () =>
        import(
            '/example-package-scope/example-sub-package-2/vitro-overrides.jsx'
        ),
    '/Users/morse/Documents/GitHub/react-comics/examples/example-package': () =>
        import('/example-package/vitro-overrides.jsx'),
}
const __CONFIG__ = JSON.parse(`{
    "globs": [
        "./**/*.vitro.js",
        "./**/*.vitro.jsx",
        "./**/*.vitro.tsx"
    ],
    "bundlessConfig": {
        "prebundle": {}
    },
    "ignore": [
        "__mirror__/**"
    ],
    "links": {
        "github": {
            "url": "https://github.com/remorses/vitro",
            "path": "examples",
            "branch": "master"
        }
    }
}`)

const routes = __ROUTES__
    .filter((x) => x.url)
    .map(({ fileExports, url, sourceExperimentPath }) => {
        const componentsOverridesScope = Object.keys(__OVERRIDES__).find(
            (scopeDir) => {
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
