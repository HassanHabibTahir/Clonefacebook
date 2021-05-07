// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD-giv2ccqErfMvRFHc3Atc6jC53FLJEKc",
  authDomain: "createfacebook-1d9a7.firebaseapp.com",
  projectId: "createfacebook-1d9a7",
  storageBucket: "createfacebook-1d9a7.appspot.com",
  messagingSenderId: "37736303827",
  appId: "1:37736303827:web:8ed98c729f4afff9931826",
  measurementId: "G-2PDNKBK29F"
};
var firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db