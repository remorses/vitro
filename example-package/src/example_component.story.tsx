import React from 'react'
import {
    Button,
    Alert,
    AlertIcon,
    AlertDescription,
    Box,
    Stack,
} from '@chakra-ui/core'
import { Component } from './index'

export default {
    title: 'My Awesome Component!',
    wrapper: ({ children }) => {
        return (
            <Stack p='4'>
                <Box>This text comes from a wrapper</Box>
                {children}
            </Stack>
        )
    },
}

export const SimpleButton = ({}) => {
    return <Button>Click me</Button>
}

export const AlertStory = ({}) => {
    return (
        <Box p='2'>
            <Alert variant='left-accent' status='info'>
                <AlertIcon />
                Chakra is awesome
            </Alert>
        </Box>
    )
}
