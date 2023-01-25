import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvTCNkCI8GytRVHQoGH0RFDTX5H1b5hVw",
  authDomain: "ecommerce-db-7908f.firebaseapp.com",
  projectId: "ecommerce-db-7908f",
  storageBucket: "ecommerce-db-7908f.appspot.com",
  messagingSenderId: "576457920942",
  appId: "1:576457920942:web:d555fe8d0b5fe6b6d4f83f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);