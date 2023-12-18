const product = require("../../models/Product.model");
const productCategory = require("../../models/ProductCategory.model");

exports.getMenuItems = async (req, res) => {
  try {
    // Используйте findOne, чтобы получить один объект, а не массив
    const category = await productCategory.findOne({
      name: "Новинки",
    });

    if (!category) {
      // Если категория не найдена, верните ошибку или обработайте соответственно
      return res.status(404).json({
        message: "Категория не найдена",
      });
    }

    const newProduct = await product.create({
      name: "dfsdgfdgd",
      category: category._id,
    });

    console.log(newProduct);

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

