const expr = require("express");
const app = expr();
const port = 9009;

// -----------------------------------------------

// app.use("/",(req,res,next)=>{
//     res.write("Request Recici on"+new Date())
//     next()
// })

// app.get("/",(req,res,next)=>{
//     res.write("Hello World")
//     next()
// })

// app.get("/",(req,res)=>{
//     res.send()
// })

// app.listen(port,()=>{
//     console.log("Server is running on port "+port)
// })

// -----------------------------------------------

app.use("/",(req, res, next) => {
        res.set("Content-Type", "text/html");
        res.write("Request Received on " + new Date());
        next();
    },
    (req, res, next) => {
        res.write("<h1><center>Hello World</center></h1>");
        next();
    },
    (req, res) => {
        res.write("<h1><center>WELCOME</center></h1>");
        res.send()
    }
);
  
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
  
// -----------------------------------------------