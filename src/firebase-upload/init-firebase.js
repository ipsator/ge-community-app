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
    authDomain: "dummy-project-a80b4.firebaseapp.com",
    databaseURL: "https://dummy-project-a80b4.firebaseio.com",
    projectId: "dummy-project-a80b4",
    storageBucket: "dummy-project-a80b4.appspot.com",
    messagingSenderId: "972399568038",
  }

  // Initialize Firebase
  if (!firebase.apps.length) {
    var app = firebase.initializeApp(firebaseConfig)
    db = firebase.firestore(app)
  }

  return db
}
