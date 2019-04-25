// Firebase App (the core Firebase SDK) is always required and must be listed first
var firebase = require("firebase/app")

// Add the Firebase products that you want to use
require("firebase/auth")
require("firebase/database")
require("firebase/firestore")

// TODO: Replace the following with your app's Firebase project configuration
exports.GetDb = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAaXa-8Cie29bo6blE72MUl1chXaBim1BM",
    authDomain: "ipsator-ge-test-app.firebaseapp.com",
    databaseURL: "https://ipsator-ge-test-app.firebaseio.com",
    projectId: "ipsator-ge-test-app",
    storageBucket: "ipsator-ge-test-app.appspot.com",
    messagingSenderId: "877691189408",
  }

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig)
  db = firebase.firestore(app)
  return db
}
