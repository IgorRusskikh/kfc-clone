import Button from "../../components/Button/Button";
import styles from "./ChikenClub.module.css";

export default () => {
  return (
    <div className={styles.chikenClubContainer}>
      <div className={styles.chickenClubContent}>
        <div className={styles.tipContainer}>
          Войдите чтобы копить и тратить баллы
          <button>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="16" fill="#E0E0E0"></rect>
              <path
                d="M15.04 16.58C15.04 16.1933 15.1667 15.82 15.42 15.46C15.6733 15.1 16.0733 14.6867 16.62 14.22C17.1667 13.7267 17.5333 13.3467 17.72 13.08C17.9067 12.8133 18 12.5 18 12.14C18 11.6733 17.84 11.2867 17.52 10.98C17.2133 10.6733 16.8333 10.52 16.38 10.52C15.4733 10.52 14.8267 11.0933 14.44 12.24L12.68 11.48C12.96 10.5467 13.4267 9.83333 14.08 9.34C14.7467 8.83333 15.54 8.58 16.46 8.58C17.5 8.58 18.38 8.90667 19.1 9.56C19.82 10.2 20.18 11.0067 20.18 11.98C20.18 12.5533 20.04 13.08 19.76 13.56C19.48 14.0267 19.0267 14.5333 18.4 15.08C17.8267 15.5867 17.4467 15.96 17.26 16.2C17.0733 16.4267 16.98 16.68 16.98 16.96C16.98 17.12 17.0067 17.3 17.06 17.5H15.26C15.1133 17.1667 15.04 16.86 15.04 16.58ZM15.12 21.78C14.8267 21.4867 14.68 21.12 14.68 20.68C14.68 20.24 14.8267 19.8733 15.12 19.58C15.4267 19.2733 15.8 19.12 16.24 19.12C16.68 19.12 17.0467 19.2667 17.34 19.56C17.6467 19.8533 17.8 20.2267 17.8 20.68C17.8 21.12 17.6467 21.4867 17.34 21.78C17.0467 22.0733 16.68 22.22 16.24 22.22C15.8 22.22 15.4267 22.0733 15.12 21.78Z"
                fill="#191817"
              ></path>
            </svg>
          </button>
        </div>
        <div className={styles.chikenClubLoginButton}>
          <Button btnStyles={{ width: "18rem" }}>Войти</Button>
        </div>
        <div className={styles.chikenClubAd}></div>
        <div className={styles.chikenClubIcon}></div>
      </div>
    </div>
  );
};
