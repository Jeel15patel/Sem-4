const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/reactconnect");

const userSchma = new mongoose.Schema({
  username: String,
});

const User = mongoose.model("User", userSchma);

app.post("/singup", async (req, res) => {
  try {
    const { username } = req.body;
    const newUser = new User({ username });
    await newUser.save();
    res.send();
  } catch (error) {
    res.send(error);
  }
});

app.listen(5000, () => {
  console.log("Server started");
});
