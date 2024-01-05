import styles from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <div className={styles.profileInfoBlock}>
      <div className={styles.profileInfoContainer}>
        <div className={styles.profileName}>
          <div className={styles.profileNameHeader}>Имя</div>
          <div className={styles.profileNameValue}>+79532566634</div>
        </div>
        <div className={styles.profileActionContainer}>
          <button className={styles.editBtn}></button>
          <button className={styles.exitBtn}></button>
        </div>
      </div>
    </div>
  );
}
