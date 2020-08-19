import React from 'react'
import styled, { css } from 'styled-components'
import { docs } from '@vitro/docs.macro'

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

docs`
# Some documentation injected with markdown

Officia ea deserunt culpa aliqua labore amet commodo ut esse ullamco nostrud.

Exercitation fugiat laborum commodo quis do. Deserunt cillum aliquip Lorem officia deserunt velit minim. Duis nisi eiusmod nulla cupidatat veniam amet esse officia est. Ut minim dolor sunt elit fugiat. Qui nostrud sint nostrud proident sint amet sit. Pariatur quis ea adipisicing fugiat id esse. Laborum qui voluptate in esse veniam consequat est amet elit deserunt in nulla ad.

\`const x = 4\`

Aliqua cillum labore esse magna proident veniam non labore tempor veniam. Anim dolore officia sunt excepteur eiusmod. Aliqua id mollit mollit irure ad tempor veniam non et incididunt laborum dolor cupidatat duis. Dolor non incididunt non aute eu.


a list of something

- ciao
- a te
- e a te

`

export const ExampleButton = () => <Button>text</Button>

docs`
# Some documentation injected with markdown

Officia ea deserunt culpa aliqua labore amet commodo ut esse ullamco nostrud.

## Some documentation injected with markdown

Exercitation fugiat laborum commodo quis do. Deserunt cillum aliquip Lorem officia deserunt velit minim. Duis nisi eiusmod nulla cupidatat veniam amet esse officia est. Ut minim dolor sunt elit fugiat. Qui nostrud sint nostrud proident sint amet sit. Pariatur quis ea adipisicing fugiat id esse. Laborum qui voluptate in esse veniam consequat est amet elit deserunt in nulla ad.

`

export const PrimaryButton = () => <Button primary>text</Button>

// inline`
// # Hello another time

// some paragraph
// `
