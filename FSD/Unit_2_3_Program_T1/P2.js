var fs = require("fs");

// fs.mkdirSync("A")

// fs.writeFileSync("A/FS.txt","This Is NEW File")

// fs.appendFileSync("A/FS.txt","\nTodat is Monday")

data = fs.readFileSync("A/FS.txt","utf-8")

console.log(data)