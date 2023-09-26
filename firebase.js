// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcLNuRVmNhnc2DX0crdj8PwvEmxLe_bJI",
  authDomain: "fir-auth-293a5.firebaseapp.com",
  projectId: "fir-auth-293a5",
  storageBucket: "fir-auth-293a5.appspot.com",
  messagingSenderId: "953102908711",
  appId: "1:953102908711:web:2d588ba0cc5996a0463d02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app };
