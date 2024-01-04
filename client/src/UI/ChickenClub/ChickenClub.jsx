import Button from "../../components/Button/Button";
import TipContainer from "../../components/TipContainer/TipContainer";
import styles from "./ChickenClub.module.css";

export default function ChickenClub() {
  return (
    <div className={styles.chickenClubContainer}>
      <div className={styles.chickenClubContent}>
        <TipContainer>Войдите чтобы копить и тратить баллы</TipContainer>
        <div className={styles.chickenClubLoginButton}>
          <Button btnStyles={{ width: "18rem" }}>Войти</Button>
        </div>
        <div className={styles.chickenClubAd}></div>
        <div className={styles.chickenClubIcon}></div>
      </div>
    </div>
  );
}
