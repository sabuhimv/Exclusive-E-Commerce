import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwx9sbzz1Qiy4gtkeS5PIpDXeLT7Rq6kY",
  authDomain: "exclusive-fddbc.firebaseapp.com",
  projectId: "exclusive-fddbc",
  storageBucket: "exclusive-fddbc.appspot.com",
  messagingSenderId: "246434817584",
  appId: "1:246434817584:web:4e69d1f6f92b5cbd5ceff5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
