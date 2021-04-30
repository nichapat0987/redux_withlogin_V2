import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBaiTwM3ZdsawHWYnMdpd0bZmQtG2_j288",
    authDomain: "hello-example-react-fire-4642a.firebaseapp.com",
    projectId: "hello-example-react-fire-4642a",
    storageBucket: "hello-example-react-fire-4642a.appspot.com",
    messagingSenderId: "753037223623",
    appId: "1:753037223623:web:64f4307412ee659de340e2"
});

export default firebaseConfig;