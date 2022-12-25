import { initializeApp } from '@firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAMTADcSjusnogLeMWYK2C7sg6FItSKeLs",
    authDomain: "home-rental-app-9a1d7.firebaseapp.com",
    databaseURL: "https://home-rental-app-9a1d7-default-rtdb.firebaseio.com",
    projectId: "home-rental-app-9a1d7",
    storageBucket: "home-rental-app-9a1d7.appspot.com",
    messagingSenderId: "680876892319",
    appId: "1:680876892319:web:45febe026832f6b2cac2aa",
    measurementId: "G-W95CZY9TV6"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();



  
  
  