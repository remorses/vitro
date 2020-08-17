import {
    Box,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputGroupProps,
    InputLeftElement,
    Stack,
    useColorMode,
} from '@chakra-ui/core'
import debounce from 'lodash/debounce'
import startCase from 'lodash/startCase'
import NextLink from 'next/link'
import React, { Fragment, useCallback, useMemo, useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import { getExperimentsPaths, version, TOP_TITLE_H } from '../support'

export const ExperimentsNav = ({
    experimentsMap,
    ...p
}: Omit<InputGroupProps, 'children'> & {
    experimentsMap: Record<string, string>
}) => {
    let [filter, setFilter] = useState('')
    filter = filter.toLowerCase()
    const throttledSetFilter = useCallback<any>(debounce(setFilter, 100), [
        setFilter,
    ])
    const { colorMode } = useColorMode()
    const experiments = useMemo(() => getExperimentsPaths(experimentsMap), [
        experimentsMap,
    ])
    return (
        <Stack spacing='6' {...p}>
            <Stack
                height={TOP_TITLE_H}
                direction='row'
                spacing='2'
                align='flex-end'
                pb='10px' // TODO can be removed when story title does not have wrong line height
            >
                <Logo fontSize='24px' />
                <Box flex='1' />
                <Box fontSize='0.9em' fontWeight='500' opacity={0.6}>
                    v{version}
                </Box>
            </Stack>
            <InputGroup
            // opacity={0.7}
            // borderWidth='1px'
            // shadow='sm'
            >
                <InputLeftElement
                    children={<Icon name='search' color='gray.400' />}
                />
                <Input
                    autoFocus={false}
                    onChange={(e) => throttledSetFilter(e?.target?.value)}
                    variant='filled'
                    bg={{ light: 'white', dark: 'gray.700' }[colorMode]}
                    borderRadius='md'
                />
            </InputGroup>
            <Stack spacing='4'>
                {experiments.map(({ title, filename }) => {
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
                                href={`/experiments/${filename}`}
                                // href={`/experiments/[...story]`}
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
        <a href='https://github.com/remorses/vitro' target='_blank'>
            <Stack
                direction='row'
                align='baseline'
                fontFamily='ITF Devangari' // TODO make the logo font outlines
                fontWeight='bold'
                letterSpacing='0.04em'
                spacing='2'
                {...rest}
            >
                <Box as={Beaker} size='1.5em' />
                <Box as={VitroText} h='1.5em' />
            </Stack>
        </a>
    )
}

const VitroText = ({ ...rest }) => {
    return (
        <svg
            viewBox='0 0 182 64'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            {...rest}
        >
            <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
                <g
                    id='Artboard'
                    transform='translate(-426.000000, -109.000000)'
                    fill='currentColor'
                    fillRule='nonzero'
                >
                    <path
                        d='M448.060547,172.457031 L462.5625,136.817383 C463.294922,135.030273 464.041992,133.79248 464.803711,133.104004 C465.56543,132.415527 466.546875,132.027344 467.748047,131.939453 L467.748047,131.939453 L467.748047,129.742188 L454.125,129.742188 L454.125,131.939453 C455.736328,131.96875 456.966797,132.151855 457.816406,132.48877 C458.666016,132.825684 459.09082,133.624023 459.09082,134.883789 C459.09082,135.323242 458.995605,135.923828 458.805176,136.685547 C458.614746,137.447266 458.373047,138.194336 458.080078,138.926758 L458.080078,138.926758 L452.015625,154.307617 L451.3125,154.307617 L444.544922,137.037109 C444.427734,136.744141 444.259277,136.282715 444.039551,135.652832 C443.819824,135.022949 443.709961,134.59082 443.709961,134.356445 C443.709961,133.389648 444.112793,132.759766 444.918457,132.466797 C445.724121,132.173828 446.917969,131.998047 448.5,131.939453 L448.5,131.939453 L448.5,129.742188 L426,129.742188 L426,131.939453 C427.230469,132.056641 428.080078,132.320312 428.548828,132.730469 C429.017578,133.140625 429.662109,134.136719 430.482422,135.71875 C431.273438,137.271484 432.027832,138.868164 432.745605,140.508789 C433.463379,142.149414 434.203125,143.907227 434.964844,145.782227 L434.964844,145.782227 L445.775391,172.457031 L448.060547,172.457031 Z M481.942383,122.974609 C483.84668,122.974609 485.47998,122.293457 486.842285,120.931152 C488.20459,119.568848 488.885742,117.920898 488.885742,115.987305 C488.885742,114.053711 488.20459,112.405762 486.842285,111.043457 C485.47998,109.681152 483.84668,109 481.942383,109 C480.008789,109 478.36084,109.681152 476.998535,111.043457 C475.63623,112.405762 474.955078,114.053711 474.955078,115.987305 C474.955078,117.920898 475.63623,119.568848 476.998535,120.931152 C478.36084,122.293457 480.008789,122.974609 481.942383,122.974609 Z M492.445312,171.182617 L492.445312,169.029297 C490.833984,168.707031 489.735352,168.267578 489.149414,167.710938 C488.563477,167.154297 488.270508,165.894531 488.270508,163.931641 L488.270508,163.931641 L488.270508,129.742188 L471,129.742188 L471,131.939453 C472.816406,132.261719 474.032227,132.752441 474.647461,133.411621 C475.262695,134.070801 475.570312,135.308594 475.570312,137.125 L475.570312,137.125 L475.570312,163.580078 C475.570312,165.630859 475.130859,167.051758 474.251953,167.842773 C473.666016,168.370117 472.582031,168.765625 471,169.029297 L471,169.029297 L471,171.182617 L492.445312,171.182617 Z M510.770508,172.369141 C514.491211,172.369141 517.640625,171.006836 520.21875,168.282227 C521.683594,166.729492 522.943359,164.722656 523.998047,162.261719 L523.998047,162.261719 L521.844727,161.207031 C521.053711,162.671875 520.262695,163.821777 519.47168,164.656738 C518.680664,165.491699 517.699219,165.90918 516.527344,165.90918 C515.179688,165.90918 514.212891,165.25 513.626953,163.931641 C513.246094,163.082031 513.055664,162.027344 513.055664,160.767578 L513.055664,160.767578 L513.055664,133.697266 L521.625,133.697266 L521.625,129.742188 L513.055664,129.742188 L513.055664,114.537109 L510.770508,114.537109 C508.543945,117.964844 506.068359,121.172852 503.34375,124.161133 C501.966797,125.68457 500.501953,127.164062 498.949219,128.599609 C497.777344,129.595703 496.795898,130.459961 496.004883,131.192383 L496.004883,131.192383 L496.004883,133.697266 L500.663086,133.697266 L500.663086,162.876953 C500.663086,166.890625 502.186523,169.65918 505.233398,171.182617 C506.81543,171.973633 508.661133,172.369141 510.770508,172.369141 Z M550.145508,171.182617 L550.145508,169.029297 C547.567383,168.794922 545.846191,168.304199 544.981934,167.557129 C544.117676,166.810059 543.685547,164.942383 543.685547,161.954102 L543.685547,161.954102 L543.685547,144.947266 C543.685547,142.193359 544.293457,140.07666 545.509277,138.597168 C546.725098,137.117676 547.933594,136.37793 549.134766,136.37793 C549.691406,136.37793 550.665527,137.271484 552.057129,139.058594 C553.44873,140.845703 555.09668,141.739258 557.000977,141.739258 C558.670898,141.739258 560.025879,141.167969 561.065918,140.025391 C562.105957,138.882812 562.625977,137.432617 562.625977,135.674805 C562.625977,133.389648 561.88623,131.653809 560.406738,130.467285 C558.927246,129.280762 557.264648,128.6875 555.418945,128.6875 C552.958008,128.6875 550.790039,129.419922 548.915039,130.884766 C547.040039,132.349609 545.150391,134.327148 543.246094,136.817383 L543.246094,136.817383 L543.246094,129.742188 L526.151367,129.742188 L526.151367,131.939453 C528.055664,132.173828 529.330078,132.62793 529.974609,133.301758 C530.619141,133.975586 530.941406,135.25 530.941406,137.125 L530.941406,137.125 L530.941406,161.602539 L530.853516,164.239258 C530.794922,165.99707 530.428711,167.183594 529.754883,167.798828 C529.081055,168.414062 527.879883,168.824219 526.151367,169.029297 L526.151367,169.029297 L526.151367,171.182617 L550.145508,171.182617 Z M586.751953,172.544922 C592.787109,172.544922 597.679688,170.384277 601.429688,166.062988 C605.179688,161.741699 607.054688,156.578125 607.054688,150.572266 C607.054688,144.478516 605.157715,139.292969 601.36377,135.015625 C597.569824,130.738281 592.699219,128.599609 586.751953,128.599609 C580.921875,128.599609 576.080566,130.694336 572.228027,134.883789 C568.375488,139.073242 566.449219,144.302734 566.449219,150.572266 C566.449219,156.8125 568.368164,162.034668 572.206055,166.23877 C576.043945,170.442871 580.892578,172.544922 586.751953,172.544922 Z M586.751953,169.644531 C583.705078,169.644531 581.668945,167.696289 580.643555,163.799805 C579.999023,161.280273 579.676758,156.871094 579.676758,150.572266 C579.676758,144.361328 580.013672,139.952148 580.6875,137.344727 C581.712891,133.448242 583.749023,131.5 586.795898,131.5 C589.579102,131.5 591.446777,133.001465 592.398926,136.004395 C593.351074,139.007324 593.827148,143.863281 593.827148,150.572266 C593.827148,157.310547 593.373047,162.173828 592.464844,165.162109 C591.556641,168.150391 589.652344,169.644531 586.751953,169.644531 Z'
                        id='vitro_text_logo'
                    />
                </g>
            </g>
        </svg>
    )
}

const Beaker = ({ ...rest }) => {
    return (
        <svg viewBox='0 0 73 74' version='1.1' {...rest}>
            <title>BeakerLogo</title>
            <desc>Created with Sketch.</desc>
            <g
                id='Page-1'
                stroke='none'
                strokeWidth={1}
                fill='none'
                fillRule='evenodd'
            >
                <g
                    id='Desktop-HD'
                    transform='translate(-1253.000000, -683.000000)'
                >
                    <g
                        id='BeakerLogo'
                        transform='translate(1256.000000, 685.000000)'
                    >
                        <path
                            d='M7.10699457,2.96165066 L7.10699457,63.5079402 C7.10699457,66.269364 9.34557082,68.5079402 12.1069946,68.5079402 L54.7969833,68.5079402 C57.5584071,68.5079402 59.7969833,66.269364 59.7969833,63.5079402 L59.7969833,2.96165066 L59.7969833,2.96165066'
                            stroke='currentColor'
                            strokeWidth={6}
                        />
                        <path
                            d='M58.5,31.5 L58.5,67.5 L8.5,67.5 L8.5,31.5 L58.5,31.5 Z M39,45.5 C35.9624339,45.5 33.5,47.9624339 33.5,51 C33.5,54.0375661 35.9624339,56.5 39,56.5 C42.0375661,56.5 44.5,54.0375661 44.5,51 C44.5,47.9624339 42.0375661,45.5 39,45.5 Z M25,47.5 C23.0670034,47.5 21.5,49.0670034 21.5,51 C21.5,52.9329966 23.0670034,54.5 25,54.5 C26.9329966,54.5 28.5,52.9329966 28.5,51 C28.5,49.0670034 26.9329966,47.5 25,47.5 Z'
                            id='Combined-Shape'
                            fill='currentColor'
                        />
                        <line
                            x1={67}
                            y1={1}
                            x2={0}
                            y2={1}
                            id='Line-Copy-2'
                            stroke='currentColor'
                            strokeWidth={6}
                            strokeLinecap='round'
                        />
                        <line
                            x1={28}
                            y1={11}
                            x2={19}
                            y2={11}
                            id='Line'
                            stroke='currentColor'
                            strokeWidth={6}
                            strokeLinecap='round'
                        />
                        <line
                            x1={28}
                            y1={21}
                            x2={19}
                            y2={21}
                            id='Line-Copy'
                            stroke='currentColor'
                            strokeWidth={6}
                            strokeLinecap='round'
                        />
                    </g>
                </g>
            </g>
        </svg>
    )
}
