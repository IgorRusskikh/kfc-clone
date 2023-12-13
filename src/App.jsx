import "./App.css";

import ChikenClub from "./UI/ChikenClub/ChikenClub";
import Header from "./UI/Header/Header";
import MenuGrid from "./UI/MenuGrid/MenuGrid";
import MenuLinks from "./UI/MenuLinks/MenuLinks";
import NewsBlock from "./UI/NewsBlock/NewsBlock";

function App() {
  return (
    <>
      <Header />
      <NewsBlock />
      <MenuLinks />
      <ChikenClub />
      <div className="menuListContainer">
        <MenuGrid items={[]} />
      </div>
    </>
  );
}

export default App;
