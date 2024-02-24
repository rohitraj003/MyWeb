import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBGc8SsCi8iTlWGKtDM6Cwt3BZQW2Vu18Q",
  authDomain: "gdsc-project-aa1b0.firebaseapp.com",
  projectId: "gdsc-project-aa1b0",
  storageBucket: "gdsc-project-aa1b0.appspot.com",
  messagingSenderId: "418027530156",
  appId: "1:418027530156:web:2701405e7d3beec4e7fc09",
  measurementId: "G-7GPTMSQ529"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth};
