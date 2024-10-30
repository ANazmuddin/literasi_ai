// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "literasi-ai.firebaseapp.com",
    projectId: "literasi-ai",
    storageBucket: "literasi-ai.appspot.com",
    messagingSenderId: "634070106284",
    appId: "1:634070106284:web:8077ff3d119953bc859f09",
    measurementId: "G-CETLWSTBQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);