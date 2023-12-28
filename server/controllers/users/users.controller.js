const jwt = require("jsonwebtoken");

const UserModel = require("../../models/User.model");
const TokenModel = require("../../models/Token.model");

const { sendMail } = require("../../utils/email.util");

exports.authorize = async (req, res) => {
  try {
    if (req.body.email == "") {
      return res.status(200).json({
        message: "Вы не указали почту для отправки письма с кодом",
      });
    }

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
        expiresIn: "5min",
      }),
    });

    sendMail({
      to: req.body.email,
      subject: "Вход в KFC",
      text: `Ссылка для входа: http://localhost:4000/users/confirm/${token.token}`,
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

exports.getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(404).json({
        message: "Пользователя с такой почтой нет",
      });
    }

    console.log(user);
    return res.json({
      user: user,
    });
  } catch (err) {
    console.log(err);
    return res.json({});
  }
};

exports.checkToken = (req, res) => {
  try {
    jwt.verify(req.params.token, "secret");

    return res.redirect("http://localhost:5173/");
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Срок действия ссылки истек. Попробуйте войти заново",
    });
  }
};
