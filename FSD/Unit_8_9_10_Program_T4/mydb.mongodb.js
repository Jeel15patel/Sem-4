use("mydb");

// --------------------------------------------------------

// db.students.insertOne({
//   name: "John",
//   age: 23,
// });

// db.students.insertMany([
//   { name: "Jeel", age: 20 },
//   { name: "Dwij", age: 22 },
//   { name: "Harsh", age: 24 },
//   { name: "Happy", age: 25 },
//   { name: "N1", age: 30 },
//   { name: "N1", age: 34 },
//   { name: "N1", age: 38 },
// ]);

// db.students.updateOne({ name: "John" }, { $set: { age: 25 } });

// db.students.findOne({ name: "John" })

// db.students.find();

// --------------------------------------------------------

// db.employee.insertOne({ Name: "A1", Salary: 500 });

// db.employee.insertMany([
//     {"Name":"A2","Salary":600},
//     {"Name":"A3","Salary":700},
//     {"Name":"A1","Salary":700},
//     {"Name":"A1","Salary":500},
//     {"Name":"A4","Salary":600},
//     {"Name":"A2","Salary":100},
//     {"Name":"A3","Salary":400},
//     {"Name":"A5","Salary":700}
// ])

db.employee.find();