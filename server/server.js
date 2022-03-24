const path = require("path");
const fs = require("fs");
const request = require("request");
const dataPath = path.join(__dirname, "../chirps.json");

let chirps = JSON.stringify([
  {
    id:1,
    username: "Elon Musk",
    message: "I am richer than you.",
  },
  { 
    id:2,
    username: "Danny Devito",
    message: "So I started blastin",
  },
  { 
    id:3,
    username: "DIO",
    message: "It was me!",
  },
  { 
    id:4,
    username: "The Queen",
    message: "hwjd du comptr wrk",
  },
  {
    id:5,
    username: "Mark Zuckerburg",
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

  (err) => {
    if (err) console.log(err);
    let chirpData = JSON.parse(chirps);
    console.log(chirpData);
  }
);