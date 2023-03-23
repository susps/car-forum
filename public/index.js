// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";

import {
    getAuth,
    connectAuthEmulator,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCIIXLQC5No-EcRHe5G84HfEthmLDZfK4g",
    authDomain: "swift-forum.firebaseapp.com",
    databaseURL: "https://swift-forum-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "swift-forum",
    storageBucket: "swift-forum.appspot.com",
    messagingSenderId: "491971918493",
    appId: "1:491971918493:web:1e9d16587791c5aa347274",
    measurementId: "G-ZYZ2P5W042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPassword = async () => {
    try {
        const loginEmail = document.getElementById("email").value;
        const loginPassword = document.getElementById("password").value;

        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
        alert(userCredential.user.displayName + " has logged in!")
    }
    catch (error) {
        console.log(error);
        if(error.toString().includes("auth/wrong-password")){
            alert("Woops! Wrong password or email! Try again!");
        }
        if(error.toString().includes("auth/invalid-email")){
            alert("Woops! Wrong password or email! Try again!");
        }
    }
}

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", loginEmailPassword);