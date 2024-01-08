import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import OrderProduct from "../../UI/OrderProduct/OrderProduct";
import ProfilePoints from "../../UI/ProfilePoints/ProfilePoints";
import { SvgTrash } from "../../components/Svgs/Svgs";
import styles from "./CartPage.module.css";

export default function CartPage() {
  return (
    <>
      <Header />
      <div
        className={styles.newOrderContainer}
        style={{ margin: "7rem 34rem" }}
      >
        <div className={styles.newOrderCard}>
          <div className={styles.newOrderHeader}>
            <h1 className={styles.yourNewOrder + " m0 fontSize40"}>
              Ваш заказ
            </h1>
            <button
              className="btnDisabled"
              style={{
                marginLeft: "14rem",
                height: "fit-content",
                fontSize: 14,
              }}
            >
              <div className="grayTxt">
                <SvgTrash />
              </div>
              Очистить корзину
            </button>
          </div>
          <ProfilePoints />
          <div className={styles.newOrderContent + " mt16 mb16"}>
            <div className={styles.orderProductContainer + " mb32"}>
              <OrderProduct />
            </div>
            <div className={styles.orderAmountContainer}>
              <div className={styles.orderAmountHeader}>Заказ на сумму</div>
              <div className={styles.orderAmount}>299 ₽</div>
            </div>
            <div className={styles.totalContainer + " mt40"}>
              <div className={styles.totalContainerHeader}>Итого</div>
              <div className={styles.totalAmount + " redTxt"}>299 ₽</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
