/* eslint-disable react/prop-types */

import SetProductQuant from "../SetProductQuantity/SetProductQuantity";
import { SvgMinus } from "../../components/Svgs/Svgs";
import styles from "./AddToCart.module.css";
import { useState } from "react";

export default function AddToCart({ price }) {
  let [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.addToCartContainer}>
      <SetProductQuant
        quantity={quantity}
        setQuantity={setQuantity}
        leftBtn={<SvgMinus />}
      />
      <button className="btnPrimary bgRed ceraFont">
        В корзину - {price * quantity}
      </button>
    </div>
  );
}
