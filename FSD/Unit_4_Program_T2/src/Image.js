const expr = require("express");

const app = expr();

const path = require("path");

app.get("/",(req,res)=>{
    res.sendfile(path.join(__dirname,"ME.jpg"))
})
console.log("Server Running")
app.listen(9999)