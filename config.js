import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBJBgeKoq5kc2ORurFRbYmUkOzuMGxrHUE",
    authDomain: "poject-71.firebaseapp.com",
    projectId: "poject-71",
    storageBucket: "poject-71.appspot.com",
    messagingSenderId: "1063511780951",
    appId: "1:1063511780951:web:6a736ca383367a6cea3d12"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
