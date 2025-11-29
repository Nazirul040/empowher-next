import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKM0Xj3c7sudcZCm8k9iEOddODQORl4IA",
  authDomain: "empowher-app.firebaseapp.com",
  projectId: "empowher-app",
  storageBucket: "empowher-app.firebasestorage.app",
  messagingSenderId: "29084952322",
  appId: "1:29084952322:web:21c3e8f4a9b3d15e74c41b"
};

// Initialize Firebase (Singleton pattern for Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const appId = "empowher-app"; // Using project ID as the app ID for data path

export { db, auth, appId };