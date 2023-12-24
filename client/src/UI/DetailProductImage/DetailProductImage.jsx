/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import TripleLineLogo from "../../components/TripleLineLogo/TripleLineLogo";
import styles from "./DetailProductImage.module.css";

export default function DetailProductImage({ product }) {
  return (
    <div className={styles.imageContainer}>
      <TripleLineLogo height={"2rem"} gap={"1.5rem"} />
      <div className={styles.imageProductPrice}>
        {product.price}
        <span className={styles.currency}>₽</span>
      </div>
      <div className={styles.productImage}>
        <img src={product.image} alt="" />
      </div>
      <Link className={styles.goBackArrow} to={"/"}></Link>
    </div>
  );
}
