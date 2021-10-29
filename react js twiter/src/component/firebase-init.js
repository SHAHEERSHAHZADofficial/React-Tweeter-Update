import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut  } from "firebase/auth";
import { getDoc,getFirestore, doc, setDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBZ-Vpv7aZlDh-17tEJqddNmFK2vSKemvk",
    authDomain: "react-js-work.firebaseapp.com",
    projectId: "react-js-work",
    storageBucket: "react-js-work.appspot.com",
    messagingSenderId: "272092869565",
    appId: "1:272092869565:web:da591f0dc83a8a364798d4",
    measurementId: "G-7V9LFQNEFH"
  });

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    signOut,
    firebaseConfig
};