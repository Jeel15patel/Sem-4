use("Tasks");

// db.people.insertOne(
//     { Name: "P1", Branch: "CSE", Age: 21 },
// );

// db.people.insertMany([
//     { Name: "P2", Branch: "AIML", Age: 22 },
//     { Name: "P3", Branch: "AIML", Age: 5 },
//     { Name: "P4", Branch: "CSE", Age: 25 },
//     { Name: "P5", Branch: "CSE", Age: 27 },
//     { Name: "P6", Branch: "IT", Age: 30 },
// ])

// Task_1 : Update AGE=5 -> Branch=CSE to AGE=25
// db.people.updateOne({ Age: { $eq: 5 } }, { $set: { Branch: "CSE", Age: 25 } });

// Task_2 : Display All data GT 25
// db.people.find(
//     { Age: { $gt: 25 } },
// );

// Task_3 : Display All data GT = 25 and LT = 50
// db.people.find({
//   $and: [{ Age: { $gt: 25 } }, { Age: { $lt: 50 } }],
// });

// Task_4 : Display All data AGE = 27
// db.people.find(
//     { Age: { $eq: 27 } }
// );

// Task_5 : Display All data NOT AGE = 27
// db.people.find(
//     { Age: { $ne: 27 } }
// );

// Task_6 : Display All data AGE = 25 & AGE = 30
// db.people.find(
//     { Age: { $in: [25, 30] } },
// );

// Task_7 : Display All data NOT AGE = 25 & AGE = 30
// db.people.find(
//     { Age: { $nin: [25, 30] } },
// );

// -------------------------------------------------------------------

// Fields Operator [ $inc / $mul / $rename / $set / $unset ]

// $inc :- Increment the value of the field by the specified amount.
// db.people.updateOne(
//     { Name: "P1" }, { $inc: { Age: 15 } },
// );

// $mul :- Multiply the value of the field by the specified amount.
// db.people.updateOne(
//     { Name: "P2" }, { $mul: { Age: 20 } },
// );

// $unset :- Removes the specified field from a document.
// db.people.updateOne(
//   { Age: { $eq: 30 } },
//   { $unset: { Branch: "CSE", Age: 30 } }
// );

// $rename :- Renames a field.
// db.people.updateMany(
//     {},{$rename: { Name: "Full_Name" } },
// );

// db.people.updateMany(
//     {},{$rename: { Branch: "Branch_Name" , Age: "Age_of_Person" } },
// );

// db.people.count({"Full_Name": "P1"});

// db.people.find({ Full_Name: "P1" }).count();

// db.people.find().sort({ Age_of_Person: 1 });

// db.people.find().sort({ Age_of_Person: -1 });

let x = db.people.find();
x



// --------------------------------------------------------
// --------------------------------------------------------

// Task_8 : Add one fild joint_date = 2021-08-01
// db.people.updateMany(
//     {},{$set: { joint_date: "2021-08-01" } },
// ); 
