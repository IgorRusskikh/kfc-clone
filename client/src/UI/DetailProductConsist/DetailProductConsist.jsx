import styles from "./DetailProductConsist.module.css";

export default ({ productConsist }) => {
  return (
    <div className={styles.productConsistInfo}>
      <div className={styles.energyValueHeader}>КБЖУ на 100 грамм</div>
      <div className={styles.energyValue}>
        <div>
          <span className={styles.mr8}>Ккал:</span>
          <span>{productConsist.calories}</span>
        </div>
        <div>
          <span className={styles.mr8}>Б:</span>
          <span>{productConsist.proteins} г</span>
        </div>
        <div>
          <span className={styles.mr8}>Ж:</span>
          <span>{productConsist.fats} г</span>
        </div>
        <div>
          <span className={styles.mr8}>У:</span>
          <span>{productConsist.carbohydrates} г</span>
        </div>
      </div>
      <div className={styles.productConsistDetail}>
        Состав: {productConsist.composition.join(", ")}
      </div>
      <div className={styles.allergens}>
        Аллергены: {productConsist.allergens.join(", ")}
      </div>
    </div>
  );
};
