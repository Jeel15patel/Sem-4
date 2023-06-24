var nm = require("nodemailer");

var trans = nm.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ABX@gmail.com",
    pass: "Enter Your Password :-",
  },
});

var mailOption = {
  from: "ABC@gmail.com",
  to: "XZY@gmail.com",
  subject: "Test",
  attachments: [
    {
      filename: "File Name with extension",
      path: "Attachments Path",
    },
  ],
  text: "Enter Your Message",
};

trans.sendMail(mailOption, (err, info) => {
  if (err) {
    console.log("error.", err);
  } else {
    console.log("Email send " + info.response);
  }
});
