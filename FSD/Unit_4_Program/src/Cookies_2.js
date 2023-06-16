// Write a Script to create login form on index.html file and after clicking submit,
// it should jump to the next page and value of username should be stored in cookie.
// Perform task using http get method, observer and check cookie inside the browser.

// const express = require('express');
// const path = require('path');
// const cp = require('cookie-parser');
// const app = express()
// app.use(express.static(path.join(__dirname), { index: 'Cookies_2.html' }))
// app.use(cp())
// app.get('/task4Process', (req, res) => {
//     data = req.query.username
//     res.cookie(('username', data, { expires: new Date(Date.now() + 20000) })) 

//     console.log(req.cookies)
// })
// app.listen(9999)

var cp=require('cookie-parser');
const express=require("express");
const app=express();
var bodyParser=require("body-parser");
var path=require("path");
app.use(cp());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/cookies_2.html");
});

app.get("/task4Process",(req,res,next)=>{
    const responses={username:req.query.uname}
    res.cookie("username",responses.username)
    
    next();
});

app.get("/task4Process",(req,res)=>{
    res.send(req.cookies);
    console.log(res.cookie)
});

app.listen(9009, () => {
  console.log("Server Running");
});