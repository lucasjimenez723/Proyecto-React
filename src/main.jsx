import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn2ahJwcUKeYHd8iJbaG4dIATZHRFxIxQ",
  authDomain: "proyecto-react-b1c72.firebaseapp.com",
  projectId: "proyecto-react-b1c72",
  storageBucket: "proyecto-react-b1c72.appspot.com",
  messagingSenderId: "26166587350",
  appId: "1:26166587350:web:42e86ae75bd767a88dbe77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)