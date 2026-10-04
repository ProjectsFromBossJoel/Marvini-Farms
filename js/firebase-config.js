// js/firebase-config.js
// If M-Farms already has a firebase-config.js, keep yours and just make sure
// it exports: db, doc, collection, where, query, onSnapshot.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  where,
  query,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Paste the web config of the Firebase project that holds the M-Farms "news" collection
// (Project settings → General → Your apps).
const firebaseConfig = {
  apiKey: "AIzaSyDzqezdxe_CfY8Y3fyv1eGihUZgTy4gQMY",
  authDomain: "marvini--farms.firebaseapp.com",
  projectId: "marvini--farms",
  storageBucket: "marvini--farms.firebasestorage.app",
  messagingSenderId: "89008049986",
  appId: "1:89008049986:web:2cad9338f3ec317c3a02db",
  measurementId: "G-0N4CTGY0SE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { collection, doc, where, query, onSnapshot };