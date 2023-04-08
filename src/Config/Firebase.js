import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCX4naEL0qByGwmxummbnLDtNDm0lbAz1I",
  authDomain: "ecommerce-46a44.firebaseapp.com",
  projectId: "ecommerce-46a44",
  storageBucket: "ecommerce-46a44.appspot.com",
  messagingSenderId: "811605736888",
  appId: "1:811605736888:web:d4f5b98e58ba47c042634d"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db = getFirestore(app);
