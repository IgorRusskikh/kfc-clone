import Button from "../../components/Button/Button";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div id={styles.page}>
      <div className={styles.loginForm}>
        <div className={styles.headerForm}>
          Вход в системы ресторанов KFC и Rostic’s
        </div>
        <div className={styles.fieldsContainer}>
          <div className={styles.fieldName}>Номер телефона</div>
          <label className={styles.fieldLabel} htmlFor="phone">
            Укажите номер телефона
          </label>
          <input
            id={styles.phoneInput}
            type="text"
            name="phone"
            placeholder="+7 (000) 000-00-00"
          />
          <div className={styles.checkboxContainer}>
            <span className={styles.checkbox}></span>
            <span className={styles.policy}>
              <span>При входе или регистрации, вы соглашаетесь </span>
              <span className={styles.bolderPolicy}>
                с политикой конфиденциальности и условиями сервиса
              </span>
            </span>
          </div>
          <Button
            btnStyles={{
              backgroundColor: "#6b6a68",
              width: "100%",
              marginTop: "1.5rem",
            }}
          >
            Получить код по смс
          </Button>
        </div>
      </div>
    </div>
  );
}
