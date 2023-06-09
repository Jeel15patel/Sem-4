// class person by give name and age in form of member creat on function which return and elder of object detail of eleder should be  
// print on console and file...
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getElder(otherPerson) {
    if (this.age > otherPerson.age) {
      return this;
    } else {
      return otherPerson;
    }
  }
}

var p1 = new Person('Jeel', 23);
var p2 = new Person('Dwij', 21);

var p3 = p1.getElder(p2)

x = JSON.stringify(p3)

const fs = require('fs');

fs.writeFileSync("S.txt",x)
console.log(x)

// console.log(p3)

// console.log(p1)

// console.log(p2)