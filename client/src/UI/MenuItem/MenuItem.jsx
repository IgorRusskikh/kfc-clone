/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "./MenuItem.module.css";

export default function MenuItem({ image, name, price }) {
  return (
    <Link className={styles.menuListCard + " mt16 mb16 ml32"} to={"/detail"}>
      <div className={styles.menuListCardPhoto}>
        <img src={image} alt="" />
      </div>
      <div className={styles.menuListCardName}>{name}</div>
      <div className={styles.menuListCardDescription}>
        <div className={styles.menuListCardPrice}>
          <span>{price}</span>
          <span>₽</span>
        </div>
        <div>
          <button
            className="btnPrimary bgRed ceraFont"
            style={{ height: "2rem", borderRadius: "0.3rem" }}
          >
            В корзину
          </button>
        </div>
      </div>
    </Link>
  );
}
