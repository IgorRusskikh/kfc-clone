import styles from "./DetailProductConsist.module.css";

export default () => {
  return (
    <div className={styles.productConsistInfo}>
      <div className={styles.energyValueHeader}>КБЖУ на 100 грамм</div>
      <div className={styles.energyValue}>
        <div>
          <span className={styles.mr8}>Ккал:</span>
          <span>213</span>
        </div>
        <div>
          <span className={styles.mr8}>Б:</span>
          <span>10.8 г</span>
        </div>
        <div>
          <span className={styles.mr8}>Ж:</span>
          <span>9.7 г</span>
        </div>
        <div>
          <span className={styles.mr8}>У:</span>
          <span>20.7 г</span>
        </div>
      </div>
      <div className={styles.productConsistDetail}>
        Состав: Огурцы маринованные, Стрипсы из куриного филе оригинальные,
        Салат Айсберг, Картофель фри, Тортилья пшеничная, Томаты свежие, Соус
        "Со вкусом Трюфеля"
      </div>
      <div className={styles.allergens}>
        Аллергены: Глютен, Молоко, Сельдерей, Яйца, Горчица
      </div>
    </div>
  );
};
