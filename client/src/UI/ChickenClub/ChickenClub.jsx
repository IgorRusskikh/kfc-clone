import Button from "../../components/Button/Button";
import { QuestionMark } from "../../components/Svgs/Svgs";
import styles from "./ChickenClub.module.css";

export default function ChickenClub() {
  return (
    <div className={styles.chickenClubContainer}>
      <div className={styles.chickenClubContent}>
        <div className={styles.tipContainer}>
          Войдите чтобы копить и тратить баллы
          <button>
            <QuestionMark />
          </button>
        </div>
        <div className={styles.chickenClubLoginButton}>
          <Button btnStyles={{ width: "18rem" }}>Войти</Button>
        </div>
        <div className={styles.chickenClubAd}></div>
        <div className={styles.chickenClubIcon}></div>
      </div>
    </div>
  );
}
