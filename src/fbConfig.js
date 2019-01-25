import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDVz0E24G0-pKISdduX7auwao4wdiKGoR8",
    authDomain: "post-it-notes-9782.firebaseapp.com",
    databaseURL: "https://post-it-notes-9782.firebaseio.com",
    projectId: "post-it-notes-9782",
    storageBucket: "post-it-notes-9782.appspot.com",
    messagingSenderId: "958126559097"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({});

  export default firebase;