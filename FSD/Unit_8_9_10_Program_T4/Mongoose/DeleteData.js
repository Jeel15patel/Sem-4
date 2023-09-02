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

const person = new mg.model("Person", mySchema);

const delectDoc = async (_id) => {
  const result = await person.findByIdAndDelete({ _id });
  console.log(result);
};

delectDoc("64ec253857d271bdd9912ce6");
