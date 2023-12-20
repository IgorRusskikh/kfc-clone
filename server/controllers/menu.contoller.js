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

exports.getMenuItem = async (req, res) => {
  try {
    const item = await Product.findById(req.params?.id);

    console.log(item);

    return res.json({});
  } catch (err) {
    console.log(err);
    return res.json({});
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
      calories: req.body.calories,
      proteins: req.body.proteins,
      fats: req.body.fats,
      carbohydrates: req.body.carbohydrates,
      composition: req.body.composition,
      allergens: req.body.allergens,
    });

    console.log(newItem);

    return res.json({
      newItem,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Не удалось добавить продукт. Попробуйте позже",
    });
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
