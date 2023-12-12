import "./App.css";

import ChikenClub from "./UI/ChikenClub/ChikenClub";
import Header from "./UI/Header/Header";
import MenuLinks from "./UI/MenuLinks/MenuLinks";
import NewsBlock from "./UI/NewsBlock/NewsBlock";

function App() {
  return (
    <>
      <Header />
      <NewsBlock />
      <MenuLinks />
      <ChikenClub />
    </>
  );
}

export default App;
