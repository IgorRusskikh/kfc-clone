/* eslint-disable react/prop-types */

import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuGrid.module.css";

export default function MenuGrid({ children, items }) {
  return (
    <div className={styles.menuListCategory}>
      <div className="condensed">{children}</div>
      <div className={styles.menuListGrid}>
        {items.map((item) => (
          <MenuItem
            key={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
