/* eslint-disable react/prop-types */

import { SvgPlus } from "../../components/Svgs/Svgs";
import styles from "./SetProductQuantity.module.css";

export default function SetProductQuant({
  quantity,
  setQuantity,
  width,
  leftBtn,
}) {
  const removeOne = () => {
    if (quantity !== 1) {
      setQuantity((quantity -= 1));
    }
  };

  const addOne = () => {
    setQuantity((quantity += 1));
  };

  return (
    <div className={styles.setQuantity} style={{ width: width }}>
      <div className={styles.removeOneContainer + " ml8"} onClick={removeOne}>
        <button className={styles.removeOneBtn}>{leftBtn}</button>
      </div>
      <div className={styles.currentQuantity}>
        <span>{quantity}</span>
      </div>
      <div className={styles.addOneContainer + " mr8"} onClick={addOne}>
        <button className={styles.addOneBtn}>
          <SvgPlus />
        </button>
      </div>
    </div>
  );
}
