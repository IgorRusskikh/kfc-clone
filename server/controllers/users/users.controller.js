const UserModel = require("../../models/User.model");
const TokenModel = require("../../models/Token.model");
const bcrypt = require("bcrypt");
const { sendMail } = require("../../utils/email.util");
const crypto = require("crypto");

exports.authorize = async (req, res) => {
  try {
    const userIsExists = await UserModel.findOne({
      email: req.body.email,
    });

    if (userIsExists) {
      const token = await TokenModel.create({
        user: userIsExists._id,
        token: crypto.randomBytes(32).toString("hex"),
      });

      sendMail({
        to: "russkikh2.igor3.2003@gmail.com",
        subject: "Вход в KFC",
        text: `Ссылка для входа: http://localhost:4000/confirm/${token.token}`,
      });

      return res.json({
        message: "Письмо с кодом выслано вам на электронную почту",
      });
    }

    const salt = await bcrypt.genSalt(8);
    const pwdHash = await bcrypt.hash(req.body.password, salt);

    const newUser = await UserModel.create({
      email: req.body?.email,
      name: req.body?.name,
      surname: req.body?.surname,
      passwordHash: pwdHash,
    });

    const token = await TokenModel.create({
      user: newUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    });

    return res.json({});
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось авторизоваться. Попробуйте позже",
    });
  }
};
