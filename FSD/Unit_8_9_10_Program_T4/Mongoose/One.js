const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/LJ")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const mySchema = new mg.Schema({
  Name: {
    type: String,
    required: true,
  },
  Surname: String,
  Age: Number,
  Actve: Boolean,
  Date: { type: Date, default: Date.now },
});
