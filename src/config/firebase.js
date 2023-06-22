import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyANY2VVkD0yVbp-pbejhVTRYYwlKBBQhmo',
  authDomain: 'tiktok-ebac-kelly.firebaseapp.com',
  projectId: 'tiktok-ebac-kelly',
  storageBucket: 'tiktok-ebac-kelly.appspot.com',
  messagingSenderId: '806967810218',
  appId: '1:806967810218:web:73e183fe918e0e061f58d3',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
