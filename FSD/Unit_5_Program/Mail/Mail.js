var nm = require("nodemailer");

var trans = nm.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ABX@gmail.com",
    pass: "Enter Your OWN Password",
  },
});

var mailOption = {
  from: "ABC@gmail.com",
  to: "XZY@gmail.com",
  subject: "Test",
  attachments: [
    {
      filename: "images.jpg",
      path: "D:\\Github\\Sem-4\\FSD\\Unit_5_Program\\Mail_Attach_Ment\\IMG_1.jpeg",
    },
  ],
  text: "hii...",
};

trans.sendMail(mailOption, (err, info) => {
  if (err) {
    console.log("error.", err);
  } else {
    console.log("Email send " + info.response);
  }
});
