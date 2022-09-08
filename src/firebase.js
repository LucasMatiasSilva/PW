import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const database = firebase.firestore();
const auth = firebase.auth();

export { firebase, database, auth };
