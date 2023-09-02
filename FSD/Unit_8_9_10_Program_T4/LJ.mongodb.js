use("LJ");

// db.employee.insertOne({
//   E_Name: "Jeel",
//   Age: 20,
//   Phone: 1234567890,
//   Designation: "Developer",
// });

// db.employee.insertMany([
//   { "E_Name": "Dwij", "Age": 22, "Phone": 1230984567, "Designation": "Developer" },
//   { "E_Name": "Harsh", "Age": 24, "Phone": 5672348906, "Designation": "Developer" },
//   { "E_Name": "Happy", "Age": 25, "Phone": 1029384756, "Designation": "Developer" },
//   { "E_Name": "N1", "Age": 30, "Phone": 1357908642, "Designation": "Developer" },
//   { "E_Name": "N1", "Age": 34, "Phone": 1256908743, "Designation": "Developer" },
// ]);

// db.employee.updateOne(
//   { E_Name: "Dwij" },
//   { $set: { Designation: "Senior Developer" } }
// );

// db.employee.updateOne(
//   { E_Name: "Harsh" },
//   { $set: { Designation: "Full Stack Developer" } }
// );

// db.employee.updateOne(
//   { E_Name: "Jeel" },
//   { $set: { Designation: "Hacker" } }
// );

// db.employee.find({ E_Name: "Jeel" });

// db.employee.deleteOne({"E_Name":"N1"})

// db.employee.find();

// db.indexTable.insertOne({
//   Name: "KKK",
//   Age: 20,
// });

// db.indexTable.insertMany([
//     {Name:"WWW",Age:12},
//     {Name:"DDD",Age:2},
// ])

db.indexTable.find({Name:"KKK"}).explain("executionStats")

// db.indexTable.find()