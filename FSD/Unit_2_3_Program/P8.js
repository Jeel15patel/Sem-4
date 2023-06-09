//Ques 2:
var os=require('os');
var fs=require('fs');

console.log(os.platform());
if (os.platform()=="Win32"){
    fs.writeFileSync("temp1.txt","You are working on 32 bit.");
}
else{
    fs.writeFileSync("temp1.txt","You are working on 64 bit.");
}
