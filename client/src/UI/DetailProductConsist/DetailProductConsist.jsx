/* eslint-disable react/prop-types */

import styles from "./DetailProductConsist.module.css";

export default function DetailProductConsist({ productConsist }) {
  const consist = [
    ["Ккал", productConsist.calories],
    ["Б", productConsist.proteins],
    ["Ж", productConsist.fats],
    ["У", productConsist.carbohydrates],
  ];

  return (
    <div className={styles.productConsistInfo}>
      <div className={styles.energyValueHeader}>КБЖУ на 100 грамм</div>
      <div className={styles.energyValue}>
        {consist.map((energyValue) => (
          <div key={energyValue[0]}>
            <span className="mr-8">{energyValue[0]}: </span>
            <span>{energyValue[1]}</span>
          </div>
        ))}
      </div>
      <div className={styles.productConsistDetail}>
        Состав: {productConsist.composition.join(", ")}
      </div>
      <div className={styles.allergens}>
        Аллергены: {productConsist.allergens.join(", ")}
      </div>
    </div>
  );
}
