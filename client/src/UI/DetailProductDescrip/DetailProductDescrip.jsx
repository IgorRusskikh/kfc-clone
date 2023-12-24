/* eslint-disable react/prop-types */

import styles from "./DetailProductDescrip.module.css";

export default function DetailProductDescrip({ weight, description }) {
  return (
    <div className={styles.productInfoContainer}>
      <div className={styles.productWeight}>{weight}г</div>
      <div className={styles.descritionContent}>{description}</div>
    </div>
  );
}
