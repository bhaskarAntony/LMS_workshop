// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDa-fhcZWCjIHQQiuaOFUky6QNn7rtYcBY",
  authDomain: "project1-9aabe.firebaseapp.com",
  databaseURL: "https://project1-9aabe-default-rtdb.firebaseio.com",
  projectId: "project1-9aabe",
  storageBucket: "project1-9aabe.appspot.com",
  messagingSenderId: "90868847565",
  appId: "1:90868847565:web:2d6d9930d97d1e0d45aa84",
  measurementId: "G-YXWPHMJQ8E"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
