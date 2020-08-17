import React from 'react'
import styled, { css } from 'styled-components'
/** @jsx mdx */
import { mdx } from '@mdx-js/react'
mdx
import { inline } from '@vitro/mdx.macro'

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


inline`
# Some documentation injected with markdown

Officia ea deserunt culpa aliqua labore amet commodo ut esse ullamco nostrud.

Exercitation fugiat laborum commodo quis do. Deserunt cillum aliquip Lorem officia deserunt velit minim. Duis nisi eiusmod nulla cupidatat veniam amet esse officia est. Ut minim dolor sunt elit fugiat. Qui nostrud sint nostrud proident sint amet sit. Pariatur quis ea adipisicing fugiat id esse. Laborum qui voluptate in esse veniam consequat est amet elit deserunt in nulla ad.

`


export const ExampleButton = () => <Button>text</Button>

inline`
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
