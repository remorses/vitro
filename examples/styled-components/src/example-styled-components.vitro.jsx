import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.div`
    /* This renders the buttons above... Edit me! */
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    border-radius: 10px;
    background: lightblue;
    color: white;
    border: 2px solid white;
`

export const ExampleButton = () => <Button>text</Button>
