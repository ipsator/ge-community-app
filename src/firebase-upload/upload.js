//import { GetDb } from init-firebase.js
const { GetDb } = require("./init-firebase")

// Add a new document in collection "cities"
function uploadData() {
  console.log("-----------------")
  var db = GetDb()
  console.log("db---------", db)
  db.collection("cities")
    .doc("LA")
    .set({
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    })
    .then(function() {
      console.log("Document successfully written!")
    })
    .catch(function(error) {
      console.error("Error writing document: ", error)
    })
}

uploadData()
