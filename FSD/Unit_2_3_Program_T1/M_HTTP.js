var http = require("http");
const { type } = require("os");

// var  server = http.createServer(function(req,res){
//     res.write("Hello World!");
//     res.end();
// });
// server.listen(5000);
// console.log("Serever Running_1")

// ------------------------------------------------------

// var  server = http.createServer(function(req,res){
//     if(req.url=="/")
//     {
//         res.writeHead(200,
//             {
//                 "content-type":"text/plain"
//             }),
//         res.write("<h1>Hello Home</h1>")
//         res.end()
//     }
//     if(req.url=="/about")
//     {
//         res.write("<h1>Hello About</h1>")
//         res.write("<table border=1px><tr><th>A</th><th>B</th><th>C</th></tr><tr><td>X</td><td>Y</td><td>Z</td></tr></table>")
//         res.end()
//     }
//     else{
//         res.write("404")
//         res.end()
//     }
// });
// server.listen(5000);
// console.log("Serever Running_2")

// ------------------------------------------------

// var  server = http.createServer(function(req,res){
//     if(req.url=="/")
//     {
//         const data = {
//             "name":"Ashish",
//             "age":20,
//         }
//         res.writeHead(200,
//         {
//             "content-type":"Application/json"
//         })
//         res.write(JSON.stringify(data))
//         res.end()
//     }
//     if(req.url=="/about")
//     {
//         res.write("<h1>Hello About</h1>")
//         res.end()
//     }
// });
// server.listen(5000);
// console.log("Serever Running_3")

// -----------------------------------------------------

var  server = http.createServer(function(req,res){
    if(req.url=="/")
    {
        var a = "<h1><center> Home </center></h1>"
        
        res.writeHead(200,
        {
            "content-type":"text/html"
        })
        res.write(a)
        res.end()
    }
    if(req.url=="/about")
    {
        var a = "<h1><center> About Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum non assumenda uscipit accusamus excepturi est. Blanditiis ratione quos libero aliquid, labore hic! </center></h1>"
        
        res.writeHead(200,
        {
            "content-type":"text/html"
        })
        res.write(a)
        res.end()
    }
});
server.listen(5005);
console.log("Serever Running_3")