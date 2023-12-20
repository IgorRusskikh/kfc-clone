import Button from "../../components/Button/Button";
import SvgMinus from "../../components/SvgMinus/SvgMinus";
import SvgPlus from "../../components/SvgPlus/SvgPlus";
import styles from "./AddToCart.module.css";
import { useState } from "react";

export default () => {
  let [quantity, setQuantity] = useState(1);

  const removeOne = () => {
    if (quantity !== 1) {
      setQuantity((quantity -= 1));
    }
  };

  const addOne = () => {
    setQuantity((quantity += 1));
  };

  return (
    <div className={styles.addToCartContainer}>
      <div className={styles.setQuantity}>
        {quantity === 1 && console.log(1)}
        <div className={styles.removeOneContainer + (quantity == 1 && " disabled")} onClick={removeOne}>
          <button className={styles.removeOneBtn}>
            <SvgMinus />
          </button>
        </div>
        <div className={styles.currentQuantity}>
          <span>{quantity}</span>
        </div>
        <div className={styles.addOneContainer} onClick={addOne}>
          <button className={styles.addOneBtn}>
            <SvgPlus />
          </button>
        </div>
      </div>
      <Button className={styles.addToCartBtn}>В корзину - 348p</Button>
    </div>
  );
};
