import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAcNXmLfYaiS7PRfL6lmWhxDATgfRnYjG4",
    authDomain: "geo-ninjas-dok.firebaseapp.com",
    databaseURL: "https://geo-ninjas-dok.firebaseio.com",
    projectId: "geo-ninjas-dok",
    storageBucket: "geo-ninjas-dok.appspot.com",
    messagingSenderId: "540958385892",
    appId: "1:540958385892:web:771d957c042ad342c56ef1",
    measurementId: "G-K1RGCC8K24"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()