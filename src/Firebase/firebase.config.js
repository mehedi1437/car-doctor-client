// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFwVmFCMzNVfOFlqkbmSFxLtBxgyeeH8I",
  authDomain: "cars-doctor-c40b8.firebaseapp.com",
  projectId: "cars-doctor-c40b8",
  storageBucket: "cars-doctor-c40b8.firebasestorage.app",
  messagingSenderId: "801790885708",
  appId: "1:801790885708:web:3695de87748151a0efd9e9"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;