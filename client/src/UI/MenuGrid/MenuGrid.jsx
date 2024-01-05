/* eslint-disable react/prop-types */

import { Suspense, lazy } from "react";

import styles from "./MenuGrid.module.css";

export default function MenuGrid({ children, items }) {
  const MenuItem = lazy(() => import("../MenuItem/MenuItem"));

  return (
    <div className={styles.menuListCategory}>
      <div className="condensed">{children}</div>
      <div className={styles.menuListGrid}>
        <Suspense>
          {items.map((item) => (
            <MenuItem
              key={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
