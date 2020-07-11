// @jsx jsx

import { useRouter } from 'next/router'
import startCase from 'lodash/startCase'
import { FaBug, FaLink, FaClock } from 'react-icons/fa'
import { RiFullscreenLine } from 'react-icons/ri'
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md'
import { jsx, css } from '@emotion/core'
import path from 'path'
jsx
import {
    Stack,
    Box,
    SimpleGrid,
    Select,
    Button,
    Link,
    BoxProps,
    StackProps,
    IconButton,
    Collapse,
} from '@chakra-ui/core'
import React, {
    useMemo,
    useState,
    Fragment,
    Profiler,
    ProfilerOnRenderCallback,
    useCallback,
    useRef,
    useEffect,
} from 'react'
import { DebugCSS } from './debugCSS'
import { profile } from 'console'
import { FiClock, FiHash, FiZap } from 'react-icons/fi'
import { AiOutlineFullscreen } from 'react-icons/ai'

export function StoryPage({ GlobalWrapper, absolutePath, storyExports }) {
    const [cssDebugEnabled, setCssDebug] = useState(false)
    const [columns, setColumnsCount] = useState(1)
    const { query } = useRouter()
    const { story = '' } = query

    const vscodeUrl = `vscode://file${absolutePath}`
    // console.log(storyObject)
    // exported.then(z => console.log(Object.keys(z)))
    console.log({ storyExports })
    const StoryWrapper = useMemo(
        () => storyExports?.default?.wrapper || Fragment,
        [storyExports],
    )

    const storyTitle =
        storyExports?.default?.title ||
        formatPathToTitle(absolutePath) ||
        'Untitled'
    // if (!exported || !story || !storyObject) {
    //     // TODO return 404
    //     return null
    // }
    return (
        <Stack spacing='10'>
            <Stack align='flex-start' spacing='4'>
                <Box fontSize='32px' fontWeight='medium'>
                    {storyTitle}
                </Box>
                {/* <Box fontSize='18px' opacity={0.6}>
                    powered by storyboards
                </Box> */}
                {process.env.NODE_ENV == 'development' && (
                    <Link
                        as='a'
                        fontWeight='500'
                        href={vscodeUrl}
                        opacity={0.6}
                    >
                        <Box d='inline' size='.8em' mr='3' as={FaLink} />
                        Open in vscode
                    </Link>
                )}
            </Stack>
            <Box h='4' />
            <Stack direction='row'>
                <Button
                    onClick={() => setCssDebug((x) => !x)}
                    opacity={0.8}
                    bg='white'
                    w='auto'
                >
                    <Box mr='2' d='inline-block' as={FaBug} />
                    CSS debug
                </Button>
                <Box flex='1' />
                <Select
                    onChange={(e) => {
                        const columns = Number(String(e.target.value).trim())
                        setColumnsCount(columns)
                        // console.log({ columns })
                    }}
                    defaultValue='1'
                    variant='filled'
                    bg='white'
                    w='auto'
                >
                    <option value='1'>1 column</option>
                    <option value='2'>2 columns</option>
                    <option value='3'>3 columns</option>
                </Select>
            </Stack>
            <SimpleGrid
                // direction='row'
                columns={columns}
                flexWrap='wrap'
                // justify='space-between'
                spacingX='12'
                spacingY='16'
            >
                {Object.keys(storyExports)
                    .filter((k) => k !== 'default')
                    .map((k) => {
                        const Component = storyExports[k]
                        const id = `${absolutePath}/${k}`
                        return (
                            <StoryBlock
                                title={k}
                                blockWidth='100%'
                                key={id}
                                id={id}
                            >
                                <Stack
                                    flex='1'
                                    w='100%'
                                    h='100%'
                                    minH='100%'
                                    spacing='0'
                                    align='center'
                                    justify='center'
                                    as={cssDebugEnabled ? DebugCSS : 'div'}
                                >
                                    <GlobalWrapper>
                                        <StoryWrapper>
                                            <Component />
                                        </StoryWrapper>
                                    </GlobalWrapper>
                                </Stack>
                            </StoryBlock>
                        )
                    })}
            </SimpleGrid>
        </Stack>
    )
}

