// For print Form detail on html file 


const expr = require("express");
const app = expr();
const path = require("path");

const staticPath = path.join(__dirname, "../public");
app.use(expr.static(staticPath,{index:"form.html"}));

app.get('/process',(req,res)=>{
    username = req.query.username
    password = req.query.password
    res.send(`<h1>Username is ${username} and your password is ${password}`)
})

app.listen(9999, () => {
    console.log("Server Running");
});
