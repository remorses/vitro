import React from 'react'
import { Box, Stack, Image, Flex } from '@chakra-ui/core'
import { TOP_TITLE_H } from '../support'
import { ToggleColorModeButton } from './ExperimentPage'
import { MobileNav } from './MobileNav'
import { Faded } from 'baby-i-am-faded'
import assign from 'lodash/assign'

assign(Faded, { defaultProps: { cascade: true } })

export function HomePage({ experimentsMap, ...rest }) {
    return (
        <Stack align='stretch' flex='1' width='100%'>
            <Stack w='100%' spacing='10' align='center' justify='center'>
                <Stack
                    height={TOP_TITLE_H}
                    spacing='3'
                    align='center'
                    direction='row'
                    width='100%'
                >
                    <Box flex='1' />
                    <ToggleColorModeButton />
                    <MobileNav
                        display={['flex', null, null, 'none']}
                        experimentsMap={experimentsMap}
                    />
                </Stack>

                <Box lineHeight='1.5em' fontSize='2em' fontWeight='medium'>
                    Vitro helps you build react components in isolation
                </Box>
                <Box
                    lineHeight='1.5em'
                    fontSize='1.4em'
                    opacity={0.6}
                    fontWeight='medium'
                >
                    Navigate to a story page to see the rendered exported
                    components
                </Box>
                <Box h='10' />
                <Flex
                    as={Faded}
                    width='100%'
                    maxWidth='800px'
                    // spacing='10'
                    fontWeight='600'
                    letterSpacing='0.06em'
                    fontSize='1.4em'
                    justify='space-between'
                    align='center'
                    flexWrap='wrap'
                >
                    <Stack
                        w={['100%', null, 'auto']}
                        mx='14'
                        my='12'
                        align='center'
                        spacing='6'
                    >
                        <Box h='80px' as={IsolateStep} />
                        <Box>ISOLATE</Box>
                    </Stack>
                    <Stack
                        my='12'
                        w={['100%', null, 'auto']}
                        mx='14'
                        align='center'
                        spacing='6'
                    >
                        <Box h='80px' as={ShowcaseStep} />
                        <Box>SHOWCASE</Box>
                    </Stack>
                    <Stack
                        my='12'
                        w={['100%', null, 'auto']}
                        mx='14'
                        align='center'
                        spacing='6'
                    >
                        <Box h='80px' as={AnalyzeStep} />
                        <Box>ANALYZE</Box>
                    </Stack>
                    <Stack
                        my='12'
                        w={['100%', null, 'auto']}
                        mx='14'
                        align='center'
                        spacing='6'
                    >
                        <Box h='80px' as={DeployStep} />
                        <Box>DEPLOY</Box>
                    </Stack>
                </Flex>
                {/* <Image w='300px' src={path.join(BASE_PATH, 'share-reuse.png')} /> */}
            </Stack>
        </Stack>
    )
}

const AnalyzeStep = (p) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 189 131' {...p}>
            <defs>
                <linearGradient
                    id='analyze_step-a'
                    x1='50%'
                    x2='50%'
                    y1='0%'
                    y2='100%'
                >
                    <stop offset='0%' stopColor='#B0B0B0' />
                    <stop offset='100%' stopColor='#FEFEFE' stopOpacity={0} />
                </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd' transform='translate(5)'>
                <rect
                    width={126}
                    height={9}
                    x='116.304'
                    y='59.679'
                    fill='#B5B5B5'
                    transform='rotate(90 179.304 64.18)'
                />
                <rect
                    width={126}
                    height={9}
                    x='98.304'
                    y='59.679'
                    fill='#B5B5B5'
                    transform='rotate(90 161.304 64.18)'
                />
                <rect
                    width={126}
                    height={9}
                    x='80.304'
                    y='59.679'
                    fill='#B5B5B5'
                    transform='rotate(90 143.304 64.18)'
                />
                <rect
                    width={126}
                    height={113}
                    x={8}
                    y={7}
                    fill='url(#analyze_step-a)'
                    transform='rotate(90 71 63.5)'
                />
                <g
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={9}
                    transform='translate(0 47)'
                >
                    <circle cx={35} cy={35} r={35} />
                    <line x1={79} x2={60} y1={79} y2={60} />
                </g>
            </g>
        </svg>
    )
}

