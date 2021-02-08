import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDibRvvz-vQzyEVFe4bz9bBF8TiPMP62XU",
  authDomain: "pinterest-clone-bk.firebaseapp.com",
  projectId: "pinterest-clone-bk",
  storageBucket: "pinterest-clone-bk.appspot.com",
  messagingSenderId: "518563518591",
  appId: "1:518563518591:web:431d3ba6470b14e4f4874a",
  measurementId: "G-DJ2JDHPQS6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;