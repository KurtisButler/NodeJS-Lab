const path = require("path");
const fs = require("fs");
const dataPath = path.join(__dirname, "./popular-articles.json");
const reqProm = require("request-promise");

reqProm("https://reddit.com/r/popular.json").then((rawData) => {
  let popular = JSON.parse(rawData);
  popular.data.children.forEach((post) => {
    let ext = path.extname(post.data.url);
    let name = post.data.id;
    let fileName = name + ext;
    if (ext === ".jpg" || ext === ".png" || ext === ".gif") {
      reqProm(post.data.url, { encoding: "base64" }).then((media) => {
        fs.writeFile(
          path.join(__dirname, `./downloads/${fileName}`),
          media,
          { encoding: "base64" },
          (err) => {
            if (err) console.log(err);
          }
        );
      });
    }
  });
});