const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserModel = require("../../models/User.model");
const TokenModel = require("../../models/Token.model");

const { sendMail } = require("../../utils/email.util");

exports.authorize = async (req, res) => {
  try {
    const user = await UserModel.findOneAndUpdate(
      {
        email: req.body.email,
      },
      {},
      {
        upsert: true,
        new: true,
      }
    );

    const token = await TokenModel.create({
      user: user._id,
      token: jwt.sign({ id: user._id }, "secret", {
        expiresIn: "1min",
      }),
    });

    sendMail({
      to: "russkikh2.igor3.2003@gmail.com",
      subject: "Вход в KFC",
      text: `Ссылка для входа: http://localhost:3000/users/confirm/${token.token}`,
    });

    return res.json({
      message: "Письмо с кодом выслано вам на электронную почту",
      token: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось авторизоваться. Попробуйте позже",
    });
  }
};

exports.checkToken = (req, res) => {
  try {
    const verified = jwt.verify(req.params.token, "secret");

    return res.json({});
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Срок действия ссылки истек. Попробуйте войти заново",
    });
  }
};
