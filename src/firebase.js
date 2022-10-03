// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8GWAzLdg8FHF9M5LvxyHbNoT-IjcAmc4",
  authDomain: "fir-auth-yt-ca7c5.firebaseapp.com",
  projectId: "fir-auth-yt-ca7c5",
  storageBucket: "fir-auth-yt-ca7c5.appspot.com",
  messagingSenderId: "641287863209",
  appId: "1:641287863209:web:6bc3491fdc7e161ca4e2b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app