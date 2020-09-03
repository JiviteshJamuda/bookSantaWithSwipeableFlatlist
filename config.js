import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCS_0v42xB8rMEOYY1I-8nkYUg6Y5-g4is",
  authDomain: "booksanta-bfe61.firebaseapp.com",
  databaseURL: "https://booksanta-bfe61.firebaseio.com",
  projectId: "booksanta-bfe61",
  storageBucket: "booksanta-bfe61.appspot.com",
  messagingSenderId: "426084860044",
  appId: "1:426084860044:web:550e522bd3d002baffbba9",
  measurementId: "G-EEFJZ7WXMX"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
