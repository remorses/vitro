import { CSSReset, Stack, ThemeProvider, Box } from '@chakra-ui/core'
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
        <ThemeProvider>
            <CSSReset />
            <Global styles={globalStyles} />
            <Stack
                position='relative'
                overflowX='hidden'
                minWidth='100vw'
                minHeight='100vh'
                // position='absolute'
                bg='gray.100'
            >
                <Box position='fixed' left={PAGE_PADDING} top={PAGE_PADDING}>
                    <StoriesIndex
                        // overflowY='auto'
                        fontWeight='500'
                        display={['none', null, 'flex']}
                        width={['260px']}
                        height='100%'
                    />
                </Box>
                <Stack
                    position='fixed'
                    right='0px'
                    top='0'
                    bottom='0'
                    left='360px'
                    as='main'
                    borderLeftWidth={['0', null, '2px']}
                    pl={['0', null, '10']}
                    pt={PAGE_PADDING}
                    pr={PAGE_PADDING}
                    pb={PAGE_PADDING}
                    // width='100%'
                    align='stretch'
                    overflowY='scroll'
                >
                    <Component {...pageProps} />
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
