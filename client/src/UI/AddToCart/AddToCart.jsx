import Button from "../../components/Button/Button";
import styles from "./AddToCart.module.css";

export default () => {
  return (
    <div className={styles.addToCartContainer}>
      <div className={styles.setQuantity}>
        <div className={styles.removeOneContainer}>
          <button className={styles.removeOneBtn}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <g fill="none" fill-rule="nonzero">
                <rect
                  id="i-minus"
                  class="i-icon i-minus"
                  width="12"
                  height="2"
                  x="2"
                  y="7"
                  fill="#FFF"
                  rx="1"
                ></rect>
              </g>
            </svg>
          </button>
        </div>
        <div className={styles.currentQuantity}>
          <span>1</span>
        </div>
        <div className={styles.addOneContainer}>
          <button className={styles.addOneBtn}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <g fill="none" fill-rule="nonzero">
                <path
                  id="i-plus"
                  class="i-icon i-plus"
                  fill="#FFF"
                  d="M7 7V3a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2H9v4a1 1 0 0 1-2 0V9H3a1 1 0 1 1 0-2h4z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <Button className={styles.addToCartBtn}>В корзину - 348p</Button>
    </div>
  );
};
