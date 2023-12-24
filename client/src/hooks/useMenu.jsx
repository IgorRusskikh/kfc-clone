import { useEffect, useState } from "react";

import MenuService from "../API/MenuService";

export default function useMenu(categories) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const menu = await MenuService.fetchMenu();
      const updatedProducts = [];

      categories.forEach((category) => {
        const categoryProducts = menu.filter(
          (product) => product.category == category._id
        );

        updatedProducts.push({
          categoryName: category.name,
          products: categoryProducts,
        });
      });

      setProducts(() => {
        return updatedProducts;
      });
    };

    fetchMenu();
  }, [categories]);

  return products;
}
