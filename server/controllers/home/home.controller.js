const product = require("../../models/Product.model");
const productCategory = require("../../models/ProductCategory.model");

exports.getMenuItems = async (req, res) => {
  try {
    const category = await productCategory.findOne({
      name: "Новинки",
    });

    if (!category) {
      return res.status(404).json({
        message: "Категория не найдена",
      });
    }

    return res.json({
      // menu: [...menuItems],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось получить меню",
    });
  }
};
