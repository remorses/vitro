// @jsx jsx
import {
    Box,
    BoxProps,
    Button,
    Collapse,
    IconButton,
    Link,
    Skeleton,
    Stack,
    StackProps,
    Switch,
    useColorMode,
} from '@chakra-ui/core'
import { jsx } from '@emotion/core'
import { atom, useAtom } from 'jotai'
import React, {
    Fragment,
    Profiler,
    ProfilerOnRenderCallback,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import { FaBug, FaLink } from 'react-icons/fa'
import { FiHash, FiZap } from 'react-icons/fi'
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md'
import { isValidElementType } from 'react-is'
import { changeParam, getParam, useRouteChanged } from '../history'
import {
    formatPathToTitle,
    TOP_TITLE_H,
    usePromise,
    VITRO_BLOCK_CLASS,
} from '../support'
import {
    ClickToSourceProviderStateless,
    ClickToSourceState,
    getGitCodeLink,
    GitProvider,
    LinksConfig,
} from './ClickToSource'
import { DefaultWrapper } from './DefaultWrapper'
import { MdxStyler } from './MarkdownStyler'
import { MobileNav } from './MobileNav'
import path from 'path'

jsx

const atomCssDebug = atom(false)
const atomClickToSource = atom<ClickToSourceState['provider']>('')
const atomStoryInFullScreen = atom(
    getParam(window.location.href, 'inFullScreen') || '',
)

const mdxComponentPrefix = 'VitroMdx'
const exportsOrderingName = '__vitroExportsOrdering'

export function ExperimentPage({
    experimentsTree,
    sourceExperimentPath,
    config,
    root,
    componentsOverrides,
    fileExports: getFileExports = () => Promise.resolve({}),
}) {
    const { colorMode, toggleColorMode } = useColorMode()
    const [, setCssDebug] = useAtom(atomCssDebug)
    const preferredClickToSourceProvider = getPreferredProvider(config.links) // TODO make preferredClickToSourceProvider configurable
    const [clickToSeeSourceProvider, setClickToSeeSource] = useAtom(
        atomClickToSource,
    )
    const [, setStoryInFullScreen] = useAtom(atomStoryInFullScreen)
    useRouteChanged(() => {
        const newStory = getParam(window.location.href, 'inFullScreen')
        setStoryInFullScreen(newStory) // TODO this will be called on every url change
    })
    const importResult = usePromise(getFileExports, {})

    // TODO make useComponentExport hook that memoizes a component export and check it's valid component

    // exported.then(z => console.log(Object.keys(z)))
    // console.log({ fileExports })

    const experimentTitle = importResult.loading
        ? ''
        : importResult.value?.default?.title ||
          formatPathToTitle(sourceExperimentPath) ||
          ''

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
                        {importResult.loading ? (
                            <Skeleton>Loading the page</Skeleton>
                        ) : (
                            experimentTitle
                        )}
                    </Box>
                    <Box flex='1' />
                    <ToggleColorModeButton
                        mr={['0px', null, null, '-10px !important']}
                    />
                    <MobileNav
                        display={['flex', null, null, 'none']}
                        experimentsTree={experimentsTree}
                    />
                </Stack>
                {/* <Box fontSize='18px' opacity={0.6}>
                    powered by vitro
                </Box> */}
                <OpenInEditorLink
                    filePath={sourceExperimentPath}
                    root={root}
                    linksConfig={config.links || {}}
                />
            </Stack>
            {/* <Box flexShrink={0} h='4' /> */}
            <Stack align='center' flexShrink={0} direction='row'>
                <Box flex='1' />
                <Button
                    onClick={() => setCssDebug((x) => !x)}
                    opacity={0.8}
                    bg={bg}
                    w='auto'
                >
                    <Box mr='2' d='inline-block' as={FaBug} />
                    CSS debug
                </Button>

                <Button
                    bg={bg}
                    // placeholder='click to see source'
                    onClick={() =>
                        clickToSeeSourceProvider
                            ? setClickToSeeSource('')
                            : setClickToSeeSource(
                                  preferredClickToSourceProvider,
                              )
                    }
                    w='auto'
                    fontWeight={500}
                    as={Button}
                >
                    <Stack direction='row' spacing='2'>
                        <Switch
                            pointerEvents='none'
                            isChecked={Boolean(clickToSeeSourceProvider)}
                        />
                        <Box minWidth='190px'>
                            {clickToSeeSourceProvider
                                ? 'Click to source enabled'
                                : 'Click to source disabled '}
                        </Box>
                    </Stack>
                </Button>
            </Stack>

            <Stack
                flexShrink={0}
                // direction='row'
                flexWrap='wrap'
                overflow='visible'
                // justify='space-between'
            >
                <MainContent
                    config={config}
                    root={root}
                    componentsOverrides={componentsOverrides}
                    sourceExperimentPath={sourceExperimentPath}
                    importResult={importResult}
                />
            </Stack>
        </Stack>
    )
}

