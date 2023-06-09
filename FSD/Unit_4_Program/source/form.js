const expr = require("express");

const app = expr();

const path = require("path");

const staticPath = path.join(__dirname, "../public");

app.use(expr.static(staticPath,{index: "form.html"}));

app.get("/process",(req,res) => {
    const user = {u:req.query.username,p:req.query.password}
    res.send(user)
})

app.listen(9999, () => {
    console.log("Server Running");
});