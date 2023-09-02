var expr = require("express");
var app = expr();
const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/LJ")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(expr.static(__dirname, { index: "form.html" }));

app.get("/check", (req, res) => {
  const response = { u: req.query.username, p: req.query.password };
  const mySchema = new mg.Schema({
    Name: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  });

  const personForm = mg.model("form", mySchema);

  const createDoc = async () => {
    try {
      const personData = new personForm({
        Name: response.u,
        Password: response.p,
      });
      const result = await personData.save();
      res.end(`<h1>WellComes ${result.Name}</h1>`);
    } catch (err) {
      console.log(err);
    }
  };

  createDoc();
});

app.listen(9999, () => {
  console.log("Listening on port 9999...");
});
