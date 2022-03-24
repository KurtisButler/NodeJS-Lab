const path = require("path");
const fs = require("fs");
const request = require("request");
const dataPath = path.join(__dirname, "../chirps.json");

let chirps = JSON.stringify([
  {
    name: "Elon Musk",
    message: "I am richer than you.",
  },
  {
    name: "Danny Devito",
    message: "So I started blastin",
  },
  {
    name: "DIO",
    message: "It was me!",
  },
  {
    name: "The Queen",
    message: "hwjd du comptr wrk",
  },
  {
    name: "Mark Zuckerburg",
    message: "Got any sweet baby rays?",
  },
]);
fs.writeFile(dataPath, chirps, (err) => {
  if (err) console.log(err);
});

fs.readFile(
  dataPath,
  {
    encoding: "utf-8",
  },
  (err, data) => {
    if (err) console.log(err);
    let chirpData = JSON.parse(chirps);
    console.log(chirpData);
  }
);
