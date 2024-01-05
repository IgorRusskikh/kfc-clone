/* eslint-disable react/prop-types */

import { Suspense, lazy } from "react";

import styles from "./MenuList.module.css";
import useMenu from "../../hooks/useMenu";

export default function MenuList({ categories }) {
  const menu = useMenu(categories);

  const MenuGrid = lazy(() => import("../MenuGrid/MenuGrid"));

  return (
    <div className={styles.menuListContainer + " m20"}>
      <Suspense>
        {menu.map((product, index) => (
          <MenuGrid key={index} items={product.products}>
            {product.categoryName}
          </MenuGrid>
        ))}
      </Suspense>
    </div>
  );
}
