import SetProductQuantity from "../SetProductQuantity/SetProductQuantity";
import { SvgCross } from "../../components/Svgs/Svgs";
import styles from "./OrderProduct.module.css";
import { useState } from "react";

export default function OrderProduct() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.orderProduct}>
      <div className={styles.productNameContainer}>
        <div className={styles.productImage}>
          <img
            src="https://s82079.cdn.ngenix.net/330x0/b3v54693e0xiykknljr9s30qsi10"
            alt=""
          />
        </div>
        <div className={styles.productName + " ml32 fontSize18"}>
          Мега ролл Трюфел
        </div>
      </div>
      <div className={styles.productPriceContainer}>
        <SetProductQuantity
          quantity={quantity}
          setQuantity={setQuantity}
          width={"6rem"}
          leftBtn={<SvgCross />}
        />
        <div className={styles.productPrice + " ml32 redTxt fontSize24"}>
          299 ₽
        </div>
      </div>
    </div>
  );
}
