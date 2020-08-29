import { arrangeIntoTree } from '../src/tree'

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
        // Result
        // [
        //     {
        //         "name": "Account",
        //         "children": [
        //             {
        //                 "name": "Payment Methods",
        //                 "children": [
        //                     {
        //                         "name": "Credit Card",
        //                         "children": []
        //                     },
        //                     {
        //                         "name": "Paypal",
        //                         "children": []
        //                     }
        //                 ]
        //             },
        //             {
        //                 "name": "Emails",
        //                 "children": [
        //                     {
        //                         "name": "Main Email",
        //                         "children": []
        //                     },
        //                     {
        //                         "name": "Backup Email",
        //                         "children": []
        //                     }
        //                 ]
        //             },
        //             {
        //                 "name": "Devices",
        //                 "children": [
        //                     {
        //                         "name": "Google Pixel",
        //                         "children": []
        //                     },
        //                     {
        //                         "name": "iPad Mini",
        //                         "children": []
        //                     },
        //                     {
        //                         "name": "Laptop",
        //                         "children": []
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // ]
    })
})
