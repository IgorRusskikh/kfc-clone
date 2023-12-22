import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default () => {
  const menuItems = [
    { name: "Меню", link: "/" },
    { name: "Акции", link: "/" },
    { name: "Купоны", link: "/" },
    { name: "Рестораны", link: "/" },
    { name: "Работа у нас", link: "/" },
  ];

  return (
    <div id={styles.header}>
      <div className={styles.header}>
        <div className={styles.leftSideHeader}>
          <Link to="/">
            <svg width="92" height="46" viewBox="0 0 92 46" fill="none">
              <path
                d="M81.7119 12.2987C80.1719 11.872 78.23 11.4902 75.8195 11.4902C63.1417 11.4902 59.9276 18.6993 59.3919 23.5952C58.8116 29.0975 62.5837 34.465 71.8911 34.465C75.8195 34.465 78.3639 33.7688 79.2791 33.4769C79.5023 33.4095 79.6808 33.2074 79.7255 32.9828L80.2388 30.2204C80.3281 29.7937 79.9263 29.4568 79.5246 29.5916C78.5202 29.906 76.7123 30.3552 74.4356 30.3552C69.9939 30.3552 66.7798 27.6602 67.1816 23.0338C67.5834 18.5646 70.5742 15.1509 74.7035 15.1509C77.181 15.1509 78.297 16.4535 78.2077 18.2053C78.2077 18.2053 78.2077 18.2277 78.2077 18.2951C78.1854 18.6095 78.4532 18.879 78.7657 18.879H80.462C80.7299 18.879 80.9531 18.6993 80.9977 18.4523L82.1807 13.0848C82.2476 12.7254 82.0467 12.3886 81.7119 12.2987Z"
                fill="#231F20"
              ></path>
              <path
                d="M29.2375 12.2985L28.9251 13.6909C28.8581 14.0054 29.0367 14.3198 29.3491 14.4096C29.8848 14.6117 29.9964 15.1283 29.5277 15.5325L21.738 22.0454L23.0772 15.9143C23.3004 14.9711 24.0593 14.5893 24.528 14.4321C24.5503 14.4321 24.5727 14.4096 24.595 14.4096C24.7959 14.3422 24.9521 14.185 24.9967 13.9604L25.3092 12.5007C25.3762 12.1638 25.1307 11.8269 24.7735 11.8269H14.7295C14.4394 11.8269 14.1938 12.029 14.1492 12.2985L13.8144 13.7808C13.7474 14.0727 13.926 14.3871 14.2162 14.477C14.2831 14.4994 14.3054 14.4994 14.3054 14.5219C14.9304 14.7689 15.667 15.3304 15.3545 16.7902L12.9662 27.8172C12.3413 30.8266 11.3146 31.4554 10.3548 31.5677H10.3325C10.0646 31.5902 9.86376 31.7923 9.7968 32.0394L9.48432 33.4542C9.39504 33.8136 9.6852 34.1729 10.0423 34.1729H20.5997C20.8675 34.1729 21.0907 33.9932 21.1354 33.7462L21.4925 32.0843C21.5595 31.8148 21.4032 31.5453 21.1577 31.433C21.1354 31.433 21.1131 31.4105 21.0907 31.4105C20.5551 31.1859 19.8185 30.7368 20.0194 29.8609L21.247 24.2239C25.4431 31.9495 26.8493 34.1729 31.8936 34.1729H36.4469C36.7148 34.1729 36.938 33.9932 36.9826 33.7462L37.2951 32.3089C37.3844 31.9495 37.1165 31.5902 36.7371 31.5902C35.5988 31.5677 35.0408 31.2982 33.9024 29.8384L28.0546 21.8658L35.6657 15.5101C36.6924 14.7016 37.92 14.477 38.612 14.3871C38.612 14.3871 38.6343 14.3871 38.6789 14.3871C38.9244 14.3647 39.1253 14.185 39.17 13.9604L39.4824 12.5456C39.5494 12.1862 39.3039 11.8718 38.9468 11.8718H29.7955C29.55 11.8269 29.3045 12.029 29.2375 12.2985Z"
                fill="#231F20"
              ></path>
              <path
                d="M57.3832 18.4296H59.1688C59.4367 18.4296 59.6599 18.25 59.7045 18.0029L60.9098 12.5231C60.9768 12.1638 60.7313 11.8494 60.3741 11.8494H41.6699C41.3798 11.8494 41.1343 12.0515 41.0673 12.321L40.7325 13.7808C40.6655 14.0727 40.8218 14.3647 41.1119 14.4545C41.1343 14.4545 41.1566 14.477 41.1789 14.477C41.8039 14.724 42.652 15.3079 42.2726 16.7902L38.6121 33.4991C38.5451 33.836 38.7907 34.1729 39.1478 34.1729H47.5624C47.8303 34.1729 48.0535 33.9932 48.0981 33.7462L48.4552 32.0843C48.4999 31.8372 48.3883 31.5902 48.1651 31.4779C48.1427 31.4554 48.1204 31.4554 48.0758 31.433C47.5401 31.1635 46.7589 30.5571 47.0044 29.3893C47.0268 29.2321 47.8303 25.6163 47.8303 25.6163H54.9727C55.2405 25.6163 55.4637 25.4366 55.5084 25.1896L56.178 22.1352C56.2449 21.7759 55.9994 21.4615 55.6423 21.4615H48.7454L50.04 15.555H54.8611C56.4235 15.555 56.8922 16.3635 56.8029 17.7783C56.8029 17.7783 56.8029 17.8008 56.8029 17.8457C56.7806 18.1377 57.0484 18.4296 57.3832 18.4296Z"
                fill="#231F20"
              ></path>
            </svg>
          </Link>
          <div className={styles.headerMenu}>
            {menuItems.map((item) => (
              <Link to={item.link}>{item.name}</Link>
            ))}
          </div>
        </div>
        <div className={styles.rightSideHeader}>
          <button className={styles.headerRedButton}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect
                x="11.333"
                y="16.666"
                width="1.33333"
                height="6"
                rx="0.666667"
                fill="#191817"
              ></rect>
              <path
                d="M20 9.33203C20 13.7503 16.4183 17.332 12 17.332C7.58172 17.332 4 13.7503 4 9.33203C4 4.91375 7.58172 1.33203 12 1.33203C16.4183 1.33203 20 4.91375 20 9.33203Z"
                fill="#191817"
              ></path>
              <circle cx="12" cy="12.666" r="2" fill="white"></circle>
            </svg>
            <span>Выбрать способ получения</span>
          </button>
          <button>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 16C8 16 16 16 16 14C16 11.6 12.1 9 8 9C3.9 9 0 11.6 0 14C0 16 8 16 8 16Z"
                fill="#191817"
              ></path>
            </svg>
            <span>Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
};
