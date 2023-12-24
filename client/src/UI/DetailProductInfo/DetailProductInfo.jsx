/* eslint-disable react/prop-types */

import AddToCart from "../AddToCart/AddToCart";
import DetailProductConsist from "../DetailProductConsist/DetailProductConsist";
import DetailProductDescrip from "../DetailProductDescrip/DetailProductDescrip";
import styles from "./DetailProductInfo.module.css";
import { useState } from "react";

export default function DetailProductInfo({ product }) {
  const [isConsist, setIsConsist] = useState(false);

  const setConsist = () => {
    setIsConsist(true);
  };

  const setDescrip = () => {
    setIsConsist(false);
  };

  return (
    <div className={styles.productInfo}>
      <div className={styles.productNameContainer}>
        <h1 className={styles.productName}>{product.name}</h1>
      </div>
      <div className={styles.productDescriptionContainer}>
        <AddToCart price={product.price} />
        <div className={styles.switchProductInfo}>
          <div
            className={
              styles.productDetailInfo +
              (isConsist && " " + styles.selectedInfo)
            }
            onClick={setDescrip}
          >
            Описание
          </div>
          <div className={styles.separator}></div>
          <div
            className={
              styles.productDetailInfo +
              (!isConsist && " " + styles.selectedInfo)
            }
            onClick={setConsist}
          >
            Состав
          </div>
        </div>
        {isConsist ? (
          <DetailProductConsist productConsist={product} />
        ) : (
          <DetailProductDescrip
            weight={product.weight}
            description={product.description}
          />
        )}
      </div>
    </div>
  );
}
