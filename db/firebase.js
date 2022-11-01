import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZlBvdMPcQHPU8XR_vclIJYvW5wioT_64',
  authDomain: 'workfly-faebf.firebaseapp.com',
  projectId: 'workfly-faebf',
  storageBucket: 'workfly-faebf.appspot.com',
  messagingSenderId: '1078522780386',
  appId: '1:1078522780386:web:4005a75cb974a05b821cbb',
  measurementId: 'G-4BG61SPWNW',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const user = auth.currentUser;
export const db = getFirestore();
