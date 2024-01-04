import Button from "../../components/Button/Button";
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import TipContainer from "../../components/TipContainer/TipContainer";
import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <div className={styles.profileInfoBlock}>
        <div className={styles.profileInfoContainer}>
          <div className={styles.profileName}>
            <div className={styles.profileNameHeader}>Имя</div>
            <div className={styles.profileNameValue}>+79532566634</div>
          </div>
          <div className={styles.profileActionContainer}>
            <button className={styles.editBtn}></button>
            <button className={styles.exitBtn}></button>
          </div>
        </div>
      </div>
      <div className={styles.orderInfoBlock}>
        <div className={styles.orderInfoContainer}>
          <div className={styles.pointsContainer}>
            <TipContainer>У вас 44 балла</TipContainer>
            <div className={styles.pointsQuantity}>
              <span>7 баллов сгорят через 129 дней</span>
            </div>
          </div>
        </div>
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
              <div className={styles.productName}>
                1 x Боксмастер Оригинальный
              </div>
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
          <Button btnStyles={{ width: "100%" }}>Повторить заказ</Button>
        </div>
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
              <div className={styles.productName}>
                1 x Боксмастер Оригинальный
              </div>
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
          <Button btnStyles={{ width: "100%" }}>Повторить заказ</Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
