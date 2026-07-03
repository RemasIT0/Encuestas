import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDREIECl3uhbW6-6Zj8cMzfCL12JdNRAAs",
  authDomain: "encuesta-dae5e.firebaseapp.com",
  projectId: "encuesta-dae5e",
  storageBucket: "encuesta-dae5e.firebasestorage.app",
  messagingSenderId: "994636065828",
  appId: "1:994636065828:web:93836ef1f01faf0536bcb1",
  measurementId: "G-FVL969JT35"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc,
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
};
