import React from 'react'
import styled, { css } from 'styled-components'
import emotionStyled from '@emotion/styled'

const TitleEmotion = emotionStyled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

const StyledWrapper = styled.div`
    padding: 4em;
    min-height: 300px;
    min-width: 2000px;
    /* background: lightskyblue; */
`

const Wrapper = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

const List = ({ items }) => {
    return (
        <div>
            {items.map((x, i) => (
                <ListItem key={i} i={i} />
            ))}
        </div>
    )
}

const ListItem = ({ i }) => {
    const MyTitle = i % 2 === 0 ? Title : TitleEmotion
    return <MyTitle>Item N {i}</MyTitle>
}

export const RootComponent = () => (
    <Wrapper>
        <Title>Hello World!</Title>
        <List items={new Array(10).fill(0)} />
    </Wrapper>
)
