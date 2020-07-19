import React from 'react'
import styled, { css } from 'styled-components'

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

export const ExampleButton = () => <Button>text</Button>
export const PrimaryButton = () => <Button primary>text</Button>

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`

export const WrappedTitle = () => (
    <Wrapper>
        <Title>Hello World!</Title>
    </Wrapper>
)
