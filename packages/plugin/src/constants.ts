import path from 'path'

export const TESTING = process.env.VITRO_TESTING
export const VERBOSE = process.env.VERBOSE
export const DEBUG = process.env.DEBUG
export const NODE_ENV = process.env.NODE_ENV
// console.info('NODE_ENV', NODE_ENV)
export const FILTER_EXPERIMENTS = 'FILTER_EXPERIMENTS'

export const VIRTUAL_INDEX_PUBLIC_PATH = '/vitro-virtual-index.tsx'
export const EXPERIMENTS_TREE_PUBLIC_PATH = '/vitro-experiments-tree.js'

export const VIRTUAL_INDEX_TEMPLATE_LOCATION = path.resolve(
    __dirname,
    '../src/_virtualIndexCode.tsx',
)
