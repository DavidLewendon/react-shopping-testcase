import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJfrIjNck6Z10DPx84JKFQy2r-E8Wns0w",
    authDomain: "crwn-db-2472d.firebaseapp.com",
    databaseURL: "https://crwn-db-2472d.firebaseio.com",
    projectId: "crwn-db-2472d",
    storageBucket: "crwn-db-2472d.appspot.com",
    messagingSenderId: "945718115813",
    appId: "1:945718115813:web:9539be37dc341ddb81430c"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
