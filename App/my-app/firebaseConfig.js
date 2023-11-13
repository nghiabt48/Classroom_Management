// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from "@react-native-firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArTSClx0J8vqRepmyOPUrHIeuF226mNcY",
  authDomain: "classroommgmt-403404.firebaseapp.com",
  projectId: "classroommgmt-403404",
  storageBucket: "classroommgmt-403404.appspot.com",
  messagingSenderId: "394613229476",
  appId: "1:394613229476:web:ec6eacd468cc5f43282331"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

// id: 394613229476-ismr5ihr3eck8htae0dfhtvnsd7fvgco.apps.googleusercontent.com