import { useEffect, useState } from "react";

import ChickenClub from "../../UI/ChickenClub/ChickenClub";
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import MenuLinks from "../../UI/MenuLinks/MenuLinks";
import MenuList from "../../UI/MenuList/MenuList";
import MenuService from "../../API/MenuService";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";

export default function MainPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      setCategories(await MenuService.fetchCategories());
    };

    fetchMenu();
  }, []);

  return (
    <>
      <Header />
      <NewsBlock />
      <MenuLinks categories={categories} />
      <ChickenClub />
      <MenuList categories={categories} />
      <Footer />
    </>
  );
}
