import Button from "../../components/Button/Button";
import styles from "./OrderCard.module.css";

export default function OrderCard() {
  return (
    <div className={styles.orderCard}>
      <div className={styles.metaOrderInfo}>
        <div className={styles.orderDate}>
          <div className={styles.issuePlace}>KFC Торговая Абакан</div>
          <div className={styles.registrationDate}>
            Заказ оформлен: 21 июль 2023, 18:43
          </div>
        </div>
        <div className={styles.orderNumber}>
          <div className={styles.orderNum}>№ 446</div>
          <div className={styles.orderStatus}>Выдан</div>
        </div>
      </div>
      <div className={styles.orderContentContainer}>
        <div className={styles.orderContent}>
          <div className={styles.productName}>1 x Боксмастер Оригинальный</div>
          <div className={styles.productPrice}>269 ₽</div>
        </div>
      </div>
      <div className={styles.pointsReceived}>
        <div className={styles.pointsReceivedHeader}>Начислено баллов</div>
        <div className={styles.receivedPointsQuantity}>20 Б</div>
      </div>
      <div className={styles.totalPriceContainer}>
        <div className={styles.totalPriceHeader}>Итого</div>
        <div className={styles.totalPrice}>1015 ₽</div>
      </div>
      <Button btnStyles={{ width: "100%" }} className={"bgRed"}>Повторить заказ</Button>
    </div>
  );
}
