import {
    Stack,
    Box,
    StackProps,
    InputGroup,
    InputLeftElement,
    Icon,
    Input,
    InputGroupProps,
    useColorMode,
    IconButton,
} from '@chakra-ui/core'
import { AiFillCaretRight } from 'react-icons/ai'
import { FiBook as LogoPart } from 'react-icons/fi'
import NextLink from 'next/link'
import { getStories } from '../support'
import { useMemo, useState, useCallback } from 'react'
import throttle from 'lodash/throttle'

export const StoriesIndex = ({ ...p }: Omit<InputGroupProps, 'children'>) => {
    let [filter, setFilter] = useState('')
    filter = filter.toLowerCase()
    const throttledSetFilter = useCallback<any>(throttle(setFilter, 300), [
        setFilter,
    ])
    const { colorMode, toggleColorMode } = useColorMode()
    const stories = useMemo(() => getStories(), [])
    return (
        <Stack spacing='6' {...p}>
            <Stack direction='row' spacing='2' align='center'>
                <Logo fontSize='28px' />
                <Box flex='1' />
                <IconButton
                    // bg={{ light: 'white', dark: 'gray.700' }[colorMode]}
                    // size='sm'
                    // shadow='sm'
                    onClick={toggleColorMode}
                    fontSize='1.2em'
                    aria-label='color-mode-toggle'
                    icon={colorMode === 'dark' ? 'moon' : 'sun'}
                />
            </Stack>
            <InputGroup shadow='sm'>
                <InputLeftElement
                    children={<Icon name='search' color='gray.400' />}
                />
                <Input
                    onChange={(e) => throttledSetFilter(e?.target?.value)}
                    variant='filled'
                    bg={{ light: 'white', dark: 'gray.700' }[colorMode]}
                    borderRadius='md'
                />
            </InputGroup>
            <Stack spacing='4'>
                {stories.map(({ title, filename }) => {
                    if (
                        filter &&
                        !title.toLowerCase().includes(filter) &&
                        !filename.toLowerCase().includes(filter)
                    ) {
                        return null
                    }
                    return (
                        <Box key={filename}>
                            <NextLink
                                passHref
                                href={`/stories/${filename}`}
                                // href={`/stories/[...story]`}
                            >
                                <Stack
                                    cursor='pointer'
                                    align='center'
                                    direction='row'
                                >
                                    <Box
                                        as={AiFillCaretRight}
                                        opacity={0.6}
                                        size='0.9em'
                                    />
                                    <Box as='a'>{title}</Box>
                                </Stack>
                            </NextLink>
                        </Box>
                    )
                })}
            </Stack>
        </Stack>
    )
}

export const Logo = ({ ...rest }) => {
    return (
        <Stack
            direction='row'
            align='center'
            fontSize='24px'
            fontWeight='500'
            spacing='2'
            {...rest}
        >
            <Box as={LogoPart} size='1.1em' />
            <Box>Storyboards</Box>
        </Stack>
    )
}
