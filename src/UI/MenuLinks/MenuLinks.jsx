import styles from "./MenuLinks.module.css";

export default () => {
  const menuLinks = [
    "Новинки",
    "Ланчи и Комбо",
    "Баскеты",
    "Бургеры",
    "Твистеры",
    "Сочная курица",
    "Картофель и Снэки",
    "Соусы",
    "Холодные Напитки",
    "Мороженое",
    "Милкшейки",
    "Десерты",
    "Кофе и чай",
    "Выгодные хиты",
  ];

  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.menuContainer}>
        <div className={styles.menuHeaderContainer}>
          <h1 className={styles.h1}>Меню</h1>
        </div>
      </div>
      <div className="stickyMenu">
        <div className={styles.menuLinks}>
          <div className={styles.linksWrap}>
            {menuLinks.map((link, index) => {
              if (index === 0) {
                return (
                  <p
                    className={[styles.subText, styles.selectedLink].join(" ")}
                    key={link}
                  >
                    {link}
                  </p>
                );
              }
              return (
                <p className={styles.subText} key={link}>
                  {link}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
