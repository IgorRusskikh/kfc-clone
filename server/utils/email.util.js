const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "russkikh2.igor3.2003@gmail.com",
    pass: "nsey rkvg fink xlsa",
  },
});

exports.sendMail = async (mailOptions) => {
  await transporter.sendMail({
    from: "russkikh2.igor3.2003@gmail.com",
    to: mailOptions.to,
    subject: mailOptions.subject,
    text: mailOptions.text,
  });
};
