var path = require('path');

console.log("Gives Folder Name with path",path.dirname("D:\SEM_4\FSD\Unit_2\M_PATH.js"))

console.log("Gives extinsion Name",path.extname("D:\SEM_4\FSD\Unit_2\M_PATH.js"))

console.log("Fine Name with extinsion",path.basename("D:\SEM_4\FSD\Unit_2\M_PATH.js"))

console.log("All Deatil",path.parse("D:\SEM_4\FSD\Unit_2\M_PATH.js"))

x = path.parse("D:\SEM_4\FSD\Unit_2\M_PATH.js")
console.log(x.name) 

// parse():- all properties and path include it root , direct , place , extenstion , name of file