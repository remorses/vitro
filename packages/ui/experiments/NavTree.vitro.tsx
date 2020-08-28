import { NavTree } from '../src/components'
import React from 'react'

export const basic = () => {
    return <NavTree tree={tree} />
}

const tree = {
    path: 'pages',
    name: 'pages',
    children: [
        {
            path: 'pages/blog',
            name: 'blog',
            children: [
                {
                    path: 'pages/blog/best-documentation-site-generators.mdx',
                    name: 'best-documentation-site-generators.mdx',
                    meta: {
                        description:
                            'Best documentation site generators in 2020',
                        date: '24 June, 2020',
                    },
                    title: 'Best documentation site generators in 2020',
                    url: '/blog/best-documentation-site-generators',
                },
                {
                    path: 'pages/blog/example.mdx',
                    name: 'example.mdx',
                    meta: {
                        date: '25 June, 2020',
                        description:
                            'An example post made just to test the dokz blog feature',
                    },
                    title: 'Example post',
                    url: '/blog/example',
                },
                {
                    path: 'pages/blog/layout.mdx',
                    name: 'layout.mdx',
                    meta: {},
                    title: 'Layout',
                    url: '/blog/layout',
                },
            ],
            size: null,
            type: 'directory',
        },
        {
            path: 'pages/docs',
            name: 'docs',
            children: [
                {
                    path: 'pages/docs/adding-dokz-to-existing-website.mdx',
                    name: 'adding-dokz-to-existing-website.mdx',
                    meta: {},
                    title: 'Adding to an existing website',
                    url: '/docs/adding-dokz-to-existing-website',
                },
                {
                    path: 'pages/docs/blog',
                    name: 'blog',
                    children: [
                        {
                            path: 'pages/docs/blog/index.mdx',
                            name: 'index.mdx',
                            meta: {},
                            title: 'Adding a blog',
                            url: '/docs/blog/',
                        },
                        {
                            path: 'pages/docs/blog/writing-a-post.mdx',
                            name: 'writing-a-post.mdx',
                            meta: {},
                            title: 'Writing a post',
                            url: '/docs/blog/writing-a-post',
                        },
                    ],
                    size: null,
                    type: 'directory',
                },
                {
                    path: 'pages/docs/customizing',
                    name: 'customizing',
                    children: [
                        {
                            path:
                                'pages/docs/customizing/adding-page-transitions.mdx',
                            name: 'adding-page-transitions.mdx',
                            meta: {},
                            title: 'Adding page transitions',
                            url: '/docs/customizing/adding-page-transitions',
                        },
                        {
                            path:
                                'pages/docs/customizing/change-sidebar-order.mdx',
                            name: 'change-sidebar-order.mdx',
                            meta: {},
                            title: 'Change Sidebar Ordering',
                            url: '/docs/customizing/change-sidebar-order',
                        },
                        {
                            path:
                                'pages/docs/customizing/change-sidebar-root-path.mdx',
                            name: 'change-sidebar-root-path.mdx',
                            meta: {},
                            title: 'Change docs root path',
                            url: '/docs/customizing/change-sidebar-root-path',
                        },
                        {
                            path:
                                'pages/docs/customizing/customizing-elements.mdx',
                            name: 'customizing-elements.mdx',
                            meta: {},
                            title: 'Customizing Elements',
                            url: '/docs/customizing/customizing-elements',
                        },
                    ],
                    size: null,
                    type: 'directory',
                },
                {
                    path: 'pages/docs/general',
                    name: 'general',
                    children: [
                        {
                            path:
                                'pages/docs/general/adding-a-table-of-contents.mdx',
                            name: 'adding-a-table-of-contents.mdx',
                            meta: {},
                            title: 'Adding a table of contents',
                            url: '/docs/general/adding-a-table-of-contents',
                        },
                        {
                            path: 'pages/docs/general/adding-seo.mdx',
                            name: 'adding-seo.mdx',
                            meta: {},
                            title: 'Adding seo',
                            url: '/docs/general/adding-seo',
                        },
                        {
                            path: 'pages/docs/general/deploying-your-docs.mdx',
                            name: 'deploying-your-docs.mdx',
                            meta: {},
                            title: 'Deploying your docs',
                            url: '/docs/general/deploying-your-docs',
                        },
                        {
                            path: 'pages/docs/general/document-settings.mdx',
                            name: 'document-settings.mdx',
                            meta: {},
                            title: 'Document settings',
                            url: '/docs/general/document-settings',
                        },
                        {
                            path: 'pages/docs/general/edit-this-page.mdx',
                            name: 'edit-this-page.mdx',
                            meta: {},
                            title: 'Edit this page',
                            url: '/docs/general/edit-this-page',
                        },
                        {
                            path: 'pages/docs/general/export-to-pdf.mdx',
                            name: 'export-to-pdf.mdx',
                            meta: {},
                            title: 'Export to pdf',
                            url: '/docs/general/export-to-pdf',
                        },
                        {
                            path:
                                'pages/docs/general/preview-react-components.mdx',
                            name: 'preview-react-components.mdx',
                            meta: {},
                            title: 'Preview React Components',
                            url: '/docs/general/preview-react-components',
                        },
                        {
                            path: 'pages/docs/general/using-typescript.mdx',
                            name: 'using-typescript.mdx',
                            meta: {},
                            title: 'Using typescript',
                            url: '/docs/general/using-typescript',
                        },
                        {
                            path: 'pages/docs/general/writing-mdx.mdx',
                            name: 'writing-mdx.mdx',
                            meta: {},
                            title: 'Writing MDX',
                            url: '/docs/general/writing-mdx',
                        },
                    ],
                    size: null,
                    type: 'directory',
                },
                {
                    path: 'pages/docs/getting-started.mdx',
                    name: 'getting-started.mdx',
                    meta: {},
                    title: 'Getting Started',
                    url: '/docs/getting-started',
                },
                {
                    path: 'pages/docs/index.mdx',
                    name: 'index.mdx',
                    meta: {},
                    title: 'Introduction',
                    url: '/docs/',
                },
            ],
            size: null,
            type: 'directory',
        },
    ],
    size: null,
    type: 'directory',
}
