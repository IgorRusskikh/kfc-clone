/* eslint-disable react/prop-types */

import MenuGrid from "../MenuGrid/MenuGrid";
import styles from "./MenuList.module.css";
import useMenu from "../../hooks/useMenu";

export default function MenuList({ categories }) {
  const menu = useMenu(categories);

  return (
    <div className={styles.menuListContainer}>
      {menu.map((product, index) => (
        <MenuGrid key={index} items={product.products}>
          {product.categoryName}
        </MenuGrid>
      ))}
    </div>
  );
}