const IsolateStep = (p) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 131 122' {...p}>
            <defs>
                <linearGradient
                    id='isolate_step-a'
                    x1='50%'
                    x2='50%'
                    y1='0%'
                    y2='100%'
                >
                    <stop offset='0%' stopColor='#B0B0B0' />
                    <stop offset='100%' stopColor='#FEFEFE' stopOpacity={0} />
                </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd' transform='translate(4)'>
                <rect width={82} height={9} x='44.679' fill='#B5B5B5' />
                <rect width={82} height={9} x='44.679' y={18} fill='#B5B5B5' />
                <rect
                    width={126}
                    height={84}
                    y='38.304'
                    fill='url(#isolate_step-a)'
                />
                <g
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={10}
                    transform='translate(1 9)'
                >
                    <polyline points='0 89 45 44.5 0 0' />
                    <line x1={60} x2={121} y1='103.5' y2='103.5' />
                </g>
            </g>
        </svg>
    )
}

const ShowcaseStep = (p) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 185 124' {...p}>
            <defs>
                <linearGradient
                    id='showcase_step-a'
                    x1='50%'
                    x2='50%'
                    y1='0%'
                    y2='100%'
                >
                    <stop offset='0%' stopColor='#B0B0B0' />
                    <stop offset='100%' stopColor='#FEFEFE' stopOpacity={0} />
                </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd'>
                <rect
                    width={65}
                    height={68}
                    x={120}
                    y={56}
                    fill='url(#showcase_step-a)'
                />
                <rect width={91} height={9} x={94} fill='#B5B5B5' />
                <rect width={91} height={9} x={94} y={18} fill='#B5B5B5' />
                <rect width={91} height={9} x={94} y={36} fill='#B5B5B5' />
                <path
                    fill='currentColor'
                    fillRule='nonzero'
                    d='M28.6925795,120 L28.6925795,116.780276 C25.3003534,116.432197 22.991755,115.91008 21.7667845,115.213923 C19.7879859,114.053662 18.7985866,111.965192 18.7985866,108.948513 C18.7985866,107.440174 19.163722,105.395214 19.8939929,102.813633 C20.6242638,100.232052 22.8739694,93.11095 26.6431095,81.4503263 L26.6431095,81.4503263 L64.5229682,81.4503263 L70.5300353,98.5931835 C71.3780919,101.029732 72.0376914,103.350254 72.5088339,105.55475 C72.9799764,107.759246 73.2155477,109.296592 73.2155477,110.166788 C73.2155477,112.777375 72.6030624,114.416244 71.3780919,115.083394 C70.1531213,115.750544 67.4204947,116.316171 63.180212,116.780276 L63.180212,116.780276 L63.180212,120 L100,120 L100,116.780276 C96.6077739,116.200145 94.1931684,115.1124 92.7561837,113.517041 C91.3191991,111.921682 89.3992933,107.759246 86.9964664,101.029732 L86.9964664,101.029732 L50.9540636,0 L48.1272085,0 L17.95053,87.4546773 C13.4275618,100.565627 10.2355713,108.600435 8.3745583,111.559101 C6.51354535,114.517766 3.72202591,116.258158 0,116.780276 L0,116.780276 L0,120 L28.6925795,120 Z M63,75 L30,75 L46.3949045,26 L63,75 Z'
                />
            </g>
        </svg>
    )
}

const DeployStep = (p) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 213 131' {...p}>
            <defs>
                <linearGradient
                    id='deploy_step-a'
                    x1='50%'
                    x2='50%'
                    y1='0%'
                    y2='100%'
                >
                    <stop offset='0%' stopColor='#B0B0B0' />
                    <stop offset='100%' stopColor='#FEFEFE' stopOpacity={0} />
                </linearGradient>
            </defs>
            <g fill='none' fillRule='evenodd' transform='translate(4)'>
                <rect width={93} height={9} x='115.679' fill='#B5B5B5' />
                <rect width={93} height={9} x='115.679' y={18} fill='#B5B5B5' />
                <rect
                    width={126}
                    height={89}
                    x={82}
                    y='38.304'
                    fill='url(#deploy_step-a)'
                />
                <g
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={9}
                    transform='translate(0 18)'
                >
                    <polyline points='91 78 67 54 43 78' />
                    <line x1={67} x2={67} y1={54} y2={108} />
                    <path d='M117.34,92.34 C129.378327,85.7770535 135.435239,71.8875695 132.053243,58.6001437 C128.671246,45.3127179 116.711072,36.0090525 103,36 L95.44,36 C90.4664869,16.7628886 74.1545876,2.57865443 54.413221,0.324605772 C34.6718545,-1.92944288 15.5823947,8.21270098 6.40047695,25.8335601 C-2.78144079,43.4544191 -0.157526398,64.9110179 13,79.8' />
                    <polyline points='91 78 67 54 43 78' />
                </g>
            </g>
        </svg>
    )
}
