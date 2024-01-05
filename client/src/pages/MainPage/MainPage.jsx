import { Suspense, lazy, useEffect, useState } from "react";

import ChickenClub from "../../UI/ChickenClub/ChickenClub";
import Footer from "../../UI/Footer/Footer";
import Header from "../../UI/Header/Header";
import MenuLinks from "../../UI/MenuLinks/MenuLinks";
import MenuService from "../../API/MenuService";

export default function MainPage() {
  const [categories, setCategories] = useState([]);

  const NewsBlock = lazy(() => import("../../UI/NewsBlock/NewsBlock"));
  const MenuList = lazy(() => import("../../UI/MenuList/MenuList"));

  useEffect(() => {
    const fetchMenu = async () => {
      setCategories(await MenuService.fetchCategories());
    };

    fetchMenu();
  }, []);

  return (
    <>
      <Header />
      <Suspense>
        <NewsBlock />
      </Suspense>
      <MenuLinks categories={categories} />
      <ChickenClub />
      <Suspense>
        <MenuList categories={categories} />
      </Suspense>
      <Footer />
    </>
  );
}
