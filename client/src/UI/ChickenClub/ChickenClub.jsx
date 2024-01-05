import TipContainer from "../../components/TipContainer/TipContainer";
import styles from "./ChickenClub.module.css";

export default function ChickenClub() {
  return (
    <div className={styles.chickenClubContainer}>
      <div className={styles.chickenClubContent}>
        <TipContainer>Войдите чтобы копить и тратить баллы</TipContainer>
        <button
          className="bgRed ceraFont btnPrimary mt32"
          style={{ width: "50%" }}
        >
          Войти
        </button>
        <div className={styles.chickenClubAd}></div>
        <div className={styles.chickenClubIcon}></div>
      </div>
    </div>
  );
}
