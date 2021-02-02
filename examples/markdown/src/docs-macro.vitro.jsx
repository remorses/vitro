import React from 'react'
import styled, { css } from 'styled-components'
import { docs } from '@vitro/cli/docs'



docs`
# Some documentation injected with markdown

Officia ea deserunt culpa aliqua labore amet commodo ut esse ullamco nostrud.

Exercitation fugiat laborum commodo quis do. Deserunt cillum aliquip Lorem officia deserunt velit minim. Duis nisi eiusmod nulla cupidatat veniam amet esse officia est. Ut minim dolor sunt elit fugiat. Qui nostrud sint nostrud proident sint amet sit. Pariatur quis ea adipisicing fugiat id esse. Laborum qui voluptate in esse veniam consequat est amet elit deserunt in nulla ad.

Aliqua cillum labore esse magna proident veniam non labore tempor veniam. Anim dolore officia sunt excepteur eiusmod. Aliqua id mollit mollit irure ad tempor veniam non et incididunt laborum dolor cupidatat duis. Dolor non incididunt non aute eu.


a list of something

- ciao
- a te
- e a te

    some code here

`


const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`


export const ExampleButton = () => React.createElement(Button, {}, 'hello')

docs`
# Some documentation injected with markdown

Officia ea deserunt culpa aliqua labore amet commodo ut esse ullamco nostrud.

## Some documentation injected with markdown

Exercitation fugiat laborum commodo quis do. Deserunt cillum aliquip Lorem officia deserunt velit minim. Duis nisi eiusmod nulla cupidatat veniam amet esse officia est. Ut minim dolor sunt elit fugiat. Qui nostrud sint nostrud proident sint amet sit. Pariatur quis ea adipisicing fugiat id esse. Laborum qui voluptate in esse veniam consequat est amet elit deserunt in nulla ad.

`

console.log(new Error('i should be on line 54'))

export const PrimaryButton = () =>
    React.createElement(Button, { primary: true }, 'hello')

// inline`
// # Hello another time

// some paragraph
// `
