// ASY

var fs = require("fs");

var data = fs.readFile("a.txt","utf-8",(err,data) => {
    if (err) throw err;
    console.log(data);

})
console.log("After Prog")

// 