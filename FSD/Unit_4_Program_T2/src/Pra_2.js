const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"Pra_2.html"))
})

app.post("/check",(req, res, next) => {
    if (req.body.username == "admin") {
      next();
    } else {
      res.write("<h1> You are not admin </h1>");
      res.send()
    }
});

app.post("/check",(req, res, next) => {
    var data = req.body.username
    res.write("<h1> You are admin </h1>"+data);
    res.send()
})

app.listen(9009, () => {
  console.log("Server Running");
});
