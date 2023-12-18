import "./App.css";

import { useEffect, useState } from "react";

import AppGalleryLogo from "./components/AppStoreLogo/AppStoreLogo";
import AppStoreLogo from "./components/AppStoreLogo/AppStoreLogo";
import ChikenClub from "./UI/ChikenClub/ChikenClub";
import GooglePlayLogo from "./components/GooglePlayLogo/GooglePlayLogo";
import Header from "./UI/Header/Header";
import KfcManLogo from "./components/KfcManLogo/KfcManLogo";
import MenuLinks from "./UI/MenuLinks/MenuLinks";
import MenuList from "./UI/MenuList/MenuList";
import MenuService from "./API/MenuService";
import NewsBlock from "./UI/NewsBlock/NewsBlock";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      setCategories(await MenuService.fetchCategories());
    };

    fetchMenu();
  }, []);

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

  return (
    <>
      <Header />
      <NewsBlock />
      <MenuLinks categories={categories} />
      <ChikenClub />
      <MenuList />
      <div className="footerContainer">
        <div className="footer">
          <div className="footerLogo">
            <div className="logoLine"></div>
            <div className="logoLine"></div>
            <div className="logoLine"></div>
          </div>
          <div className="footerContent">
            {footerContent.map((column, index) => (
              <>
                {index === 2 && (
                  <div className="kfcLogo" key={index + 10}>
                    <KfcManLogo />
                  </div>
                )}
                <div className="footerContentColumn" key={index}>
                  <div className="footerColumnHeader">{column.header}</div>
                  <div className="footerColumnItems">
                    {column.content.map((content, index) => (
                      <div className="footerColumnItem" key={index}>
                        {content}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="bottomFooter">
          <div className="bottomFooterColumn switchLanguage">English</div>
          <div>© 2023 Unirest LLC</div>
          <div className="bottomFooterColumn footerStores">
            <GooglePlayLogo />
            <AppStoreLogo />
            <AppGalleryLogo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
