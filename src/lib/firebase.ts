import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe8OpbLhZ2fil5OpC04spIZD5yDjLoggs",
  authDomain: "skills-sync-56c5a.firebaseapp.com",
  projectId: "skills-sync-56c5a",
  storageBucket: "skills-sync-56c5a.firebasestorage.app",
  messagingSenderId: "233993272519",
  appId: "1:233993272519:web:52ccc45dbcb7fa4c5ed2e2"
};
// Ensure Firebase is initialized only once
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

export { auth, db };
export default app;
