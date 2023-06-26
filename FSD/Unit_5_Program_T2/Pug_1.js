var expr = require("express")
var app = expr()
app.set("view engine","pug")
var p = require("path")

const staticPath = p.join(__dirname)

app.get("/",(req,res) =>{
    res.render(staticPath+"/Pug_1")
})

app.listen(9999, () => {
  console.log("Server Running");
});