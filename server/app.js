const express = require("express");
const app = express();

require("dotenv").config();

const { MongoClient } = require("mongodb");

let db;
const MongoURL = process.env.MONGO_URL;
new MongoClient(MongoURL)
  .connect()
  .then((client) => {
    console.log("DB연결성공");
    db = client.db("MongMongVillage");
    app.listen(8080, () => {
      console.log("http://localhost:8080 서버 실행 중");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  // res.send("hello");
  db.collection("post").insertOne({ title: "test" });
});
