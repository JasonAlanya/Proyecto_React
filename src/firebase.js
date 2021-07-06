import firebase from 'firebase/app'
import "@firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAiXC0kJrhsTxb0UC_9TScQzEQuZG-a2UQ",
    authDomain: "jstore-6c7eb.firebaseapp.com",
    projectId: "jstore-6c7eb",
    storageBucket: "jstore-6c7eb.appspot.com",
    messagingSenderId: "934772386519",
    appId: "1:934772386519:web:2d68fd9dbe1d3330cd9e92",
    measurementId: "G-SRBCMPJ322"
});

export function getFirebase(){
    return app;
}

export function getFireStore(){
    return firebase.firestore(app);
}