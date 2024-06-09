import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "",
  authDomain: "benny-cdf06.firebaseapp.com",
  projectId: "benny-cdf06",
  storageBucket: "benny-cdf06.appspot.com",
  messagingSenderId: "712572329079",
  appId: "1:712572329079:web:06dccc5babce46477a3a72",
  measurementId: "G-5Q3X3182MG"
};

const app = initializeApp(firebaseConfig);

export default app;
