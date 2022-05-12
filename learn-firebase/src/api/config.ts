import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAglKIW6Uh0R9Ao2U73pD3psIIRBLtZ6Yk',
  authDomain: 'learn-firebase-rn-30675.firebaseapp.com',
  projectId: 'learn-firebase-rn-30675',
  storageBucket: 'learn-firebase-rn-30675.appspot.com',
  messagingSenderId: '474582521837',
  appId: '1:474582521837:web:21b9654d856d040aa0f9e4',
  measurementId: 'G-VLJCE2XFNY',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
