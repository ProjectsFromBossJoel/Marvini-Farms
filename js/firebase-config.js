// firebase-config.js
// Firebase SDK initialization for the M Farms site (project: Marvini Farms).
//
// ⚠️ Before this will work, register a Web App for this project:
//   Firebase Console → Marvini Farms → Project Overview → "+ Add app" → Web (</>)
//   Firebase will then show you a config object — copy those exact values into
//   firebaseConfig below (apiKey, authDomain, projectId, etc.).
//
// This file only sets up the SDK connection. It does not add Auth, Firestore,
// or Analytics on its own — import and use the pieces you actually need in
// your app code, e.g.:
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
//   import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

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

export default app;