/* eslint-disable react/prop-types */

import { SvgMinus, SvgPlus } from "../../components/Svgs/Svgs";

import styles from "./AddToCart.module.css";
import { useState } from "react";

export default function AddToCart({ price }) {
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
        <div className={styles.removeOneContainer} onClick={removeOne}>
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
      <button className="btnPrimary bgRed ceraFont">
        В корзину - {price * quantity}
      </button>
    </div>
  );
}
