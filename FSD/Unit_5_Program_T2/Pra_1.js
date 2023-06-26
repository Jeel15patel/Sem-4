// // Write an Express JS script to only allow pdf files to be uploaded using multer middleware.
// // and saves the file to a specific directory or folder called 'specific', if other than
// // pdf file is uploaded then give an error message.

// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const app = express();

// const storage = multer.diskStorage({
//   destination: "single",
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.originalname
//     );
//   },
// });

// const checkFileType = (file, cb) => {
//   const filetypes = /pdf/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb("Error: Only PDF files allowed");
//   }
// };

// const upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).single("pdf");

// app.post("/Upload_Files", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.status(400).json({ error: err });
//     } else {
//       res.status(200).json({ message: "File uploaded successfully" });
//     }
//   });
// });

// app.listen(9999, () => {
//   console.log("Server Running");
// });