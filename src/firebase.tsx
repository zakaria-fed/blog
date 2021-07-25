import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGtTzZ1v9STbybUCGzGbJbw3kaD55hA_w",
  authDomain: "blog-b3e93.firebaseapp.com",
  projectId: "blog-b3e93",
  storageBucket: "blog-b3e93.appspot.com",
  messagingSenderId: "1043249888838",
  appId: "1:1043249888838:web:8e05fcb79d97bde1b8d447",
  measurementId: "G-NZN6B4H0PZ",
});

export const db = firebaseApp.firestore();