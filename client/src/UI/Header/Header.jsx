import {
  SvgCart,
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
    <div id={styles.header} className="bgWhite">
      <div className={styles.header + " m20"}>
        <div className={styles.leftSideHeader}>
          <Link to="/">
            <SvgKfcLogo />
          </Link>
          <div className={styles.headerMenu}>
            {menuItems.map((item) => (
              <Link key={item.name} to={item.link} className="ml32">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.rightSideHeader}>
          <button className="btnPrimary bgRed whiteTxt">
            <SvgPlacePoint />
            <span className="ml8">Выбрать способ получения</span>
          </button>
          <Link to="/profile">
            <button
              className="btnPrimary blackTxt"
              style={{ padding: "0.8rem 0.8rem" }}
            >
              <SvgPersonIcon />
              {/* <span className="ml8">Войти</span> */}
            </button>
          </Link>
          <Link to="/cart">
            <button
              className="btnPrimary bgRed whiteTxt"
              style={{ width: "6rem", padding: "0.8rem 0.8rem" }}
            >
              <SvgCart />
              <span className="ml8">299 ₽</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
