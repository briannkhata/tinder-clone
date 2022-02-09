import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBi4gxL93o58Y-nvjKgKgRbBRzmy7oXyAM",
    authDomain: "tinder-clone-f8ee2.firebaseapp.com",
    projectId: "tinder-clone-f8ee2",
    storageBucket: "tinder-clone-f8ee2.appspot.com",
    messagingSenderId: "590864436117",
    appId: "1:590864436117:web:13788da03265a96324049c",
    measurementId: "G-7SBE8N08LN"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();
  export default database;