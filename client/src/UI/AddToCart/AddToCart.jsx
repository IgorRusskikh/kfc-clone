import Button from "../../components/Button/Button";
import SvgMinus from "../../components/SvgMinus/SvgMinus";
import SvgPlus from "../../components/SvgPlus/SvgPlus";
import styles from "./AddToCart.module.css";

export default () => {
  return (
    <div className={styles.addToCartContainer}>
      <div className={styles.setQuantity}>
        <div className={styles.removeOneContainer}>
          <button className={styles.removeOneBtn}>
            <SvgMinus />
          </button>
        </div>
        <div className={styles.currentQuantity}>
          <span>1</span>
        </div>
        <div className={styles.addOneContainer}>
          <button className={styles.addOneBtn}>
            <SvgPlus />
          </button>
        </div>
      </div>
      <Button className={styles.addToCartBtn}>В корзину - 348p</Button>
    </div>
  );
};
