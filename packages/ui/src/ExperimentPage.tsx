// @jsx jsx

import {
    Box,
    BoxProps,
    Button,
    Collapse,
    IconButton,
    Link,
    Select,
    SimpleGrid,
    Stack,
    StackProps,
    useColorMode
} from '@chakra-ui/core'
import { jsx } from '@emotion/core'
import React, {
    Profiler,
    ProfilerOnRenderCallback,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react'
import { FaBug, FaLink } from 'react-icons/fa'
import { FiHash, FiZap } from 'react-icons/fi'
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md'
import { isValidElementType } from 'react-is'
import { DebugCSS } from './debugCSS'
import { DefaultWrapper } from './default_wrapper'
import { MobileNav } from './mobile_nav'
import { formatPathToTitle, TOP_TITLE_H, usePromise } from './support'

jsx

export function ExperimentPage({
    experimentsMap,
    GlobalWrapper,
    absolutePath,
    fileExports: fileExportsPromise,
}) {
    const [cssDebugEnabled, setCssDebug] = useState(false)
    const [columns, setColumnsCount] = useState(1)
    const [fileExports] = usePromise(fileExportsPromise)
    const ValidGlobalWrapper = useMemo(
        () =>
            !GlobalWrapper || !isValidElementType(GlobalWrapper)
                ? DefaultWrapper
                : GlobalWrapper,
        [GlobalWrapper],
    )

    useEffect(() => {
        if (!GlobalWrapper || !isValidElementType(GlobalWrapper)) {
            console.warn(
                `your global wrapper is not a valid react component: ` +
                    String(GlobalWrapper),
            )
        }
    }, [GlobalWrapper])

    const vscodeUrl = `vscode://file${absolutePath}`
    // console.log(storyObject)
    // exported.then(z => console.log(Object.keys(z)))
    // console.log({ fileExports })
    const StoryWrapper = useMemo(
        () => fileExports?.default?.wrapper || DefaultWrapper,
        [fileExports],
    )

    const experimentTitle =
        fileExports?.default?.title ||
        formatPathToTitle(absolutePath) ||
        'Untitled'

    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useMemo(
        () => ({ light: 'white', dark: 'gray.700' }[colorMode]),
        [colorMode],
    )

    // if (!exported || !story || !storyObject) {
    //     // TODO return 404
    //     return null
    // }
    return (
        <Stack spacing='10'>
            <Stack flexShrink={0} align='flex-start' spacing='4'>
                <Stack
                    height={TOP_TITLE_H}
                    spacing='3'
                    align='flex-end'
                    direction='row'
                    width='100%'
                >
                    <Box
                        fontSize='32px'
                        minWidth='0'
                        width='auto'
                        isTruncated
                        fontWeight='medium'
                    >
                        {experimentTitle}
                    </Box>
                    <Box flex='1' />
                    <ToggleColorModeButton
                        mr={['0px', null, null, '-10px !important']}
                    />
                    <MobileNav
                        display={['flex', null, null, 'none']}
                        experimentsMap={experimentsMap}
                    />
                </Stack>
                {/* <Box fontSize='18px' opacity={0.6}>
                    powered by vitro
                </Box> */}
                {process.env.NODE_ENV == 'development' && (
                    <Link
                        as='a'
                        fontWeight='500'
                        href={vscodeUrl}
                        opacity={0.7}
                    >
                        <Box d='inline' size='.8em' mr='3' as={FaLink} />
                        Open in vscode
                    </Link>
                )}
            </Stack>
            <Box flexShrink={0} h='4' />
            <Stack flexShrink={0} direction='row'>
                <Button
                    onClick={() => setCssDebug((x) => !x)}
                    opacity={0.8}
                    bg={bg}
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
                    bg={bg}
                    w='auto'
                >
                    <option value='1'>1 column</option>
                    <option value='2'>2 columns</option>
                    <option value='3'>3 columns</option>
                </Select>
            </Stack>
            <SimpleGrid
                flexShrink={0}
                // direction='row'
                columns={columns}
                flexWrap='wrap'
                // justify='space-between'
                spacingX='12'
                spacingY='16'
            >
                {fileExports &&
                    Object.keys(fileExports)
                        .filter((k) => k !== 'default')
                        .map((k) => {
                            const Component = fileExports[k]
                            // const C = FramedComponent(({ iframe }) => {
                            //     return (
                            //         <CacheProvider
                            //             value={memoizedCreateCacheWithContainer(
                            //                 iframe.contentDocument.head,
                            //             )}
                            //         >
                            //             <ValidGlobalWrapper
                            //                 dark={colorMode == 'dark'}
                            //             >
                            //                 <StoryWrapper
                            //                     dark={colorMode == 'dark'}
                            //                 >
                            //                     <Component
                            //                         dark={colorMode == 'dark'}
                            //                     />
                            //                 </StoryWrapper>
                            //             </ValidGlobalWrapper>
                            //         </CacheProvider>
                            //     )
                            // })

                            const id = `${absolutePath}/${k}`
                            return (
                                <StoryBlock
                                    flexShrink={0}
                                    columns={columns}
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
                                        <ValidGlobalWrapper
                                            dark={colorMode == 'dark'}
                                        >
                                            <StoryWrapper
                                                dark={colorMode == 'dark'}
                                            >
                                                <Component
                                                    dark={colorMode == 'dark'}
                                                />
                                            </StoryWrapper>
                                        </ValidGlobalWrapper>
                                    </Stack>
                                </StoryBlock>
                            )
                        })}
            </SimpleGrid>
        </Stack>
    )
}

const StoryBlock = ({ children, blockWidth, columns, id, title, ...rest }) => {
    const [fullScreen, setFullScreen] = useState(false)
    const { colorMode } = useColorMode()
    const bg = useMemo(
        () => ({ light: 'white', dark: 'gray.700' }[colorMode]),
        [colorMode],
    )
    const fullScreenStyles: StackProps = useMemo(
        () => ({
            w: '100vw',
            h: '100vh',
            p: '50px',
            pt: '80px',
            bg,
            position: 'fixed',
            overflow: 'auto',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            zIndex: 100000,
        }),
        [bg],
    )

    const actualDurationRef = useRef('0.00ms')
    const renderCount = useRef(0)

    // renderCount.current = 0
    // console.log({ id })
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
            minHeight='340px'
            // minW='100px'
            // overflowX='hidden'

            flexBasis={blockWidth}
            position='relative'
            {...rest}
            {...(fullScreen ? fullScreenStyles : {})}
        >
            <Stack
                spacing='8'
                position='absolute'
                opacity={0.7}
                top={fullScreen ? '20px' : '10px'}
                left={fullScreen ? '20px' : '20px'}
                right={fullScreen ? '20px' : '20px'}
                direction='row'
                align='center'
            >
                <Box
                    borderRadius='md'
                    bg={bg}
                    p='4px'
                    fontSize='18px'
                    fontWeight='medium'
                >
                    {title}
                </Box>
                <Box flex='1' />
                <Couple
                    borderRadius='md'
                    hide={columns > 2}
                    bg={bg}
                    p='4px'
                    a={<Box as={FiZap} size='1em' />}
                    b={
                        <AutoUpdateBox
                            fontWeight='500'
                            contentRef={actualDurationRef}
                        />
                    }
                />
                )
                <Couple
                    borderRadius='md'
                    hide={columns > 2}
                    bg={bg}
                    p='4px'
                    a={<Box as={FiHash} size='1em' />}
                    b={
                        <AutoUpdateBox
                            fontWeight='500'
                            map={(x) => x + ' renders'}
                            contentRef={renderCount}
                        />
                    }
                />
                )
                <IconButton
                    borderRadius='md'
                    bg={bg}
                    // isRound
                    size='sm'
                    onClick={() => setFullScreen((x) => !x)}
                    fontSize='1.4em'
                    // bg='transparent'
                    icon={fullScreen ? MdFullscreenExit : MdFullscreen}
                    aria-label='full-screen'
                />
            </Stack>
            <Box
                // spacing='0'
                flexShrink={0}
                flex='1'
                minH='340px'
                minHeight='340px'
            >
                <Stack
                    minH='340px'
                    flex='1'
                    // shadow='sm'
                    borderRadius='10px'
                    overflow='hidden'
                    bg={bg}
                    // minH='100%'
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
            </Box>
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

export const Couple = ({ a, b, hide, ...rest }) => {
    return (
        <Stack
            // display={hide ? 'none' : ['none', null, 'flex']}
            isTruncated
            direction='row'
            align='center'
            spacing='1'
            {...rest}
        >
            <Box>{a}</Box>
            <Box>{b}</Box>
        </Stack>
    )
}

export const ToggleColorModeButton = ({ ...rest }) => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <IconButton
            // bg={{ light: 'white', dark: 'gray.700' }[colorMode]}
            // size='sm'
            // shadow='sm'

            onClick={toggleColorMode}
            fontSize='1.2em'
            aria-label='color-mode-toggle'
            icon={colorMode === 'dark' ? 'moon' : 'sun'}
            {...rest}
        />
    )
}
