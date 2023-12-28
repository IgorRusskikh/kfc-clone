import Button from "../../components/Button/Button";
import { SvgLoginStar } from "../../components/Svgs/Svgs";
import UserService from "../../API/UserService";
import styles from "./LoginPage.module.css";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [responseText, setResponseText] = useState("");

  const login = async () => {
    localStorage.setItem("userEmail", email);

    setResponseText(await UserService.authorize(email));
  };

  return (
    <div id={styles.page}>
      <SvgLoginStar styles={styles.svgStar} />
      {responseText && (
        <div
          className="modalMessage"
          onClick={(event) => {
            event.target.style["display"] = "none";
          }}
        >
          {responseText}
        </div>
      )}
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
            onChange={(event) => setEmail(event.target.value)}
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
            onClick={login}
          >
            Получить код по смс
          </Button>
        </div>
      </div>
    </div>
  );
}
