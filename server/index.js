const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send("hello im express");
});

// 프로덕션 모드
if (process.env.NODE_ENV === "production") {
  //프로덕션일 경우 해로쿠가 하단에 build 폴더를 보도록 한다.asd
  app.use(express.static("client/build"));
  //랜더링될 html 파일을 지정한다
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
console.log(process.env.NODE_ENV);

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`listenPort ${port}`);
});
