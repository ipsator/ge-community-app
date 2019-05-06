// Firebase App (the core Firebase SDK) is always required and must be listed first
var firebase = require("firebase/app")

// Add the Firebase products that you want to use
require("firebase/auth")
require("firebase/database")
require("firebase/firestore")

// TODO: Replace the following with your app's Firebase project configuration
const GetDb = () => {
  const firebaseConfig =
    process.env.NODE_ENV === "production"
      ? {
          apiKey: "AIzaSyAyZfMkZJbINLlcXvCES7Z_2Dumc1PnLA0",
          authDomain: "ge-meri-sakhi.firebaseapp.com",
          databaseURL: "https://ge-meri-sakhi.firebaseio.com",
          projectId: "ge-meri-sakhi",
          storageBucket: "ge-meri-sakhi.appspot.com",
          messagingSenderId: "85072492127",
        }
      : {
          apiKey: "AIzaSyAaXa-8Cie29bo6blE72MUl1chXaBim1BM",
          authDomain: "dummy-project-a80b4.firebaseapp.com",
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

exports.uploadData = (collectionName, data, id) => {
  console.log("data--", data)
  var db = GetDb()
  if (id) {
    return db
      .collection(collectionName)
      .doc(id)
      .set(data)
      .then(() => {
        console.log("Document successfully written!", id)
        return id
      })
      .catch(err => {
        console.error("Error writing document: ", err)
      })
  }
  return db
    .collection(collectionName)
    .add(data)
    .then(function(docRef) {
      console.log("Document successfully written!", docRef.id)
      return docRef.id
    })
    .catch(function(error) {
      console.error("Error writing document: ", error)
    })
}
