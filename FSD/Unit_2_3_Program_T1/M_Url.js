var url = require("url")

var addr = " http://localhost:5000/user?year=2023&month=Jan";

var q = url.parse(addr,true)

console.log(q.hostname)

console.log(q.pathname)

console.log(q.search)

qdata = q.query;
console.log(qdata.month)