import React from 'react'
import {
    Button,
    Alert,
    AlertIcon,
    AlertDescription,
    Box,
    Stack,
} from '@chakra-ui/core'
import Wrapper from './Wrapper'

export default {
    wrapper: Wrapper,
}

export const Main = ({}) => {
    return <ComplexComponent />
}

const ComplexComponent = ({}) => {
    return (
        <Box p='10'>
            <AlertComponent />
        </Box>
    )
}

const AlertComponent = ({}) => {
    return (
        <Alert variant='left-accent' status='info'>
            <AlertIcon />
            Chakra is awesome
        </Alert>
    )
}

console.log(new Error(`i should be on line 37!`))
