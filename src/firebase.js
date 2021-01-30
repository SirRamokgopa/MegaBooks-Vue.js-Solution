import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTpVZpB1Er640ZihDD62xnDN0pDbJ-RNg",
    authDomain: "itsmegabooks.firebaseapp.com",
    projectId: "itsmegabooks",
    storageBucket: "itsmegabooks.appspot.com",
    messagingSenderId: "593504640902",
    appId: "1:593504640902:web:58535867dd756f05f51607"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
