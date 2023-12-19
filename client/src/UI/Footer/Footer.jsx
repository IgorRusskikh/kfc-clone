import AppGalleryLogo from "../../components/AppStoreLogo/AppStoreLogo";
import AppStoreLogo from "../../components/AppStoreLogo/AppStoreLogo";
import GooglePlayLogo from "../../components/GooglePlayLogo/GooglePlayLogo";
import KfcManLogo from "../../components/KfcManLogo/KfcManLogo";
import TripleLineLogo from "../../components/TripleLineLogo/TripleLineLogo";
import styles from "./Footer.module.css";

export default () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <TripleLineLogo />
        <div className={styles.footerContent}>
          {footerContent.map((column, index) => (
            <>
              {index === 2 && (
                <div className={styles.kfcLogo} key={index + 10}>
                  <KfcManLogo />
                </div>
              )}
              <div className={styles.footerContentColumn} key={index}>
                <div className={styles.footerColumnHeader}>{column.header}</div>
                <div className={styles.footerColumnItems}>
                  {column.content.map((content, index) => (
                    <div className={styles.footerColumnItem} key={index}>
                      {content}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div
          className={[styles.bottomFooterColumn, styles.switchLanguage].join(
            " "
          )}
        >
          English
        </div>
        <div>© 2023 Unirest LLC</div>
        <div
          className={[styles.bottomFooterColumn, styles.footerStores].join(" ")}
        >
          <GooglePlayLogo />
          <AppStoreLogo />
          <AppGalleryLogo />
        </div>
      </div>
    </div>
  );
};

const footerContent = [
  {
    header: "Компания",
    content: [
      "Бизнес с KFC",
      "Политика обработки и защиты ПДн",
      "Состав блюд",
      "О компании",
      "KFC помогает",
      "Сообщить об уязвимости",
    ],
  },
  {
    header: "Карьера",
    content: ["Университет", "Вакансии", "Заполнить анкету"],
  },
  {
    header: "Мы рядом",
    content: ["Вконтакте", "Ютуб", "Телеграм"],
  },
  {
    header: "Контакты",
    content: ["Обратная связь", "Для прессы", "Сотрудникам"],
  },
];
