import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-7efbe.firebaseapp.com",
  projectId: "auth-app-7efbe",
  storageBucket: "auth-app-7efbe.firebasestorage.app",
  messagingSenderId: "447936199572",
  appId: "1:447936199572:web:884f41fc60865bb30c6d81",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);