import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsWb5afqL5gBm4mObrHGUi3VsG0FLPB2Y",
  authDomain: "lander-demo-c09d1.firebaseapp.com",
  projectId: "lander-demo-c09d1",
  storageBucket: "lander-demo-c09d1.firebasestorage.app",
  messagingSenderId: "910223112233",
  appId: "1:910223112233:web:1609ccb1fc28dc7670c438"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

