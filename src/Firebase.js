// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGniRCGQI5PQUTdPchQjY4tmasOSw1KtE",
  authDomain: "todo-app-7fc94.firebaseapp.com",
  databaseURL: "https://todo-app-7fc94.firebaseio.com",
  projectId: "todo-app-7fc94",
  storageBucket: "todo-app-7fc94.appspot.com",
  messagingSenderId: "1000173997171",
  appId: "1:1000173997171:web:1102fa6228c6b39c83ae06",
  measurementId: "G-CVD6EEFWWK",
});

const db = firebaseApp.firestore();
export default db;
