import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuGrid.module.css";

export default ({ items }) => {
  return (
    <div className={styles.menuListCategory}>
      <div className={styles.menuListHeader}>Новинки</div>
      <div className={styles.menuListGrid}>
        {items.map((item) => (
          <MenuItem image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};
