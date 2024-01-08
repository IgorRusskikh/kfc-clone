import { Link } from "react-router-dom";
import TipContainer from "../../components/TipContainer/TipContainer";
import styles from "./ChickenClub.module.css";

export default function ChickenClub() {
  return (
    <div className={styles.chickenClubContainer}>
      <div className={styles.chickenClubContent}>
        <TipContainer>Войдите чтобы копить и тратить баллы</TipContainer>
        <Link to={"/login"}>
          <button
            className="bgRed ceraFont btnPrimary mt32"
            style={{ width: "17rem" }}
          >
            Войти
          </button>
        </Link>
        <div className={styles.chickenClubAd}></div>
        <div className={styles.chickenClubIcon}></div>
      </div>
    </div>
  );
}
