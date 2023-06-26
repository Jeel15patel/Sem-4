var http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer(function (req,res){
    var path=(url.parse(req.url,true).pathname);
    file=path.replace("/",'')+".html";
    fs.readFile(file,function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/html"});
            res.end("404 Not Found");
    }
    else{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data)
    }
});
}).listen(5555);
console.log('http server started');