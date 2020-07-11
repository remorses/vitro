import {
    CSSReset,
    Stack, ThemeProvider
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
                <Stack direction='row' spacing='10' m='10'>
                    <StoriesIndex fontWeight='500' />

                    <Stack
                        as='main'
                        borderLeftWidth={['0', null, '2px']}
                        pl={['0', null, '10']}
                        width='100%'
                        align='stretch'
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
