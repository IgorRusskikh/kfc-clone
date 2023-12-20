import DetailProductImage from "../../UI/DetailProductImage/DetailProductImage";
import DetailProductInfo from "../../UI/DetailProductInfo/DetailProductInfo";
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import styles from "./ProductDetail.module.css";

export default () => {
  return (
    <>
      <Header />
      <div className={styles.productDetail}>
        <div className={styles.leftSide}>
          <DetailProductImage />
        </div>
        <div className={styles.rightSide}>
          <DetailProductInfo />
        </div>
      </div>
      <Footer />
    </>
  );
};
