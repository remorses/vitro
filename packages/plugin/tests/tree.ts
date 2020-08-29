import { arrangeIntoTree, removeSingleChildFolders } from '../src/tree'

describe('tree', () => {
    it('arrangeIntoTree', () => {
        var paths = [
            ['Account'],
            ['Account', 'Payment Methods'],
            ['Account', 'Payment Methods', 'Credit Card'],
            ['Account', 'Payment Methods', 'Paypal'],
            ['Account', 'Emails'],
            ['Account', 'Emails', 'Main Email'],
            ['Account', 'Emails', 'Backup Email'],
            ['Account', 'Devices'],
            ['Account', 'Devices', 'Google Pixel'],
            ['Account', 'Devices', 'iPad Mini'],
            ['Account', 'Devices', 'Laptop'],
        ]
        var tree = arrangeIntoTree(paths)
        console.log(JSON.stringify(tree, null, 4))
    })

    it('removeSingleChildFolders', () => {
        let tree = removeSingleChildFolders(exampleTree)
        console.log(JSON.stringify(tree, null, 4))
    })
})

const exampleTree = {
    children: [
        {
            name: 'markdown',
            url: '',
            path: 'markdown',
            title: 'Markdown',
            children: [
                {
                    name: 'src',
                    url: '',
                    path: 'markdown/src',
                    title: 'Src',
                    children: [
                        {
                            name: 'docs-macro.vitro.jsx',
                            url: '/experiments/markdown/src/docs-macro.vitro',
                            path: 'markdown/src/docs-macro.vitro.jsx',
                            title: 'Docs Macro',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'styled-components',
            url: '',
            path: 'styled-components',
            title: 'Styled Components',
            children: [
                {
                    name: 'src',
                    url: '',
                    path: 'styled-components/src',
                    title: 'Src',
                    children: [
                        {
                            name: 'big-height.vitro.jsx',
                            url:
                                '/experiments/styled-components/src/big-height.vitro',
                            path: 'styled-components/src/big-height.vitro.jsx',
                            title: 'Big Height',
                            children: [],
                        },
                        {
                            name: 'big-width.vitro.jsx',
                            url:
                                '/experiments/styled-components/src/big-width.vitro',
                            path: 'styled-components/src/big-width.vitro.jsx',
                            title: 'Big Width',
                            children: [],
                        },
                        {
                            name: 'example-styled-components.vitro.jsx',
                            url:
                                '/experiments/styled-components/src/example-styled-components.vitro',
                            path:
                                'styled-components/src/example-styled-components.vitro.jsx',
                            title: 'Example Styled Components',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'tailwind',
            url: '',
            path: 'tailwind',
            title: 'Tailwind',
            children: [
                {
                    name: 'src',
                    url: '',
                    path: 'tailwind/src',
                    title: 'Src',
                    children: [
                        {
                            name: 'example-tailwind.vitro.jsx',
                            url:
                                '/experiments/tailwind/src/example-tailwind.vitro',
                            path: 'tailwind/src/example-tailwind.vitro.jsx',
                            title: 'Example Tailwind',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'example-package',
            url: '',
            path: 'example-package',
            title: 'Example Package',
            children: [
                {
                    name: 'src',
                    url: '',
                    path: 'example-package/src',
                    title: 'Src',
                    children: [
                        {
                            name: 'anAwesomeExperiment.vitro.tsx',
                            url:
                                '/experiments/example-package/src/anAwesomeExperiment.vitro',
                            path:
                                'example-package/src/anAwesomeExperiment.vitro.tsx',
                            title: 'An Awesome Experiment',
                            children: [],
                        },
                        {
                            name: 'anotherExperiment copy copy copy.vitro.tsx',
                            url:
                                '/experiments/example-package/src/anotherExperiment copy copy copy.vitro',
                            path:
                                'example-package/src/anotherExperiment copy copy copy.vitro.tsx',
                            title: 'Another Experiment Copy Copy Copy',
                            children: [],
                        },
                        {
                            name: 'anotherExperiment copy copy.vitro.tsx',
                            url:
                                '/experiments/example-package/src/anotherExperiment copy copy.vitro',
                            path:
                                'example-package/src/anotherExperiment copy copy.vitro.tsx',
                            title: 'Another Experiment Copy Copy',
                            children: [],
                        },
                        {
                            name: 'anotherExperiment copy.vitro.tsx',
                            url:
                                '/experiments/example-package/src/anotherExperiment copy.vitro',
                            path:
                                'example-package/src/anotherExperiment copy.vitro.tsx',
                            title: 'Another Experiment Copy',
                            children: [],
                        },
                        {
                            name: 'anotherExperiment.vitro.tsx',
                            url:
                                '/experiments/example-package/src/anotherExperiment.vitro',
                            path:
                                'example-package/src/anotherExperiment.vitro.tsx',
                            title: 'Another Experiment',
                            children: [],
                        },
                        {
                            name: 'anotherExperiment1.vitro.tsx',
                            url:
                                '/experiments/example-package/src/anotherExperiment1.vitro',
                            path:
                                'example-package/src/anotherExperiment1.vitro.tsx',
                            title: 'Another Experiment 1',
                            children: [],
                        },
                        {
                            name: 'example_component.vitro.tsx',
                            url:
                                '/experiments/example-package/src/example_component.vitro',
                            path:
                                'example-package/src/example_component.vitro.tsx',
                            title: 'Example Component',
                            children: [],
                        },
                        {
                            name: 'experiment1.vitro.tsx',
                            url:
                                '/experiments/example-package/src/experiment1.vitro',
                            path: 'example-package/src/experiment1.vitro.tsx',
                            title: 'Experiment 1',
                            children: [],
                        },
                        {
                            name: 'stillAnotherExperiment.vitro.tsx',
                            url:
                                '/experiments/example-package/src/stillAnotherExperiment.vitro',
                            path:
                                'example-package/src/stillAnotherExperiment.vitro.tsx',
                            title: 'Still Another Experiment',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'example-package-scope',
            url: '',
            path: 'example-package-scope',
            title: 'Example Package Scope',
            children: [
                {
                    name: 'example-sub-package-1',
                    url: '',
                    path: 'example-package-scope/example-sub-package-1',
                    title: 'Example Sub Package 1',
                    children: [
                        {
                            name: 'src',
                            url: '',
                            path:
                                'example-package-scope/example-sub-package-1/src',
                            title: 'Src',
                            children: [
                                {
                                    name: 'index.vitro.tsx',
                                    url:
                                        '/experiments/example-package-scope/example-sub-package-1/src/index.vitro',
                                    path:
                                        'example-package-scope/example-sub-package-1/src/index.vitro.tsx',
                                    title: 'Index',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'example-sub-package-2',
                    url: '',
                    path: 'example-package-scope/example-sub-package-2',
                    title: 'Example Sub Package 2',
                    children: [
                        {
                            name: 'src',
                            url: '',
                            path:
                                'example-package-scope/example-sub-package-2/src',
                            title: 'Src',
                            children: [
                                {
                                    name: 'index.vitro.tsx',
                                    url:
                                        '/experiments/example-package-scope/example-sub-package-2/src/index.vitro',
                                    path:
                                        'example-package-scope/example-sub-package-2/src/index.vitro.tsx',
                                    title: 'Index',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}
