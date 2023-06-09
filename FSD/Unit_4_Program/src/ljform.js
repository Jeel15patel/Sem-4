const expr = require("express");
const app = expr();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
const staticPath = path.join(__dirname, "../public");

app.get("/", (req, res) => {
  res.sendFile(staticPath + "/ljform.html");
});

app.post("/process", (req, res) => {

    data = req.body

    if(data.username=="Admin"){
        res.send(` <h1 style="font-size: xx-large; font-style: italic; color: aqua;"> Well Come Admin </h1> `)
    }
    else{
        res.send(` <h1 style="font-size: xx-large; font-style: italic; color: red;"> Login with ADMIN </h1> `)
    }
});

app.listen(9999, () => {
  console.log("Server Running");
});
