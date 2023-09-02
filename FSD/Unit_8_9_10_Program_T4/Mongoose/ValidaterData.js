// IMP for Exam 


const mg = require("mongoose");
const v = require("validator");

mg.connect("mongodb://127.0.0.1:27017/LJ")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const mySchema = new mg.Schema({
  Name: {
    type: String,
    required: true,
    lowcase: true,
    trim: true,
    minlength: [3, "Name should be atleast 3 characters long"],
    maxlength: [7, "Name should not exceed 7 characters"],
    // enum: ["doc","def","abc"],
  },

  Age: {
    type: Number,
    validator(v1) {
      if (v1 <= 0) {
        throw new Error("Age should be greater than 0");
      }
    },
  },

  Email: {
    type: String,
    validator(v2) {
      if (!v.isEmail(v2)) {
        throw new Error("Invalid Email");
      }
    },
  },
});

const personVali = mg.model("personVali", mySchema);

const createDoc = async () => {
  try {
    const personData = new personVali({
      Name: "Jeel",
      Age: 20,
      Email: "6201jeel15patel@gmaul.com",
    });
    const result = await personData.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDoc();