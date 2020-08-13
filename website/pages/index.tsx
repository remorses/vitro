/** @jsx jsx */
import { Box, Image } from '@chakra-ui/core'
import { css, jsx } from '@emotion/core'
import { Faded } from 'baby-i-am-faded'
import {
    Banner,
    Button,
    CodeSnippet,
    Divider,
    Feature,
    Heading,
    Hero,
    PageContainer,
    PatternBackground,
    Section,
    SectionTitle,
    TestimonialsLogos,
    Stack,
    LandingProvider,
    Link,
    NavBar,
    Footer,
} from 'landing-blocks/src'
import React, { Fragment } from 'react'
import {
    FaAngular as AngularIcon,
    FaArrowRight as ArrowRight,
    FaNode as NodeIcon,
    FaReact as ReactIcon,
} from 'react-icons/fa'
import Logo from '../public/vitro_text_and_beaker.svg'
import GradientBgImg from '../public/gradient-bg.svg'
import PlayButton from '../public/play-button.svg'
import { GITHUB_LINK } from '../constants'
jsx

const jsQueryCode = `
import { createClient, everything } from '@genql/my-lib'

await createClient().query({
    User: {
        name: true,
        surname: true,
        address: {
            ...everything,
        }
    }
})`

const gqlQueryCode = `
query {
    User {
        name
        surname
        address {
            city
            state
        }
    }
}`

const Page = () => (
    <LandingProvider
        position='relative'
        minH='100%'
        h='100%'
        black='#333'
        primary='#FDE3FC'
        color='#444'
    >
        <MyNavbar />
        <Box
            opacity={0.8}
            mt='0px !important'
            position='absolute'
            width='100%'
            top='0px'
            zIndex={-1}
            as={GradientBgImg}
        />
        <Hero
            bullet='Introducing Vitro 1.0'
            heading={
                <Heading maxW='600px' fontSize='60px'>
                    Build components <br />
                    in isolation
                </Heading>
            }
            subheading={
                <Box lineHeight='1.6em'>
                    Genql generates a typed graphql client
                    <br /> for your graphql api to use in browser or node.
                </Box>
            }
            cta={<Button>See a demo</Button>}
            // image={<Image h='200px' w='300px' src='/robot.svg' />}
            image={
                <PatternBackground
                    pattern='dotsXl'
                    color='gray.300'
                    scatter={-10}
                >
                    <Box cursor='pointer' width='160px' as={PlayButton} />
                </PatternBackground>
            }
            // cta={<Button>Try Genql in 5 minutes</Button>}
            // fingerprint='Already using Genql? Sign in'
        />
        <Image
            alignSelf='center'
            src='/vitro-site-mockup.jpg'
            width='800px'
            borderRadius='md'
            shadow='sm'
            opacity={0.9}
        />
        <Divider heading='trusted by the best' />
        <TestimonialsLogos
            animate
            // heading='Works everywhere'
            // subheading='browser and node environments'
            testimonials={[
                <Box size='80px' as={ReactIcon} />,
                <Box size='90px' as={AngularIcon} />,
                <Box size='90px' as={NodeIcon} />,
                <Box size='90px' as={AngularIcon} />,

                // <Box size='90px' as={OtherIcon} />,
            ]}
        />

        <Feature
            flip
            heading='Build components seeing changes in real time'
            subheading='Vitro supports fast refresh, changes to code are instantly picked up by the UI.'
            image={
                <Box overflow='hidden' mr='-50%' mb='-50%' zIndex={-1}>
                    <video
                        loop
                        autoPlay
                        muted
                        // @ts-ignore
                        css={css`
                            min-width: 800px;
                            mix-blend-mode: lighten;
                        `}
                        // borderRadius='10px'
                        src='/completion.mp4'
                    />
                </Box>
            }
        />
        <Feature
            heading='Incremental builds for instant start up time'
            subheading={`The start up time is less than 2 seconds, you can start prototyping your react components without waiting all your code base to compile`}
            image={
                <Box overflow='hidden' mr='-60%' mb='-50%' zIndex={-2}>
                    <video
                        loop
                        autoPlay
                        muted
                        // @ts-ignore
                        css={css`
                            min-width: 800px;
                            mix-blend-mode: lighten;
                        `}
                        // borderRadius='10px'
                        src='/validation.mp4'
                    />
                </Box>
            }
        />

        {/* <Section degree={0} zIndex={1} bg='white'>
            <Banner
                //
                heading='Want to use the cli instead?'
                bullet='cli is cool too'
                subheading='You can generate the client locally based on an endpoint or a local graphql schema.'
                bg='transparent'
                image={
                    <Image
                        ml='-60px'
                        minW='300px'
                        width='500px'
                        src='/banner.jpg'
                    />
                }
                cta={
                    <a href='/docs'>
                        <Button>Read the Docs</Button>
                    </a>
                }
            />
        </Section> */}
        <MyFooter />
    </LandingProvider>
)

export function MyFooter({ ...rest }) {
    return (
        <Footer
            businessName='Vitro'
            columns={{
                Resources: [
                    <Link href={GITHUB_LINK}>Github</Link>,
                    <Link href={'/docs'}>Docs</Link>,
                ],
                'Find Us': [
                    <Link href='https://twitter.com/__morse'>Twitter</Link>,
                    <Link href='https://github.com/remorses/'>Github</Link>,
                ],
                'Who made this?': [
                    <Link href='https://twitter.com/__morse'>My Twitter</Link>,
                    <Link href='https://github.com/remorses/'>My Github</Link>,
                ],
                // 'Proudly sponsored by Vercel': [
                //     <Box as={PoweredByVercel} alignSelf='center' />,
                // ],
            }}
            {...rest}
        />
    )
}
export function MyNavbar({ ...rest }) {
    const navs = [
        <Link isExternal href={GITHUB_LINK}>
            Github
        </Link>,
        <Link isExternal href={'/docs'}>
            Docs
        </Link>,
    ]
    return (
        <NavBar
            logo={
                <Logo width='140px' />
                // <Image
                //     width='120px'
                //     stroke='#000'
                //     src='/logo_on_black.svg'
                // />
            }
            navs={navs}
            {...rest}
        />
    )
}

export default Page
