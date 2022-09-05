import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMKVJBMKH6HSrPBLFw92uyDzvRdYgNE3k",
  authDomain: "fixerlogin-6e7c7.firebaseapp.com",
  projectId: "fixerlogin-6e7c7",
  storageBucket: "fixerlogin-6e7c7.appspot.com",
  messagingSenderId: "852246192558",
  appId: "1:852246192558:web:c1c79faf2ce0835957a83f",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider, app };
