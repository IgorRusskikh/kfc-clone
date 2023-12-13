import "./App.css";

import ChikenClub from "./UI/ChikenClub/ChikenClub";
import Header from "./UI/Header/Header";
import MenuItem from "./UI/MenuItem/MenuItem";
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
        <div className="menuListCategory">
          <div className="menuListHeader">Новинки</div>
          <div className="menuListGrid">
            <MenuItem
              image="https://s82079.cdn.ngenix.net/330x0/53xcppf08fhbas1cjpkg9kg5vg30"
              name={'2 Стрипса "Трюфель"'}
              price={256}
            />
            {/* <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
