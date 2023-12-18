import "./App.css";

import { useEffect, useState } from "react";

import ChikenClub from "./UI/ChikenClub/ChikenClub";
import Footer from "./UI/Footer/Footer";
import Header from "./UI/Header/Header";
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

  return (
    <>
      <Header />
      <NewsBlock />
      <MenuLinks categories={categories} />
      <ChikenClub />
      <MenuList categories={categories} />
      <Footer />
    </>
  );
}

export default App;
