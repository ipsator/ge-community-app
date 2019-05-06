const { uploadData } = require("./init-firebase")
const fs = require("fs")
const path = require("path")
// Add a new document in collection "cities"

const uploadAssessment = async () => {
  let rawdata = fs.readFileSync("static/data/assessment" + ".json")
  let assessmentData = JSON.parse(rawdata)
  console.log("raw data---", assessmentData)
  assessment = {
    active: true,
    created: Date.now(),
    name: "Assessment1",
    questions: [],
    updated: Date.now(),
  }
  for (let j = 0; j < assessmentData.questions.length; j++) {
    let question = {
      active: true,
      answer: assessmentData.questions[j].answer,
      created: Date.now(),
      updated: Date.now(),
      options: assessmentData.questions[j].options,
      question: assessmentData.questions[j].question,
    }
    console.log(assessmentData.questions[j])
    console.log("assessment.questions", question)
    let quesId = await uploadData("questions", question)
    assessment.questions.push(quesId)
  }
  await uploadData("assessments", assessment, "ge-meri-sakhi")
}

uploadAssessment()
