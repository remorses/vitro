import {
    arrangeIntoTree,
    removeSingleChildFolders,
    makeExperimentsTree,
} from '../src/tree'
import { globWithGit } from 'smart-glob'

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

    it('removeSingleChildFolders', async () => {
        const exampleTree = makeExperimentsTree(
            await globWithGit('.', { cwd: __dirname, gitignore: true }),
        )
        let tree = removeSingleChildFolders(exampleTree)
        console.log(JSON.stringify(tree, null, 4))
    })
})
