// creat a array of name and age wite in Student.txt

var fs = require("fs");

myarray =[
    {
        "Name":"Jeel",
        "Age":21
    },
    {
        "Name":"Dwij",
        "Age":21
    }
]

// myarray = {name: "Jeel", age: 21};

data = JSON.stringify(myarray);

fs.writeFileSync("S.txt",data)

reads = fs.readFileSync("S.txt","utf-8")

console.log(JSON.parse(reads))
