var fs = require("fs");

fs.writeFileSync("1S.txt","This is data of FS")

data = fs.readFileSync("1S.txt","utf-8")

console.log(data)

fs.writeFileSync("1D.txt",data)
