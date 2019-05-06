//import { GetDb } from init-firebase.js
const { GetDb } = require("./init-firebase")
const fs = require("fs")
const path = require("path")

// Add a new document in collection "cities"

function uploadData(collectionName, data, id) {
  console.log("data--", data)
  var db = GetDb()
  if (id) {
    return db
      .collection(collectionName)
      .doc(id)
      .set(data)
      .then(docRef => {
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
function readCategories() {
  const topicsInModule = [6, 4, 7, 6]
  const categoryName = [
    { name: "जननी एवं नवजात शिशु की देखभाल", cover: "https://ipsator.github.io/ge-community-app/images/module1/topic0/module-1-topic-1-slide-3.png" },
    { name: "विशेष जरूरतों वाली महिलाएँ", cover: "https://ipsator.github.io/ge-community-app/images/module2/topic1/module-2-topic-1-slide-2.png" },
    { name: "संक्रमण की रोकथाम", cover: "https://ipsator.github.io/ge-community-app/images/module-3-topic-0-slide-3.png" },
    {
      name: "गैर संचारित रोग / एनसीडी की रोकथाम",
      cover: "https://ipsator.github.io/ge-community-app/images/module4/topic1/module-4-topic-1-slide-2.png",
    },
  ]
  let module = 0
  //let categoryId = '';

  for (let i = 0; i < categoryName.length; i++) {
    let category = {
      active: true,
      created: Date.now(),
      updated: Date.now(),
      name: categoryName[i].name,
      cover: categoryName[i].cover,
    }

    uploadData("categories", category, `category-${module}`).then(categoryId => {
      module = i + 1
      for (let j = 0; j < topicsInModule[i]; j++) {
        let rawdata = fs.readFileSync("src/data/module" + module + "/topic" + j + ".json")
        let topic = JSON.parse(rawdata)
        readAndUploadTopics(topic, categoryId, j)
      }
    })
    if (module === 4) {
      break
    }
    module++
  }
}

function readAndUploadTopics(topicData, categoryId, topicIndex) {
  let topic = {
    active: true,
    category: "",
    cover: "",
    created: "",
    name: "",
    updated: "",
  }
  // for (let slide of topicData.slides) {
  topic.name = topicData.name
  topic.created = Date.now()
  topic.updated = Date.now()
  topic.cover = topicData.cover ? topicData.cover : ""
  topic.category = categoryId
  //console.log("category name:", category);
  uploadData("topics", topic, `${categoryId}-topic-${topicIndex}`).then(topicId => {
    console.log("topicId----", topicId)
    readAndUploadArticles(topicId, topicData)
  })
  //}
}

function readAndUploadArticles(topicId, slides) {
  let article = {
    active: true,
    topic: "",
    cover: "",
    created: "",
    name: "",
    updated: "",
    data: [],
    subtitle: "",
    tags: [],
  }
  let index = 0
  for (let slide of slides.slides) {
    article.name = slide.name
    article.created = Date.now()
    article.updated = Date.now()
    article.cover = slide.cover ? slide.cover : ""
    article.topic = topicId
    article.data = slide.data
    article.subtitle = slide.subtitle ? slide.subtitle : ""
    article.tags = getTagIds(slide.tags)
    uploadData("articles", article, `${topicId}-article-${index}`).then(topicId => {
      console.log("topicId----", topicId)
    })
    index++
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
  console.log("tags--", allTags)
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

  uploadData("images", { urls: allImages }, "images-list").then(imagesId => {
    console.log("images id----", imagesId)
  })
}

const saveData = (data, filename) => {
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(data, undefined, 2), "utf8")
}

//getTags()

//readCategories()

uploadImages()
