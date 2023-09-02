const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/LJ")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const mySchema = new mg.Schema({
  _id: Number,
  Name: String,
  Age: Number,
});

const emp = new mg.model("Employ", mySchema);

const createDoc = async () => {
  try {
    const personData = [
      { _id: 1, Name: "ABC", Age: 30 },
      { _id: 2, Name: "DEF", Age: 25 },
      { _id: 3, Name: "GHI", Age: 34 },
      { _id: 4, Name: "KJL", Age: 10 },
    ];
    const result = [];
    result.push(await emp.insertMany(personData));
    console.log("Query Result", result);
  } catch (err) {
    console.log(err);
  }
};

createDoc();