// @jsx jsx
import { getStories, getWrapperComponent } from '../../support'
import { useRouter } from 'next/router'
import { FaBug, FaLink, FaClock } from 'react-icons/fa'
import { jsx, css } from '@emotion/core'
jsx
import {
    Stack,
    Box,
    SimpleGrid,
    Select,
    Button,
    Link,
    BoxProps,
} from '@chakra-ui/core'
import {
    useMemo,
    useState,
    Fragment,
    Profiler,
    ProfilerOnRenderCallback,
    useCallback,
    useRef,
    useEffect,
} from 'react'
import { DebugCSS } from '../../debugCSS'
import { profile } from 'console'
import { FiClock, FiHash, FiZap } from 'react-icons/fi'

export default function Page(props) {
    const [cssDebugEnabled, setCssDebug] = useState(false)
    const [columns, setColumnsCount] = useState(1)
    const stories = getStories()
    const { query } = useRouter()
    const { story = '' } = query
    const GlobalWrapper = useMemo(() => getWrapperComponent(), [])

    // console.log({ story })
    const storyObject = stories
        .map((x) => {
            // console.log(x)
            return x
        })
        .filter(Boolean)
        .find((x) => {
            const path = normalizePath(x.filename || '')
            // console.log(x.getExports())
            const queryPath = normalizePath(
                Array.isArray(story) ? story.join('/') : story,
            )
            // console.log({
            //     path,
            //     queryPath,
            // })
            return path === queryPath
        })
    const vscodeUrl = `vscode://file${storyObject?.absolutePath}`
    const exported = useMemo(() => storyObject?.getExports?.() || {}, [
        storyObject,
    ])
    const StoryWrapper = useMemo(() => exported?.default?.wrapper || Fragment, [
        exported,
    ])
    const storyTitle =
        exported?.default?.title || storyObject?.title || 'Untitled'
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
                spacing='12'
            >
                {Object.keys(exported)
                    .filter((k) => k !== 'default')
                    .map((k, i) => {
                        const Component = exported[k]

                        return (
                            <StoryBlock
                                title={k}
                                blockWidth='100%'
                                key={k + String(i)}
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

const StoryBlock = ({ children, blockWidth, title, ...rest }) => {
    const actualDurationRef = useRef('0.00ms')
    const renderCount = useRef(0)
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
            my='10'
            spacing='3'
            flexShrink={0}
            flexGrow={0}
            // minW='100px'
            flexBasis={blockWidth}
            minH='340px'
            position='relative'
            {...rest}
        >
            <Stack
                spacing='8'
                position='absolute'
                top='10px'
                left='20px'
                right='20px'
                opacity={0.8}
                direction='row'
                align='center'
            >
                <Box
                    borderRadius='md'
                    px='4px'
                    bg='white'
                    fontSize='18px'
                    fontWeight='medium'
                >
                    {title}
                </Box>
                <Box flex='1' />
                <Couple
                    opacity={0.8}
                    a={<Box as={FiZap} size='1em' />}
                    b={
                        <AutoUpdateBox
                            fontWeight='500'
                            contentRef={actualDurationRef}
                        />
                    }
                />
                <Couple
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
                <Profiler id={title} onRender={profile}>
                    {children}
                </Profiler>
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
    const [x, render] = useState(null)
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

export const Couple = ({ a, b, ...rest }) => {
    return (
        <Stack isTruncated direction='row' align='center' spacing='1' {...rest}>
            <Box>{a}</Box>
            <Box>{b}</Box>
        </Stack>
    )
}

function normalizePath(path: string): string {
    return path
        .split('/')
        .map((x) => x.trim())
        .filter((x) => x !== '.')
        .filter(Boolean)
        .join('/')
}
