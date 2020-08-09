import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBbMzZkcib6OQeHfJWX2LhJ4wikYf-x5zk",
    authDomain: "crwn-db-d0d26.firebaseapp.com",
    databaseURL: "https://crwn-db-d0d26.firebaseio.com",
    projectId: "crwn-db-d0d26",
    storageBucket: "crwn-db-d0d26.appspot.com",
    messagingSenderId: "900390107038",
    appId: "1:900390107038:web:e878a689b9d1041ce0c88f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
