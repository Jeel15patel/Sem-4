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
      "File " +
        file.originalname +
        " has been uploaded to " +
        file.destination +
        "."
    );
  }
});

app.listen(9999, () => {
  console.log("Server Running");
});

// ----------- multiple file upload ---------------------

// const express = require("express");
// const multer = require("multer");
// const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/P1.html");
// });

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "single");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// var upload = multer({
//   storage: storage,
// });

// app.post("/Upload_Files", upload.array("myfile", 10), (req, res) => {
//   const files = req.files;

//   if (files) {
//     for (let i = 0; i < files.length; i++) {
//       res.write(
//         "File " +
//           files[i].originalname +
//           " has been uploaded to " +
//           files[i].destination +
//           "."
//       );
//     }
//     res.end();
//   } else {
//     res.send("No files received");
//   }
// });

// app.listen(9999, () => {
//   console.log("Server Running");
// });
