import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCg8TNFh0o19hVjPWWjen5ZDsZdoMEaRvc",
  authDomain: "somativa2-web.firebaseapp.com",
  projectId: "somativa2-web",
  storageBucket: "somativa2-web.appspot.com",
  messagingSenderId: "138244354750",
  appId: "1:138244354750:web:0d32c98c371ff3f2ec64ef"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase