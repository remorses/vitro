import {
    Config as BundlessConfig,
    Plugin as BundlessPlugin,
} from '@bundless/cli'

export interface VitroConfig {
    globs: string[]
    ignore?: string[]
    basePath?: string
    bundlessConfig?: BundlessConfig
}
