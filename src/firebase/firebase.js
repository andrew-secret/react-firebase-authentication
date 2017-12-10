import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCnauF1zx7DifVO_Q_4arIcz_x7cPnH7us',
    authDomain: 'react-firebase-auth-bfe45.firebaseapp.com',
    databaseURL: 'https://react-firebase-auth-bfe45.firebaseio.com',
    projectId: 'react-firebase-auth-bfe45',
    storageBucket: 'react-firebase-auth-bfe45.appspot.com',
    messagingSenderId: '535557616723'
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
  
const auth = firebase.auth();

export {
    auth,
};