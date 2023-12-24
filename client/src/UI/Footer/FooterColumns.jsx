import { Fragment } from "react";
import { SvgKfcMan } from "../../components/Svgs/Svgs";
import styles from "./Footer.module.css";

export default function FooterColumns() {
  return (
    <>
      {footerContent.map((column, index) => (
        <Fragment key={index}>
          {index === 2 && (
            <div className={styles.kfcLogo} key={index + 10}>
              <SvgKfcMan />
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
        </Fragment>
      ))}
    </>
  );
}

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
