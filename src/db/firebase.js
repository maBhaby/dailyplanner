import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBK9NB3E0ZkCfsyEZzs59yOt3GxIIj_cjY",
  authDomain: "daily-f2368.firebaseapp.com",
  databaseURL: "https://daily-f2368-default-rtdb.firebaseio.com",
  projectId: "daily-f2368",
  storageBucket: "daily-f2368.appspot.com",
  messagingSenderId: "579033995279",
  appId: "1:579033995279:web:fd9169ec09ef764a582b7a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
