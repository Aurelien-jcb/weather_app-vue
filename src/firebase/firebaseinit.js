import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWnBRaXYmHDVjzpW8AfxcdSjblp0FmCYY",
    authDomain: "weatherappvue-f78ed.firebaseapp.com",
    projectId: "weatherappvue-f78ed",
    storageBucket: "weatherappvue-f78ed.appspot.com",
    messagingSenderId: "853458270228",
    appId: "1:853458270228:web:3286790cdb4ce130fccf01"
}; 
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();