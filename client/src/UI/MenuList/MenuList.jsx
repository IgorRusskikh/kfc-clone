import { useEffect, useState } from "react";

import MenuGrid from "../MenuGrid/MenuGrid";
import MenuService from "../../API/MenuService";
import styles from "./MenuList.module.css";

export default ({ categories }) => {
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

  return (
    <div className={styles.menuListContainer}>
      {products.map((product, index) => (
        <MenuGrid key={index} items={product.products}>
          {product.categoryName}
        </MenuGrid>
      ))}
    </div>
  );
};
