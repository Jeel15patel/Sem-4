const expr = require("express");
const app = expr();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}))
const staticPath = path.join(__dirname, "../public")

app.get('/',(req,res)=>{
   res.sendFile(staticPath + "/X.html")
})

app.post("/process",(req,res)=>{
    res.send(req.body)
})

app.listen(9999, () => {
    console.log("Server Running");
});
