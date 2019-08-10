import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyDp9uhM0VTL7imppPMKk8ZrGUyjaDy-1X0",
  authDomain: "crwn-db-8d76b.firebaseapp.com",
  databaseURL: "https://crwn-db-8d76b.firebaseio.com",
  projectId: "crwn-db-8d76b",
  storageBucket: "",
  messagingSenderId: "234043540889",
  appId: "1:234043540889:web:b7ee81b3f5c6c05e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