const StoryBlock = ({ children, blockWidth, id, title, ...rest }) => {
    const [fullScreen, setFullScreen] = useState(false)
    const fullScreenStyles: StackProps = useMemo(
        () => ({
            w: '100vw',
            h: '100vh',
            p: '50px',
            pt: '80px',
            bg: 'gray.100',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: 100,
        }),
        [],
    )
    const actualDurationRef = useRef('0.00ms')
    const renderCount = useRef(0)

    // renderCount.current = 0
    console.log({ id })
    const profile: ProfilerOnRenderCallback = useCallback(
        (id, _, actualDuration) => {
            console.log({ id, actualDuration })
            renderCount.current++
            actualDurationRef.current = actualDuration.toFixed(2) + 'ms'
        },
        [],
    )
    return (
        <Stack
            spacing='3'
            flexShrink={0}
            flexGrow={0}
            // minW='100px'
            overflow='hidden'
            flexBasis={blockWidth}
            minH='340px'
            position='relative'
            {...rest}
            {...(fullScreen ? fullScreenStyles : {})}
        >
            <Stack
                spacing='8'
                position='absolute'
                top={fullScreen ? '20px' : '10px'}
                left={fullScreen ? '50px' : '20px'}
                right={fullScreen ? '50px' : '20px'}
                opacity={0.8}
                direction='row'
                align='center'
            >
                <Box
                    borderRadius='md'
                    bg='white'
                    px='4px'
                    fontSize='18px'
                    fontWeight='medium'
                >
                    {title}
                </Box>
                <Box flex='1' />
                {process.env.NODE_ENV !== 'production' && (
                    <Couple
                        borderRadius='md'
                        bg='white'
                        opacity={0.8}
                        a={<Box as={FiZap} size='1em' />}
                        b={
                            <AutoUpdateBox
                                fontWeight='500'
                                contentRef={actualDurationRef}
                            />
                        }
                    />
                )}
                {process.env.NODE_ENV !== 'production' && (
                    <Couple
                        borderRadius='md'
                        bg='white'
                        opacity={0.8}
                        a={<Box as={FiHash} size='1em' />}
                        b={
                            <AutoUpdateBox
                                fontWeight='500'
                                map={(x) => x + ' renders'}
                                contentRef={renderCount}
                            />
                        }
                    />
                )}
                <IconButton
                    borderRadius='md'
                    bg='white'
                    // isRound
                    size='sm'
                    onClick={() => setFullScreen((x) => !x)}
                    fontSize='1.4em'
                    // bg='transparent'
                    icon={fullScreen ? MdFullscreenExit : MdFullscreen}
                    aria-label='full-screen'
                />
            </Stack>
            <Stack
                // shadow='sm'
                flex='1'
                overflow='hidden'
                borderRadius='10px'
                bg='white'
                minH='100%'
                spacing='0'
                align='center'
                justify='center'
                // p='6'
                // css={cssDebugEnabled ? debugCSS : css``}
            >
                <ErrorBoundary>
                    <Profiler id={id} onRender={profile}>
                        {children}
                    </Profiler>
                </ErrorBoundary>
            </Stack>
        </Stack>
    )
}

const AutoUpdateBox = ({
    after = 1000,
    map,
    contentRef,
    ...rest
}: BoxProps & {
    after?: number
    contentRef: { current: any }
    map?: Function
}) => {
    const [_, render] = useState(null)
    useEffect(() => {
        const id = setInterval(() => {
            render('')
        }, after)
        return () => clearInterval(id)
    }, [])
    return (
        <Box
            {...rest}
            children={map ? map(contentRef.current) : contentRef.current}
        />
    )
}

class ErrorBoundary extends React.Component {
    state = { hasError: false, message: '', trace: '', traceOpen: false }

    static getDerivedStateFromError(error: Error, info) {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
            message: error?.message || 'no error message found',
            trace: error?.stack,
        }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo)
    }

    render() {
        const { hasError, message, trace, traceOpen } = this.state
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Stack
                    m='20'
                    fontWeight='500'
                    align='center'
                    justify='center'
                    color='red.500'
                    spacing='6'
                    maxW='100%'
                >
                    <Stack align='center' spacing='2'>
                        <Box
                            fontWeight='bold'
                            textAlign='center'
                            display='inline-block'
                        >
                            Error
                        </Box>
                        <Box textAlign='center' display='inline-block'>
                            {message}
                        </Box>
                        <Button
                            display='inline-block'
                            size='sm'
                            variant='ghost'
                            onClick={() =>
                                this.setState((x: any) => ({
                                    ...x,
                                    traceOpen: !x.traceOpen,
                                }))
                            }
                        >
                            see trace
                        </Button>
                    </Stack>
                    <Collapse overflowX='auto' isOpen={traceOpen}>
                        <Box fontSize='0.9em' as='pre'>
                            {trace}
                        </Box>
                    </Collapse>
                </Stack>
            )
        }

        return this.props.children
    }
}

export const Couple = ({ a, b, ...rest }) => {
    return (
        <Stack isTruncated direction='row' align='center' spacing='1' {...rest}>
            <Box>{a}</Box>
            <Box>{b}</Box>
        </Stack>
    )
}

function normalizePath(p: string): string {
    return p
        .split('/')
        .map((x) => x.trim())
        .filter((x) => x !== '.')
        .filter(Boolean)
        .join('/')
}

export function formatPathToTitle(path: string) {
    const endPath = path
        .split('/')
        .map((x) => x.trim())
        .filter(Boolean)
        .reverse()[0]
    const withoutExt = endPath.split('.')[0]
    return startCase(withoutExt)
}
