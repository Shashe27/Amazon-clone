import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { collection, getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyCsVozBess5YMKowtGqnxTVfYNibYJerXg",
  authDomain: "clone3-a8371.firebaseapp.com",
  projectId: "clone3-a8371",
  storageBucket: "clone3-a8371.appspot.com",
  messagingSenderId: "650742632695",
  appId: "1:650742632695:web:507ed1587f992ba59fc3f2",
  measurementId: "G-XYQ4MDQBPL",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore;
// const db = getFirestore(app);

export {auth, db };