function getPreferredProvider(linksConfig: LinksConfig = {}): GitProvider {
    if (process.env.NODE_ENV === 'development') {
        return 'vscode'
    }
    if (linksConfig.github) {
        return 'github'
    }
    if (linksConfig.gitlab) {
        return 'gitlab'
    }
    console.warn(
        'To enable click to source the vitro app owner needs to pass config.links option',
    ) // TODO add doc links
    return ''
}

function MainContent({
    importResult,
    config,
    root,
    componentsOverrides,
    sourceExperimentPath,
}) {
    const { colorMode } = useColorMode()
    const fileExportsObject = importResult.value
    const [storyInFullScreen] = useAtom(atomStoryInFullScreen)
    const {
        value: overridesExports,
        error: overridesError,
        loading: overridesLoading,
    } = usePromise(componentsOverrides, {})
    const loading = importResult.loading || overridesLoading
    const error = importResult.error || overridesError

    const ValidGlobalWrapper = useMemo(
        () =>
            !overridesExports || !isValidElementType(overridesExports.Wrapper)
                ? DefaultWrapper
                : overridesExports.Wrapper,
        [overridesExports, colorMode],
    )

    const ExperimentWrapper = useMemo(() => {
        const experimentWrapper = fileExportsObject?.default?.wrapper
        return experimentWrapper || FragmentLike
    }, [fileExportsObject, colorMode])

    const reorderedExportsKeys = useMemo(() => {
        const exportsOrder = fileExportsObject?.[exportsOrderingName] || []
        return Object.keys(fileExportsObject)
            .sort((a, b) => {
                return exportsOrder.indexOf(a) - exportsOrder.indexOf(b)
            })
            .filter((k) => {
                const Component = fileExportsObject[k]
                return (
                    k !== 'default' &&
                    k !== exportsOrderingName &&
                    isValidElementType(Component)
                )
            })
    }, [fileExportsObject])
    if (error) {
        return (
            <Stack>
                <Box
                    color='red.500'
                    fontSize='0.9em'
                    wordBreak='break-word'
                    whiteSpace='pre-wrap'
                    as='pre'
                >
                    {error?.stack}
                </Box>
            </Stack>
        )
    }
    if (loading && storyInFullScreen) {
        return (
            <Skeleton>
                <Box
                    bg={{ dark: 'gray.800', light: 'gray.100' }[colorMode]}
                    zIndex={100000}
                    top={0}
                    opacity={1}
                    bottom={0}
                    right={0}
                    left={0}
                    position='fixed'
                    borderRadius='4px'
                />
            </Skeleton>
        )
    }
    if (loading) {
        return (
            <Stack spacing='16'>
                {new Array(3).fill(null).map((_, i) => {
                    return (
                        <Skeleton
                            borderRadius='4px'
                            key={i}
                            width='100%'
                            height='300px'
                        />
                    )
                })}
            </Stack>
        )
    }

    if (!loading && fileExportsObject) {
        if (storyInFullScreen) {
            const componentProps = {
                key: colorMode,
                isDark: colorMode == 'dark',
                isFullScreen: true,
            }
            const Component = fileExportsObject[storyInFullScreen]
            if (!Component) {
                return null
            }
            const id = `${sourceExperimentPath}/${storyInFullScreen}`
            return (
                <StoryBlock
                    root={root}
                    config={config}
                    exportName={storyInFullScreen}
                    key={id}
                    id={id}
                >
                    <ValidGlobalWrapper {...componentProps}>
                        <ExperimentWrapper {...componentProps}>
                            <Component {...componentProps} />
                        </ExperimentWrapper>
                    </ValidGlobalWrapper>
                </StoryBlock>
            )
        }
        return (
            <Stack spacing='16'>
                {reorderedExportsKeys.map((exportName) => {
                    // console.log({ Component })
                    const Component = fileExportsObject[exportName]
                    const id = `${sourceExperimentPath}/${exportName}`
                    if (exportName.startsWith(mdxComponentPrefix)) {
                        return (
                            <MdxStyler key={id}>
                                <Component />
                            </MdxStyler>
                        )
                    }
                    const componentProps = {
                        key: colorMode + storyInFullScreen, // TODO remounting on color mode change or the providers get fucked up
                        isDark: colorMode == 'dark',
                        isFullScreen: storyInFullScreen === exportName,
                    }
                    return (
                        <StoryBlock
                            root={root}
                            config={config}
                            exportName={exportName}
                            key={id}
                            id={id}
                        >
                            <ValidGlobalWrapper {...componentProps}>
                                <ExperimentWrapper {...componentProps}>
                                    <Component {...componentProps} />
                                </ExperimentWrapper>
                            </ValidGlobalWrapper>
                        </StoryBlock>
                    )
                })}
            </Stack>
        )
    }
    return null
}

