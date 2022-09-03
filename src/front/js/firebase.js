import {
    initializeApp,
    auth
} from "firebase/app ";

const firebaseConfig = {
    apiKey: "AIzaSyAMKVJBMKH6HSrPBLFw92uyDzvRdYgNE3k",
    authDomain: "fixerlogin-6e7c7.firebaseapp.com",
    projectId: "fixerlogin-6e7c7",
    storageBucket: "fixerlogin-6e7c7.appspot.com",
    messagingSenderId: "852246192558",
    appId: "1:852246192558:web:c1c79faf2ce0835957a83f",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider
};