import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styles from "./MenuItem.module.css";

export default ({ image, name, price }) => {
  return (
    <Link className={styles.menuListCard} to={"/detail"}>
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
          <Button width="5.645rem" height="1.875rem">
            В корзину
          </Button>
        </div>
      </div>
    </Link>
  );
};
