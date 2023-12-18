const Product = require("../models/Product.model");
const ProductCategory = require("../models/ProductCategory.model");

exports.getMenu = async (req, res) => {
  try {
    const menuItems = await Product.find({});

    if (!menuItems.length) {
      return res.json({
        message: "Меню пока пустое",
      });
    }

    return res.json({
      menu: [...menuItems],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Произошла ошибка при получении меню. Попробуйте позже",
    });
  }
};

exports.appendMenuItem = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findById(req.body.category);
    const newItem = await Product.create({
      name: req.body.name,
      category: productCategory,
      image: req.body.image,
      price: req.body.price,
      weight: req.body.weight,
      description: req.body.description,
      caloricValue: req.body.caloricValue,
      composition: req.body.composition,
      allergens: req.body.allergens,
    });

    console.log(newItem);

    return res.json({
      newItem,
    });
  } catch (err) {
    console.log(err);
    return res.json(P);
  }
};

exports.getCategoryList = async (req, res) => {
  try {
    const categoryList = await ProductCategory.find();

    if (!categoryList.length) {
      return res.json({
        message: "Категорий пока нет",
      });
    }

    console.log(categoryList);

    return res.json({
      categories: [...categoryList],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Не удалось получить список категорий. Попробуйте позже",
    });
  }
};

exports.appendCategory = async (req, res) => {
  try {
    const newCategory = await ProductCategory.create({
      name: req.body.name,
      order: req.body.order,
    });

    console.log(newCategory);

    return res.json({
      message: "Категория успешно добавлена",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось добавить категорию. Попробуйте позже",
    });
  }
};
