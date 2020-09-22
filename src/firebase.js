import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyChqE8Nnm5OdaDGhPShs2esi2jZHIGDdv0",
    authDomain: "react-firebase-crud-638e2.firebaseapp.com",
    databaseURL: "https://react-firebase-crud-638e2.firebaseio.com",
    projectId: "react-firebase-crud-638e2",
    storageBucket: "react-firebase-crud-638e2.appspot.com",
    messagingSenderId: "328920011934",
    appId: "1:328920011934:web:0d125ef0e026ce6033978f"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();

