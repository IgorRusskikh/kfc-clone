import axios from "axios";

export default class {
  static async fetchCategories() {
    const categoryList = await axios.get(
      "http://localhost:3000/menu/categories"
    );

    return categoryList.data?.categories.sort((a, b) => a.order < b.order);
  }

  static async fetchMenu() {
    const menu = await axios.get("http://localhost:3000/menu");

    return menu.data?.menu;
  }

  static async fetchMenuItem() {
    const menuItem = await axios.get(
      "http://localhost:3000/menu/658355906f5efd0bce8b28d8"
    );

    return menuItem.data?.product;
  }
}
