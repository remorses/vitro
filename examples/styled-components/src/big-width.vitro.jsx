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
    min-height: 300px;
    min-width: 2000px;
    background: lightskyblue;
`

export const WrappedTitle = () => (
    <Wrapper>
        <Title>Hello World!</Title>
    </Wrapper>
)

export const WrappedTitle3 = () => (
    <Wrapper>
        <Title>Hello World!</Title>
    </Wrapper>
)
