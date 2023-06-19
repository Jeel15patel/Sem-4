const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/P1.html");
});

var storage = multer.diskStorage({
  destination: "single",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

app.post("/Upload_Files", upload.single("myfile"), (req, res) => {
  const file = req.file;
  if (file) {
    res.send(
      "File " + file.originalname + " has been uploaded to " + file.destination
    );
  }
});

app.listen(9999, () => {
  console.log("Server Running");
});
