// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase configuration here
};

const app = initializeApp(firebaseConfig); // Initialize Firebase app
const auth = getAuth(app); // Get the Auth instance

export { auth, app };
