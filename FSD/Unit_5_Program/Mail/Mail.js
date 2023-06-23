var nm = require("nodemailer");

var trans = nm.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "15jeel6201patel@gmail.com",
    pass: "Enter Your OWN Password",
  },
});

var mailOption = {
  from: "15jeel6201patel@gmail.com",
  to: "harshrathod2052@gmail.com",
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
