use("mydb");

// --------------------------------------------------------
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Logical Operator ($and/$or/$not/$nor)

// $and :-------------------
// db.employee.find(
//     { $and: [{ "Name": "A1" }, { "Salary": 500 }] }
// );

// $or :-------------------
// db.employee.find(
//     { $or: [{ Name: "A1" }, { Salary: 500 }] }
// );

// $not :-------------------
// db.employee.find(
//     { Salary: { $not: { $lt: 600 } } }
// );

// db.employee.find(
//     { Salary: { $not: { $gt: 500 } } }
// );

// $nor :-------------------
// db.employee.find(
//     { $nor: [{ Name: "A2" }] }
// );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// y ($eq/$gt/$gte/$in/$lt/$lte/$ne/$nin)

// $eq :- Matches values that are equal to a specified value
// db.employee.find(
//     { Salary: { $eq: 500 } },
// );

// $gt :- Matches values that are greater than a specified value
// db.employee.find(
//     { Salary: { $gt: 500 } },
// );

// $$lt :- Matches values that are less than a specified value
// db.employee.find(
//     { Salary: { $lt: 500 } },
// );

// $gte :- Matches values that are greater than or equal to a specified value
// db.employee.find(
//     { Salary: { $gte: 500 } },
// );

// $lte :- Matches values that are less than or equal to a specified value
// db.employee.find(
//     { Salary: { $lte: 500 } },
// );

// $in :- Matches any of the values specified in an array
// db.employee.find(
//     { Salary: { $in: [500, 700] } },
// );

// $ne :- Matches all values that are not equal to a specified value
// db.employee.find(
//     { Salary: { $ne: 500 } },
// );

// $nin :- Matches none of the values specified in an array
// db.employee.find(
//     { Salary: { $nin: [500, 700] } },
// );

// db.employee.find();

// --------------------------------------------------------
// --------------------------------------------------------

// db.createCollection("people_1");
// db.people_1.drop();

// --------------------------------------------------------
// --------------------------------------------------------

// Mongodb Regex

// db.ABC.insertOne({ "Name": "Deep Surti", "No": 11 });

// db.ABC.insertMany([
//   { Name: "RajPatel", No: 12 },
//   { Name: "123Sanket", No: 13 },
//   { Name: "arsh789", No: 14 },
//   { Name: "drshanzaladarshan", No: 15 },
//   { Name: "567", No: 16 },
//   { Name: "XYZa", No: 17 },
// ]);

// db.ABC.insertOne({ "Name": "12 345", "No": 18 });

// db.ABC.find({ Name: { $regex: /patel/i } });

// db.ABC.find({ Name: { $regex: /^arsh/i } });

// db.ABC.find({ Name: { $regex: /^d/i } });

// db.ABC.find({ Name: { $regex: /darshan$/ } });

// db.ABC.find({ Name: { $regex: /[0-9]$/ } });

// db.ABC.find({ Name: { $regex: /^[0-9]/ } });

// db.ABC.find({ Name: { $regex: "^[0-9]+$" } });



// db.ABC.find();
