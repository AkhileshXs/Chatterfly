// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1h3RiB0IXg5tML25crxcWpMKLRdNi95A",
    authDomain: "chatterfly-pse.firebaseapp.com",
    projectId: "chatterfly-pse",
    storageBucket: "chatterfly-pse.appspot.com",
    messagingSenderId: "889410000933",
    appId: "1:889410000933:web:ff287d75693c918dcc87cc",
    measurementId: "G-ZRCFZDNG7G"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Database
const database = firebase.database();
