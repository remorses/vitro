/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    transform: { '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin' },
    testPathIgnorePatterns: ['/dist/', '/esm/', '/node_modules/'],
    bail: 1,
    testEnvironment: 'node',
}

module.exports = config
