// creat array of object cal of paremeter of square

var fs = require("fs");

myarray =[
    {
        "Name":"Circle",
        "D":20
    },
    {
        "Name":"Square",
        "side":10
    }
]

strify = JSON.stringify(myarray);

fs.writeFileSync("S.txt",strify)

data = fs.readFileSync("S.txt","utf-8")

b = JSON.parse(data)

console.log(b)

var p1 = b[0].D*3.14

var p2 = b[1].side*4

fs.appendFileSync("S.txt",JSON.stringify(p1))

// fs.appendFileSync("S.txt",JSON.stringify(p2))

console.log(p1)

console.log(p2)