// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZIdHn92Sic7EEeh135FXAWnGh-BVFI3w",
  authDomain: "combo-immigration.firebaseapp.com",
  projectId: "combo-immigration",
  storageBucket: "combo-immigration.appspot.com",
  messagingSenderId: "1009064979463",
  appId: "1:1009064979463:web:d92241c874de04e7c90ea2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
