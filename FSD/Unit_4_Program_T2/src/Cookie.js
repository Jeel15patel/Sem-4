var cp = require("cookie-parsen")
const expr = require("express");
const app = expr();

// app.use(cp())

// app.get("/",(req,res,next)=>{
//     res.cookie("Uname","ABC",{expires:new Data(Data.new()+20000)})
//     next()
// })

// app.get("/",(req,res,next)=>{
//     console.log(res.cookie)
//     next()
//     res.send("HELLOW")
// })


app.use(cp())
app.get('/', (req, res, next) => {
    res.cookie(('username','xyz',{expires:new Date(Date.now()+20000)}))
    next();
}, (req, res, next) => {
    console.log(req.cookies)
    next();
    res.send("Hello")
})

app.listen(9999, () => {
    console.log("Server Running");
  });