import React from 'react'
import styled, { css } from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
    padding: 4em;
    height: 800px;
    width: 100%;
    background: lightskyblue;
`

export const WrappedTitle = () => (
    <Wrapper>
        <Title>Hello World!</Title>
    </Wrapper>
)
