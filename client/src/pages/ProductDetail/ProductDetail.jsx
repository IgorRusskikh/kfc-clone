import { useEffect, useState } from "react";

import DetailProductImage from "../../UI/DetailProductImage/DetailProductImage";
import DetailProductInfo from "../../UI/DetailProductInfo/DetailProductInfo";
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import MenuService from "../../API/MenuService";
import styles from "./ProductDetail.module.css";

export default () => {
  const [product, setProduct] = useState();
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    const fetchMenuItem = async () => {
      const s = await MenuService.fetchMenuItem();
      setDetailProduct(() => {
        return s;
      });
    };

    fetchMenuItem();
  }, [product]);

  return (
    <>
      <Header />
      <div className={styles.productDetail}>
        <div className={styles.leftSide}>
          <DetailProductImage product={detailProduct} />
        </div>
        <div className={styles.rightSide}>
          <DetailProductInfo product={detailProduct} />
        </div>
      </div>
      <Footer />
    </>
  );
};
