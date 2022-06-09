// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5bkcg4d0k-OYsQYnsw5AwmtoFClZ6mwo",
  authDomain: "amena-akter.firebaseapp.com",
  projectId: "amena-akter",
  storageBucket: "amena-akter.appspot.com",
  messagingSenderId: "937881728686",
  appId: "1:937881728686:web:eca12b578107856f7c5f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication
const auth = getAuth(app);

export default auth;