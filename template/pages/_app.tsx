import React, { Fragment } from 'react'
import { ThemeProvider, CSSReset, Stack } from '@chakra-ui/core'
import Head from 'next/head'
import { StoriesIndex } from '../components/StoriesIndex'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <ThemeProvider>
            <CSSReset />
            <Stack minWidth='100vw' minHeight='100vh' bg='gray.100' p='20'>
                <Stack direction='row'>
                    <StoriesIndex width='200px' />
                    <Stack align='stretch'>
                        <Component {...pageProps} />
                    </Stack>
                </Stack>
            </Stack>
        </ThemeProvider>
    )
}
