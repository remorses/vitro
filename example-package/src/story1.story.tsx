import React from 'react'
import { Component } from './index'

export const Simple = ({}) => {
    return <Component />
}

export const DifferentColor = ({}) => {
    return <Component bg='red.100' />
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
