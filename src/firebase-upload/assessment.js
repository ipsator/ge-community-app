const { GetDb } = require("./init-firebase")
const fs = require("fs")
const path = require("path")
// Add a new document in collection "cities"

function uploadData(collectionName, data) {
  let db = GetDb()
  let id = db
    .collection(collectionName)
    .add(data)
    .then(function(docRef) {
      console.log("Document successfully written!", docRef.id)
      return docRef.id
    })
    .catch(function(error) {
      console.error("Error writing document: ", error)
    })
  return id
}

const uploadAssessment = async () => {
  let rawdata = fs.readFileSync("static/data/assessment" + ".json")
  let assessmentData = JSON.parse(rawdata)
  assessment = {
    active: true,
    created: Date.now(),
    name: "Assessment1",
    questions: [],
    updated: Date.now(),
  }
  question = {
    active: true,
    answer: 0,
    created: String,
    updated: String,
    options: [],
    question: String,
  }
  for (let j = 0; j < assessmentData.questions.length; j++) {
    console.log(assessmentData.questions[j])
    question.answer = assessmentData.questions[j].answer
    question.created = Date.now()
    question.updated = Date.now()
    question.options = assessmentData.questions[j].options
    question.question = assessmentData.questions[j].question
    console.log("assessment.questions", question)
    let quesId = await uploadData("questions", question)
    assessment.questions.push(quesId)
  }
  await uploadData("assessment", assessment)
}

uploadAssessment()
