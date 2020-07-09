import React from 'react'
import { Component } from './index'

export const Simple = ({}) => {
    return <Component />
}

export const DifferentColor = ({}) => {
    return <Component flex='1' w='100%' minH='100%' bg='blue.100' />
}
