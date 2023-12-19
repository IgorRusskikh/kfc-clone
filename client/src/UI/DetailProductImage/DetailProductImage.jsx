import TripleLineLogo from '../../components/TripleLineLogo/TripleLineLogo'
import styles from "./DetailProductImage.module.css";

export default () => {
  return (
    <div className={styles.imageContainer}>
      <TripleLineLogo height={"2rem"} gap={"1.5rem"} />
      <div className={styles.imageProductPrice}>
        349
        <span className={styles.currency}>₽</span>
      </div>
      <div className={styles.productImage}>
        <img
          src="https://s82079.cdn.ngenix.net/330x0/abdar33iv38pj4cqylrr3ldpr9yi"
          alt=""
        />
      </div>
      <div className={styles.goBackArrow}></div>
    </div>
  );
};
