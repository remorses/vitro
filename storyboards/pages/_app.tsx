import React, { Fragment } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Head from 'next/head'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <ThemeProvider>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
