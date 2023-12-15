const productModel = require("../../models/Product");

exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await productModel
      .find()
      .select(["name", "price"])
      .exec();

    return res.json({
      ...menuItems,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось получить меню",
    });
  }
};
