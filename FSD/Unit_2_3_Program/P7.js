var fs = require("fs");
var url = require("url");
var http = require("http");

const server = http.createServer(function (req, res) {
  const urlobj = url.parse(req.url, true);
  const filename = "." + urlobj.hostname;
  fs.readFile("P7.html", function (err, data) {
    if (err) {
      res.write("404");
      red.end();
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});
server.listen(5555);
console.log("Running");



// var http = require('http');
// const fs = require('fs');
// const url = require('url');
// http.createServer(function (req,res){
//     var path=(url.parse(req.url,true).pathname);
//     file=path.replace("/",'')+".html";
//     fs.readFile(file,function(err,data){
//         if(err){
//             res.writeHead(404,{"Content-Type":"text/html"});
//             res.end("404 Not Found");
//     }
//     else{
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.end(data)
//     }
// });
// }).listen(8080);
// console.log('http server started');



// var os=require('os');
// if (os.freemem('temp.txt')>(1024/1024/1024)){
//     console.log("Sufficient Memory");
// }
// else{
//     console.log("No Memory")
// }