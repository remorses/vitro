import {
    Config as BundlessConfig,
    Plugin as BundlessPlugin,
} from '@bundless/cli'

export interface VitroConfig {
    globs: string[]
    ignore?: string[]
    basePath?: string
    bundlessConfig?: BundlessConfig
    links?: LinksConfig
}

export interface LinksConfig {
    github?: {
        branch: string
        path: string
        url: string
    }
    gitlab?: {
        url: string
        branch: string
        path: string
    }
}
