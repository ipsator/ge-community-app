// Firebase App (the core Firebase SDK) is always required and must be listed first
var firebase = require("firebase/app")

// Add the Firebase products that you want to use
require("firebase/auth")
require("firebase/database")
require("firebase/firestore")

// TODO: Replace the following with your app's Firebase project configuration
exports.GetDb = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCvqJVieqi_f_rUp9i9GPZqbg0j-gXhGi0",
    authDomain: "ipsator-ge-test-app.firebaseapp.com",
    databaseURL: "https://ipsator-ge-test-app.firebaseio.com",
    projectId: "ipsator-ge-test-app",
    storageBucket: "ipsator-ge-test-app.appspot.com",
    messagingSenderId: "877691189408",
  }

  // Initialize Firebase
  if (!firebase.apps.length) {
    var app = firebase.initializeApp(firebaseConfig)
    db = firebase.firestore(app)
  }

  return db
}