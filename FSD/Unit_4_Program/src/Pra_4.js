// You have been assigned to develop a user feedback form for website using express js and cookies
// Fields:-
// 1. Name
// 2. Email
// 3. Message (textarea)
// 4. Rating (Radio Button) [Bad, average, good, very good, excellent]
// When the user submits the form, store the feedback info (name email message and rating)
// in a cookie Named feedback that expires in 10 seconds.
// Display confirmation message to the user afer succesfully submitting the form and create a link
// to display the feedback details, stored in cookie. also include a link for logout

const express = require("express");
const cp = require("cookie-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cp());
app.use(express.static("public"));

app.post("/submit-feedback", (req, res) => {
  const { name, email, message, rating } = req.body;
  res.cookie("feedback", { name, email, message, rating }, { maxAge: 10000 });
  res.send(
    'Thank you for your feedback! <a href="/feedback-details">Click here</a> to view your feedback details.'
  );
});

app.get("/feedback-details", (req, res) => {
  const feedback = req.cookies.feedback;

  if (feedback) {
    res.send(`
      <h1>Feedback Details</h1>
      <p><strong>Name:</strong> ${feedback.name}</p>
      <p><strong>Email:</strong> ${feedback.email}</p>
      <p><strong>Message:</strong> ${feedback.message}</p>
      <p><strong>Rating:</strong> ${feedback.rating}</p>
      <p><a href="/logout">Logout</a></p>
    `);
  } else {
    res.send("No feedback found.");
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("feedback");
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send(`
      <h1>Feedback Form</h1>
      <form method="post" action="/submit-feedback">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required><br>
  
        <label for="email">Email ID:</label>
        <input type="email" name="email" id="email" required><br>
  
        <label for="message">Message:</label>
        <textarea name="message" id="message" required></textarea><br>
  
        <label for="rating">Rating:</label><br>
        <input type="radio" name="rating" id="bad" value="Bad" required>
        <label for="bad">Bad</label><br>
        <input type="radio" name="rating" id="average" value="Average" required>
        <label for="average">Average</label><br>
        <input type="radio" name="rating" id="good" value="Good" required>
        <label for="good">Good</label><br>
        <input type="radio" name="rating" id="very-good" value="Very Good" required>
        <label for="very-good">Very Good</label><br>
        <input type="radio" name="rating" id="excellent" value="Excellent" required>
        <label for="excellent">Excellent</label><br>
  
        <input type="submit" value="Submit">
      </form>`);
});

app.listen(9009, () => {
  console.log("Server running");
});