const StoryBlock = ({
    children,
    blockWidth = '100%',
    id,
    config,
    root,
    exportName,
    ...rest
}) => {
    const [fullScreenStory] = useAtom(atomStoryInFullScreen)
    const isFullScreen = exportName === fullScreenStory

    const [cssDebugEnabled] = useAtom(atomCssDebug)
    const [clickToSeeSourceProvider, setClickToSeeSource] = useAtom(
        atomClickToSource,
    )
    const { colorMode } = useColorMode()
    const bg = useMemo(
        () => ({ light: 'white', dark: 'gray.700' }[colorMode]),
        [colorMode],
    )

    const fullScreenStyles: StackProps = useMemo(
        () => ({
            w: '100vw',
            maxW: '100vw',
            minHeight: '100%',
            // p: '50px',
            pt: '20px',
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

    useEffect(() => {
        if (!Profiler) {
            console.warn(
                'your current react version does not export `Profiler`, some features are disabled',
            )
        }
    }, [])

    const actualDurationRef = useRef('0.00ms')
    const renderCount = useRef(0)

    // renderCount.current = 0
    // console.log({ id })
    const profile: ProfilerOnRenderCallback = useCallback(
        (id, _, actualDuration) => {
            // console.log({ id, actualDuration })
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
            overflow='visible'
            flexBasis={blockWidth}
            position='relative'
            maxW='100%'
            overflowX='auto'
            {...rest}
            {...(isFullScreen ? fullScreenStyles : {})}
        >
            <Stack
                spacing='8'
                mx={isFullScreen ? '20px' : ''}
                direction='row'
                align='center'
            >
                <Box
                    borderRadius='md'
                    p='4px'
                    fontSize='18px'
                    fontWeight='medium'
                >
                    {formatPathToTitle(exportName)}
                </Box>
                <Box flex='1' />
                <Couple
                    borderRadius='md'
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
                    // isRound
                    size='sm'
                    onClick={() =>
                        changeParam(
                            'inFullScreen',
                            isFullScreen ? '' : exportName,
                        )
                    }
                    fontSize='1.4em'
                    // bg='transparent'
                    icon={isFullScreen ? MdFullscreenExit : MdFullscreen}
                    aria-label='full-screen'
                />
            </Stack>
            <Box
                // spacing='0'
                flexShrink={0}
                flex='1'
                minH='340px'
                minHeight='340px'
                data-vitro-export-name={exportName}
                className={`${VITRO_BLOCK_CLASS}`}
            >
                {/* Block */}
                <Stack
                    minH='340px'
                    height='100%'
                    shadow='sm'
                    flex='1'
                    borderRadius='4px'
                    overflow='hidden'
                    overflowX='auto'
                    bg={bg}
                    spacing='0'
                    align='stretch'
                    justify='center'
                >
                    <ClickToSourceProviderStateless
                        root={root}
                        value={{
                            provider: clickToSeeSourceProvider,
                        }}
                        linksConfig={config.links}
                        onChange={(state) => {
                            setClickToSeeSource(state.provider)
                        }}
                    >
                        <Stack
                            // flex='1'
                            width='100%'
                            height='100%'
                            minH='100%'
                            minW='100%'
                            spacing='0'
                            align='center'
                            justify='center'
                            className={`${
                                cssDebugEnabled ? 'vitro-inspect-css' : ''
                            }`}
                        >
                            <ErrorBoundary>
                                {Profiler ? (
                                    <Profiler id={id} onRender={profile}>
                                        {children}
                                    </Profiler>
                                ) : (
                                    children
                                )}
                            </ErrorBoundary>
                        </Stack>
                    </ClickToSourceProviderStateless>
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

export const Couple = ({ a, b, hide = false, ...rest }) => {
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

function FragmentLike({ children }) {
    return <Fragment children={children} />
}

function OpenInEditorLink({ filePath, root, linksConfig = {} as LinksConfig }) {
    const isDev = process.env.NODE_ENV == 'development'
    let href = ''
    let title = ''
    if (isDev) {
        href = `vscode://file${filePath}`
        title = 'Open in VScode'
    } else if (linksConfig.github) {
        href = getGitCodeLink({
            linksConfig,
            filePath,
            root,
            provider: 'github', // TODO make provider configurable via config
        })
        title = 'Open in Github'
    } else if (linksConfig.gitlab) {
        href = getGitCodeLink({
            linksConfig,
            filePath,
            root,
            provider: 'gitlab',
        })
        title = 'Open in Gitlab'
    }

    if (!href) {
        return null
    }

    return (
        <Link as='a' fontWeight='500' href={href} opacity={0.7}>
            <Box d='inline' size='.8em' mr='3' as={FaLink} />
            {title}
        </Link>
    )
}
