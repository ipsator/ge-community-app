const fs = require("fs")
const path = require("path")

const saveData = (data, filename) => {
  fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(data, undefined, 2), "utf8")
}

const readCategories = () => {
  const topicsInModule = [6, 4, 7, 6]
  const categoryInfo = [
    { id: "9Zbj5oJ2zeAXjZAAcShd", name: "जननी एवं नवजात शिशु की देखभाल" },
    { id: "SNiCHJ7i4U6yhsd598De", name: "विशेष जरूरतों वाली महिलाएँ" },
    { id: "d8BUHfMvEgofMIOC7QT0", name: "संक्रमण की रोकथाम" },
    { id: "xzffsr52CN0CdAyDRtCf", name: "गैर संचारित रोग / एनसीडी की रोकथाम" },
  ]

  const categoriesData = categoryInfo.map(info => ({
    active: true,
    cover: info.cover || "https://i.imgur.com/xs8D9wZ.png",
    created: Date.now(),
    updated: Date.now(),
    ...info,
  }))

  saveData(categoriesData, "../../static/data/categories.json")
  const topicData = []
  const articleData = []
  categoriesData.forEach((category, i) => {
    for (let j = 0; j < topicsInModule[i]; j++) {
      let topicDetails = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/module" + (i + 1) + "/topic" + j + ".json")))
      const topicId = Math.random()
        .toString(32)
        .substring(2)
      topicData.push({
        id: topicId,
        active: true,
        category: category.id,
        cover: topicDetails.cover || "https://i.imgur.com/xs8D9wZ.png",
        created: Date.now(),
        name: topicDetails.name,
        updated: Date.now(),
      })
      articleData.push(...getArticles(topicDetails, topicId))
    }
  })
  saveData(topicData, "../../static/data/topics.json")
  saveData(articleData, "../../static/data/articles.json")
}

const getArticles = (topicInfo, topicId) => {
  return topicInfo.slides.map(slide => ({
    active: true,
    topic: topicId,
    cover: slide.cover || "https://i.imgur.com/xs8D9wZ.png",
    created: Date.now(),
    name: slide.name,
    updated: Date.now(),
    data: slide.data,
    subtitle: slide.subtitle || "",
    tags: slide.tags || [],
  }))
}

readCategories()
