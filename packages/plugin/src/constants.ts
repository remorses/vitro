import path from 'path'

export const NODE_ENV = process.env.NODE_ENV
// console.info('NODE_ENV', NODE_ENV)

export const VIRTUAL_INDEX_PATH = 'vitro-virtual-index.jsx'
export const EXPERIMENTS_TREE_GLOBAL_VARIABLE = 'VITRO_TREE'
export const EXPERIMENTS_TREE_PATH = 'vitro-experiments-tree.js'

export const VIRTUAL_INDEX_TEMPLATE_LOCATION = path.resolve(
    __dirname,
    '../src/_virtualIndexCode.jsx',
)

export const DEFAULT_OVERRIDES_BASENAME = 'vitro-overrides.jsx'
