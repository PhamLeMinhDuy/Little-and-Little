
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
 
const firebaseConfig = {
    apiKey: "AIzaSyCR6L-NE-B2kn9AjQN9ckFvMi4Wv1qZu2k",
    authDomain: "little-and-little-2364b.firebaseapp.com",
    projectId: "little-and-little-2364b",
    storageBucket: "little-and-little-2364b.appspot.com",
    messagingSenderId: "480722458669",
    appId: "1:480722458669:web:ab5bf7b93c3f9caef2c0a4",
    measurementId: "G-TVK3LB7XXZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);