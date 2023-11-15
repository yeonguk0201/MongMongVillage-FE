const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("http://localhost:8080 서버 실행 중");
});

app.get("/", (req, res) => {
  res.send("hello");
});