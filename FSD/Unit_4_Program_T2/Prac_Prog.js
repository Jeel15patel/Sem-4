const express = require("express")
const app = express()
const port = 9999

// ---------------------------------------------------------------------------------------

// WAP unsing JS_EX ( Home Page :- Big Blue Font) (Studen Page : "WellCome Student") (About : " About SUGreen Itali Font") (if page not found) 

// app.get("/",(req,res) => {
//     res.set("Content-Type","text/html")
//     res.send("<h1 style='color:Blue; font-size: 100px' > Home Page </h1>")
// })

// app.get("/StudenPage",(req,res) => {
//     res.set("Content-Type","text/html")
//     res.send("<h1 style='color:Red' > WellCome Student </h1>")
// })

// app.get("/AboutUs",(req,res) => {
//     res.set("Content-Type","text/html")
//     res.send("<h1 style='font-style: italic; color:Green' > WellCome Student </h1>")
// })

// app.listen(port,()=>{
//     console.log("Server is running on port " + port)
// })

// ---------------------------------------------------------------------------------------

// WAP JS_EX To define Json arrar of three object haveing member name ang game shor this object acoding to age name if user reqest short name 
// to url than all name shound be print apone 




app.get("/sortname",(req,res) => {
    const users = [ {Name:"Haapy" , Age:40}, {Name:"Jeel" , Age:25}, {Name:"Dijw" , Age:30}]
    const sortname = users.sent((a,b)=>{return a.age-b.age })
    res.set("Content-Type","text/html")
    res.send(sortname)
})

app.listen(port,()=>{
    console.log("Server is running on port " + port)
})