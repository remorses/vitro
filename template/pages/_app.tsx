import React, { Fragment } from 'react'
import {
    ThemeProvider,
    CSSReset,
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
} from '@chakra-ui/core'
import Head from 'next/head'
import { StoriesIndex } from '../components/StoriesIndex'
import { Global, css } from '@emotion/core'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <ThemeProvider>
            <CSSReset />
            <Global styles={globalStyles} />
            <Stack
                overflowX='hidden'
                minWidth='100vw'
                minHeight='100vh'
                bg='gray.100'
            >
                <Stack direction='row' spacing='10' m='20'>
                    <Stack spacing='6' width={['260px']}>
                        <InputGroup size='sm'>
                            <InputLeftElement
                                children={
                                    <Icon name='search' color='gray.400' />
                                }
                            />
                            <Input
                                variant='filled'
                                bg='white'
                                borderRadius='lg'
                            />
                        </InputGroup>
                        <StoriesIndex />
                    </Stack>
                    <Stack
                        as='main'
                        borderLeftWidth='2px'
                        width='100%'
                        align='stretch'
                        px='10'
                    >
                        <Component {...pageProps} />
                    </Stack>
                </Stack>
            </Stack>
        </ThemeProvider>
    )
}

export const globalStyles = css`
    * {
        box-sizing: border-box;
    }
    html {
        overflow: hidden;
        height: 100%;
    }
    #__next {
        min-height: 100%;
    }
    body {
        height: 100%;
        overflow: auto;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    main {
        -webkit-overflow-scrolling: touch;
    }
`
