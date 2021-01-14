import { Box, Stack } from '@chakra-ui/react'
import firebase from 'firebase'
import {
    AuthProvider,
    GoogleButton,
    useAuthData,
} from 'firebase-react-components'
import React from 'react'
import { firebaseConfig } from '../firebase'

export default function Page() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }

    return (
        <Stack align='center' m='10'>
            <AuthProvider
                syncToCookie='FIREBASE_COOKIE' // syncs the user idToken to the cookie FIREBASE_COOKIE
                syncToLocalStorage='FIREBASE_TOKEN' // syncs the user idToken to the local storage
                onLogin={async (user, creds) => {
                    console.log(creds.toJSON())
                }}
                onError={(e) => alert(e.message)}
            >
                <GoogleButton
                    text='Start With Google'
                    // scopes={['https://www.googleapis.com/auth/cloud-platform']}
                />
                <DisplayUser />
            </AuthProvider>
        </Stack>
    )
}

const DisplayUser = () => {
    const { user = {}, loading } = useAuthData()
    if (loading) {
        return <>loading...</>
    }
    return (
        <Box maxWidth='800px' overflowX='scroll'>
            <pre>{JSON.stringify(user, null, 4)}</pre>
        </Box>
    )
}
