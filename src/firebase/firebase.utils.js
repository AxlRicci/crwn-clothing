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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(userRef);
    console.log(snapShot);
    console.log(userAuth);

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
