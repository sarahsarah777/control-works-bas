// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpQKo67FSYLfJKhFbpUFtuHvo6lppSZLk",
  authDomain: "control-works-bas.firebaseapp.com",
  projectId: "control-works-bas",
  storageBucket: "control-works-bas.appspot.com",
  messagingSenderId: "157714553558",
  appId: "1:157714553558:web:cb956f63b7304ddf96c777",
  measurementId: "G-KHPRS9Q9X1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);