import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyDvhxAXstbxuIOiluy2mzr5pV0CPz9miV8",
  authDomain: "boardapp-26ace.firebaseapp.com",
  projectId: "boardapp-26ace",
  storageBucket: "boardapp-26ace.appspot.com",
  messagingSenderId: "229663520935",
  appId: "1:229663520935:web:2da2f4c0eab4c3c7f34382",
  measurementId: "G-QPMWYS4TB1",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
