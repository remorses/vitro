import {
    CSSReset,
    Stack,
    ThemeProvider,
    Box,
    useColorMode,
    ColorModeProvider,
} from '@chakra-ui/core'
import { css, Global } from '@emotion/core'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import React from 'react'
import { StoriesIndex } from '../components/StoriesIndex'
import '../nprogress.css'

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const PAGE_PADDING = '40px'

export default function App(props) {
    const { Component, pageProps } = props

    return (
        <ColorModeProvider value='light'>
            {/* TODO make initial color mode configurable via webpack define */}
            <ThemeProvider>
                <CSSReset />
                <Global styles={globalStyles} />
                <Content>
                    <Component {...pageProps} />
                </Content>
            </ThemeProvider>
        </ColorModeProvider>
    )
}

export const Content = ({ children }) => {
    const { colorMode } = useColorMode()
    return (
        <Stack
            position='relative'
            overflowX='hidden'
            minWidth='100vw'
            minHeight='100vh'
            bg={{ light: 'gray.100', dark: 'gray.800' }[colorMode]}
        >
            <Box
                // overflowY='auto'
                width={['270px']}
                position='fixed'
                // pr={PAGE_PADDING}
                left={PAGE_PADDING}
                top='0'
                pt={PAGE_PADDING}
                bottom='0'
                // overflowX='hidden'
            >
                <StoriesIndex
                    width='100%'
                    fontWeight='500'
                    display={['none', null, null, 'flex']}
                />
                <Box h={PAGE_PADDING} />
            </Box>
            <Stack
                position='fixed'
                right='0px'
                top='0'
                bottom='0'
                left={[PAGE_PADDING, null, null, '350px']}
                as='main'
                borderLeftWidth={['0', null, null, '2px']}
                pl={['0', null, null, PAGE_PADDING]}
                pt={PAGE_PADDING}
                pr={PAGE_PADDING}
                pb={PAGE_PADDING}
                // width='100%'
                align='stretch'
                overflowY='scroll'
            >
                {children}
            </Stack>
        </Stack>
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
