// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVI6xxrQGXgJYyQYiUOh_IZmKXw7VgDxo",
  authDomain: "mvp-hr-992e1.firebaseapp.com",
  projectId: "mvp-hr-992e1",
  storageBucket: "mvp-hr-992e1.appspot.com",
  messagingSenderId: "514117209219",
  appId: "1:514117209219:web:f177271d2227956f441fb6",
  measurementId: "G-XN7FH3G35C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
