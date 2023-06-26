// to check whert file ext .txt or not and print on file

var path=require('path');
var fs=require('fs');
if (path.extname("D:\SEM_4\FSD\Unit_2\S.txt")=='.txt'){
    fs.writeFileSync("2.txt","it is .txt extension");
}
else{
    fs.writeFileSync("2.txt","it is not .txt extension");
}