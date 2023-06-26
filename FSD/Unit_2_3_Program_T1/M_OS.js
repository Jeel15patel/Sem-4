var os = require('os');

console.log(os.arch())

console.log(os.hostname())

console.log(os.platform())

console.log(os.tmpdir())

x = os.freemem()

d1 = x/1024

d2 = d1/1024

d3 = d2/1024

console.log("GB",d3)
