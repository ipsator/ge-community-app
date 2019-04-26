//import { GetDb } from init-firebase.js
const { GetDb } = require("./init-firebase")
const fs = require("fs")

// Add a new document in collection "cities"
function uploadData(collectionName, data) {
  let docrefId = ""
  //console.log("data--", collectionName, data)
  var db = GetDb()
  //console.log("db---------", db);
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

function readCategories() {
  const topicsInModule = [6, 4, 7, 6]
  const categoryName = ["जननी एवं नवजात शिशु की देखभाल", "विशेष जरूरतों वाली महिलाएँ", "संक्रमण की रोकथाम", "गैर संचारित रोग / एनसीडी की रोकथाम"]
  let module = 0
  //let categoryId = '';
  let category = {
    active: true,
    cover: "https://i.imgur.com/xs8D9wZ.png",
    created: "",
    name: "",
    updated: "",
  }

  for (let i = 0; i < categoryName.length; i++) {
    category.name = categoryName[i]
    category.created = Date.now()
    category.updated = Date.now()

    uploadData("categories", category).then(categoryId => {
      console.log("i:", i)
      module = i + 1
      console.log("category id-------------", categoryId)
      for (let j = 0; j < topicsInModule[i]; j++) {
        console.log("src/data/module" + module + "/topic" + j + ".json")
        let rawdata = fs.readFileSync("src/data/module" + module + "/topic" + j + ".json")
        let topic = JSON.parse(rawdata)
        readAndUploadTopics(topic, categoryId)
      }
    })
    if (module === 4) {
      break
    }
    module++
  }
}

function readAndUploadTopics(topicData, categoryId) {
  console.log("topic...")
  let topic = {
    active: true,
    category: "",
    cover: "https://i.imgur.com/xs8D9wZ.png",
    created: "",
    name: "",
    updated: "",
  }
  // for (let slide of topicData.slides) {
  topic.name = topicData.name
  topic.created = Date.now()
  topic.updated = Date.now()
  topic.category = categoryId
  //console.log("category name:", category);
  uploadData("topics", topic).then(topicId => {
    console.log("topicId----", topicId)
    readAndUploadArticles(topicId, topicData)
  })
  //}
}

function readAndUploadArticles(topicId, slides) {
  let article = {
    active: true,
    topic: "",
    cover: "https://i.imgur.com/xs8D9wZ.png",
    created: "",
    name: "",
    updated: "",
    data: [],
    subtitle: "",
    tags: [],
  }
  for (let slide of slides.slides) {
    article.name = slide.name
    article.created = Date.now()
    article.updated = Date.now()
    article.topic = topicId
    article.data = slide.data
    article.subtitle = slide.subtitle ? slide.subtitle : ""
    article.tags = slide.tags ? slide.tags : []
    //console.log("category name:", category);
    uploadData("articles", article).then(topicId => {
      console.log("topicId----", topicId)
    })
  }
}

readCategories()
