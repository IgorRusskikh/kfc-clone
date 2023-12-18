import axios from "axios";

export default class {
  static async fetchCategories() {
    const categoryList = await axios.get(
      "http://localhost:3000/menu/categories"
    );

    return await categoryList.data.categories.sort((a, b) => a.order < b.order);
  }
}
