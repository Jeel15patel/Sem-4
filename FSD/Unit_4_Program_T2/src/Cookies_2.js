// Write a Script to create login form on index.html file and after clicking submit,
// it should jump to the next page and value of username should be stored in cookie.
// Perform task using http get method, observer and check cookie inside the browser.

const express = require("Express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/cookies_2.html");
});

app.get("/task4Process", (req, res, next) => {
  const responses = { username: req.query.uname };
  res.cookie("username", responses.username);
  next();
});

app.get("/task4Process", (req, res) => {
  console.log(req.cookies); // Log cookies to the console
  res.send(req.cookies);
});

app.listen(9009, () => {
  console.log("Server Running");
});