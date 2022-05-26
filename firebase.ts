// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBkxYMIm-WcqInJzvgMQyA_He8_E5lx7Is',
  authDomain: 'netflix-d2385.firebaseapp.com',
  projectId: 'netflix-d2385',
  storageBucket: 'netflix-d2385.appspot.com',
  messagingSenderId: '610894001632',
  appId: '1:610894001632:web:cb8b89f144dc35a205a785',
  measurementId: 'G-CKNEDZDSDY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
