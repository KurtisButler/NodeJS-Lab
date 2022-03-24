const path = require("path");
const fs = require("fs");
const dataPath = path.join(__dirname, "./popular-articles.json");
const reqProm = require("request-promise");

reqProm("https://reddit.com/r/popular.json")
  .then((res) => JSON.parse(res))
  .then((res) => {
    let articleArr = JSON.stringify(
      res.data.children.map((art) => {
        return {
          title: `${art.data.title}`,
          url: `${art.data.url}`,
          author: `${art.data.author}`,
        };
      })
    );
    JSON.stringify(articleArr);
    console.log(articleArr);
    fs.writeFile(dataPath, articleArr, (err) => {
      if (err) console.log(err);
    });
  });