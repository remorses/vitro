import firebase from 'firebase/app'

export const firebaseConfig = {
    apiKey: 'AIzaSyDQ92q-wutft8DqghZ0nbHhAF04AxZjhws',
    authDomain: 'playground-301710.firebaseapp.com',
    projectId: 'playground-301710',
    storageBucket: 'playground-301710.appspot.com',
    messagingSenderId: '948430188396',
    appId: '1:948430188396:web:790e22d729c73d11afcd49',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
