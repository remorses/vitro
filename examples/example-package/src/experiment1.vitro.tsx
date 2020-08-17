import React from 'react'
import { Component } from './index'
import { Box, ThemeProvider } from '@chakra-ui/core'

export const DifferentColor = ({}) => {
    return <Component bg='red.100' />
}

export const Simple = ({}) => {
    return <Box flex='1 0 400px' width='100%' minHeight='100%' bg='gray.100' />
}
export const AnotherOne = ({}) => {
    return <Component w='10px' bg='red.100' />
}

export const SuperCool = ({}) => {
    return <Component bg='blue.100' />
}

export const StillBetter = ({}) => {
    return <Component bg='green.100' />
}
