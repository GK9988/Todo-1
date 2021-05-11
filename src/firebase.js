import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD2-CBcLSHPLaYEiI9-ZHRIxw4A4dfiH6Y",
        authDomain: "todo-1-58b1d.firebaseapp.com",
        projectId: "todo-1-58b1d",
        storageBucket: "todo-1-58b1d.appspot.com",
        messagingSenderId: "7639104697",
        appId: "1:7639104697:web:f48a4492af3716e74a2f68",
        measurementId: "G-TJC84SCLQH"
})

const db = firebaseApp.firestore();

export default db;