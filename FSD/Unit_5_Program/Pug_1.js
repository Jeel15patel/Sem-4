var expr = require("express")
var app = expr()
app.set("view engine","png")
var p = require("path")

const staticPath = p.join(__dirname,"../public")

app.get("/",(req,res) =>{
    res.render(staticPath+"/one")
})

app.listen(9999, () => {
  console.log("Server Running");
});