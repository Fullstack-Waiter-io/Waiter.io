import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA1xa0wxt8Soq2AQIRU47yjJFktlvOAgXQ",
  authDomain: "waiter-io-395214.firebaseapp.com",
  projectId: "waiter-io-395214",
  storageBucket: "waiter-io-395214.appspot.com",
  messagingSenderId: "379346806294",
  appId: "1:379346806294:web:0fbb4afdf6943fff97f737",
  measurementId: "G-2852GR17V5"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth(app);
const storage = firebase.storage(app);
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db, storage };
