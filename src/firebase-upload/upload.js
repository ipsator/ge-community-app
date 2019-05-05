//import { GetDb } from init-firebase.js
const { GetDb } = require("./init-firebase")
const fs = require("fs")
const path = require("path")

// Add a new document in collection "cities"

function uploadData(collectionName, data) {
  console.log("data--", data)
  var db = GetDb()
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
      module = i + 1
      for (let j = 0; j < topicsInModule[i]; j++) {
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
    article.tags = getTagIds(slide.tags)
    uploadData("articles", article).then(topicId => {
      console.log("topicId----", topicId)
    })
  }
}

const uploadtags = async () => {
  let tagArr = []

  let tags = fs.readFileSync("static/data/taglist" + ".json")
  tags = JSON.parse(tags)

  for (tagName of tags) {
    let tagObj = { id: String, name: String }
    let tag = { active: true, created: String, name: String }

    tag.created = Date.now()
    tag.name = tagName
    tag.updated = Date.now()

    let tagId = await uploadData("tags", tag)
    tagObj.id = tagId
    tagObj.name = tagName
    tagArr.push(tagObj)
  }
  return tagArr
}

const getTags = async () => {
  let allTags = await uploadtags()
  saveData(allTags, "tagWithId.json")
  //console.log("all Tags--", allTags)
}

const getTagIds = tags => {
  let allTags = fs.readFileSync("static/data/tagWithId" + ".json")
  allTags = JSON.parse(allTags)
  tagIds = []
  if (tags) {
    for (tagName of tags) {
      let filteredTags = allTags.filter(tag => {
        return tagName === tag.name
      })
      tagIds.push(filteredTags[0].id)
    }
  }
  return tagIds
}

const uploadImages = () => {
  let allImages = fs.readFileSync("static/data/images" + ".json")
  allImages = JSON.parse(allImages)

  uploadData("images", allImages).then(imagesId => {
    console.log("images id----", imagesId)
  })
}

const saveData = (data, filename) => {
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(data, undefined, 2), "utf8")
}

getTags()

//readCategories()

//uploadImages()
