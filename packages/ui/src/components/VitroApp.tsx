// @jsx jsx
import {
    Box,
    ColorModeProvider,
    CSSReset,
    Stack,
    ThemeProvider,
    useColorMode,
} from '@chakra-ui/core'
import { Global, jsx, css, CacheProvider } from '@emotion/core'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import React, { useState, useEffect, useMemo } from 'react'
import { globalStyles } from '../css'
import { ExperimentsNav } from './ExperimentsNav'
import stylisPluginExtraScope from 'stylis-plugin-extra-scope'
import weakMemoize from '@emotion/weak-memoize'
import createCache from '@emotion/cache'
import { SplashScreen } from './SplashScreen'
import { ExperimentsTree } from '../support'

jsx

Router.events.on('routeChangeStart', (url) => {
    // console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const PAGE_PADDING = '40px'
const SM_PAGE_PADDING = '20px'

export function VitroApp({ experimentsMap, experimentsTree, ...props }) {
    const { Component, pageProps } = props
    return (
        <ColorModeProvider value='light'>
            {/* TODO make initial color mode configurable via webpack define */}
            <ThemeProvider>
                <CSSReset />
                <Global styles={[globalStyles]} />
                <Content
                    experimentsMap={experimentsMap}
                    experimentsTree={experimentsTree}
                >
                    <Component {...pageProps} />
                </Content>
            </ThemeProvider>
        </ColorModeProvider>
    )
}

function useSSRSkip({} = {}) {
    const [r, set] = useState(false)
    useEffect(() => {
        set(true)
    }, [])
    if (!r) {
        return false
    }
    return r
}


const Content = ({
    experimentsMap,
    experimentsTree,
    children,
}: {
    experimentsMap: Record<string, string>
    experimentsTree: ExperimentsTree
    children
}) => {
    const loaded = useSSRSkip()
    let newCache = useMemo(
        () =>
            createCache({
                key: 'vitro',
                stylisPlugins: [stylisPluginExtraScope('body')], // TODO maybe don't use __next and instead use body
            }),
        [],
    )
    if (!loaded) {
        return (
            <>
                <BgStyles />
                <SplashScreen />
            </>
        )
    }

    return (
        <>
            <BgStyles />
            <CacheProvider value={newCache}>
                <Box
                    className='vitro'
                    overflowY='auto'
                    overflowX='hidden'
                    // width={['270px']}
                    width='350px'
                    position='fixed'
                    // pr={PAGE_PADDING}
                    px={PAGE_PADDING}
                    top='0'
                    pt={PAGE_PADDING}
                    bottom='0'
                    // overflowX='hidden'
                >
                    <ExperimentsNav
                        className='vitro smoothscroll'
                        experimentsMap={experimentsMap}
                        experimentsTree={experimentsTree}
                        width='100%'
                        fontWeight='500'
                        display={['none', null, null, 'flex']}
                    />
                    <Box h={PAGE_PADDING} />
                </Box>
                <Box
                    className='vitro smoothscroll'
                    position='absolute'
                    height='content'
                    right='0'
                    top='0'
                    bottom='0'
                    left={[SM_PAGE_PADDING, null, null, '350px']}
                    as='main'
                    borderLeftWidth={['0', null, null, '2px']}
                    pl={['0', null, null, PAGE_PADDING]}
                    pt={[SM_PAGE_PADDING, null, null, PAGE_PADDING]}
                    pr={[SM_PAGE_PADDING, null, null, PAGE_PADDING]}
                    pb={[SM_PAGE_PADDING, null, null, PAGE_PADDING]}
                    // align='stretch'
                    overflowY='scroll'
                    // safari fix
                    css={css`
                        & > * {
                            flex-shrink: 0;
                        }
                    `}
                    // width='100%'
                    // overflowX='visible'
                    // zIndex={0}
                >
                    {children}
                </Box>
            </CacheProvider>
        </>
    )
}

const BgStyles = () => {
    const { colorMode } = useColorMode()
    return (
        <Global
            styles={css`
                body {
                    min-height: 100vh !important;
                    min-width: 100vw !important;
                    background-color: ${{
                        light: '#EDF2F7',
                        dark: '#1A202C',
                    }[colorMode]} !important;
                }
            `}
        />
    )
}
