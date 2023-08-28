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

const createDoc = async () => {
  try {
    
    const personData1 = new person({
      Name: "Harsh",
      Surname: "Rathod",
      Age: 20,
      Actve: true,
    });

    const personData2 = new person({
      Name: "Krut",
      Surname: "Patel",
      Age: 25,
      Actve: true,
    });

    const personData3 = new person({
      Name: "ABC",
      Surname: "DEF",
      Age: 30,
      Actve: true,
    });

    const personData4 = new person({
      Name: "ZYX",
      Surname: "WVU",
      Age: 35,
      Actve: true,
    });

    const personData5 = new person({
      Name: "GHI",
      Surname: "JKL",
      Age: 40,
      Actve: true,
    });

    const result = await person.insertMany([
      personData1,
      personData2,
      personData3,
      personData4,
      personData5,
    ]);

    console.log(result);

  } catch (err) {
    console.log(err);
  }
};

createDoc();
