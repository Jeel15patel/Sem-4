// Write JS Script to perform following:
// Create an HTML file that contains name, email and checkbox for subscription
// load html file on homepage email and name are required fields, on login page
// welcome user and email id data should be printed, if user checks the subscription, then
// Thank you for the subscription should be printed and logout will be displayed.
// If user clicks logout link then he/she will be redireccted to the homepage.
// If user doesnt opt for subscription, then you can subscribe will be printed and subscribe link
// will be display under the message.

const express = require("express");
const app = express();
const path = require("path");
const sess = require("express-session");

app.get("/home", (req, res) => {
  res.set({ "content-type": "text/html" });
  res.send(
    '<center><h1>Register</h1><br><form action="process" method="get">Username<input type="text" name="user" id="user" required><br>Email<input type="email" name="email" id="pass" required><br>Subscribe<input type="checkbox" name="subs" id=""><br><input type="submit"></form></center>'
  );
}); 

app.use(
  sess({
    resave: false, //Doesn't save session if not modified
    saveUninitialized: false, //Dont Create session if something is not stored
    secret: "key", //If the Secret key is changed, the session is considered as fresh session and its value will be reset
  })
);

app.get("/process", (req, res) => {
  req.session.user = req.query.user;
  req.session.subs = req.query.subs;
  if (req.session.subs) {
    res.send(
      `<center><h1>Welcome ${req.session.user}, Thank You for subscription</h1><br><form action="logout" method="get"><input type="submit" value="Logout"></form></center>`
    );
    // res.send(`<center><h1>Welcome ${req.session.user}</h1><br><form action="logout" method="get"><input type="submit" value="Logout"></form></center>`)
  } else {
    res.send(
      `<center><h1>Welcome ${req.session.user}, Please Subscribe</h1><br><form action="home" method="get"><input type="submit" value="Subscribe"></form></center>`
    );
  }
});

app.listen(9999, () => {
  console.log("Server Running");
});
