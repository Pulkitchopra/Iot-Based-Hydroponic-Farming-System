import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import {collection,getDocs,getDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCqpvd8X4LxSuAwDEzZ1Yj5QRTLA0Hjm-g",
  authDomain: "new-app-5be53.firebaseapp.com",
  projectId: "new-app-5be53",
  storageBucket: "new-app-5be53.appspot.com",
  messagingSenderId: "13970666616",
  appId: "1:13970666616:web:fd60a0aeef54911896e98d"
};

const app = firebase.initializeApp(firebaseConfig);

const db =firebase.firestore()

const colRef = collection(db,'Hydroponika')


export default firebase
export {db}
export {colRef}

