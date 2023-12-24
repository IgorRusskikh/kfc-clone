/* eslint-disable react/prop-types */

import styles from "./MenuLinks.module.css";

export default function MenuLinks({ categories }) {
  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.menuContainer}>
        <div className={styles.menuHeaderContainer}>
          <h1 className={styles.h1}>Меню</h1>
        </div>
      </div>
      <div className="stickyMenu">
        <div className={styles.menuLinks}>
          <div className={styles.linksWrap}>
            {categories.map((category, index) => {
              if (index === 0) {
                return (
                  <p
                    className={[styles.subText, styles.selectedLink].join(" ")}
                    key={category.order}
                  >
                    {category.name}
                  </p>
                );
              }
              return (
                <p className={styles.subText} key={category.order}>
                  {category.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
