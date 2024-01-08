import TipContainer from "../../components/TipContainer/TipContainer";
import styles from "./ProfilePoints.module.css";

export default function ProfilePoints() {
  return (
    <div className={styles.orderInfoContainer}>
      <div className={styles.pointsContainer}>
        <TipContainer>У вас 44 балла</TipContainer>
        <div className={styles.pointsQuantity}>
          <span>7 баллов сгорят через 129 дней</span>
        </div>
      </div>
    </div>
  );
}
