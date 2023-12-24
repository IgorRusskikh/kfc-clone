import {
  SvgKfcLogo,
  SvgPersonIcon,
  SvgPlacePoint,
} from "../../components/Svgs/Svgs";

import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
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
            <SvgKfcLogo />
          </Link>
          <div className={styles.headerMenu}>
            {menuItems.map((item) => (
              <Link key={item.name} to={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.rightSideHeader}>
          <button className={styles.headerRedButton}>
            <SvgPlacePoint />
            <span>Выбрать способ получения</span>
          </button>
          <Link to="/login">
            <button>
              <SvgPersonIcon />
              <span>Войти</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
