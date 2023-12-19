import "./App.css";

import { Route, Routes } from "react-router-dom";

import Button from "./components/Button/Button";
import Footer from "./UI/Footer/Footer";
import Header from "./UI/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import TripleLineLogo from "./components/TripleLineLogo/TripleLineLogo";

function App() {
  return (
    <>
      <Header />
      <div className="productDetail">
        <div className="leftSide">
          <div className="imageContainer">
            <TripleLineLogo height={"2rem"} gap={"1.5rem"} />
            <div className="imageProductPrice">
              349
              <span className="currency">₽</span>
            </div>
            <div className="productImage">
              <img
                src="https://s82079.cdn.ngenix.net/330x0/abdar33iv38pj4cqylrr3ldpr9yi"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="productInfo">
            <div className="productNameContainer">
              <h1 className="productName">Мега ролл "Трюфель"</h1>
            </div>
            <div className="productDescriptionContainer">
              <div className="addToCartContainer">
                <div className="setQuantity">
                  <div className="removeOneContainer">
                    <button className="removeOneBtn">
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <g fill="none" fill-rule="nonzero">
                          <rect
                            id="i-minus"
                            class="i-icon i-minus"
                            width="12"
                            height="2"
                            x="2"
                            y="7"
                            fill="#FFF"
                            rx="1"
                          ></rect>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className="currentQuantity">
                    <span>1</span>
                  </div>
                  <div className="addOneContainer">
                    <button className="addOneBtn">
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <g fill="none" fill-rule="nonzero">
                          <path
                            id="i-plus"
                            class="i-icon i-plus"
                            fill="#FFF"
                            d="M7 7V3a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2H9v4a1 1 0 0 1-2 0V9H3a1 1 0 1 1 0-2h4z"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <Button className="addToCartBtn">В корзину - 348p</Button>
              </div>
              <div className="switchProductInfo">
                <div className="productDescription">Описание</div>
                <div className="separator"></div>
                <div className="productConsist">Состав</div>
              </div>
              <div className="productInfoContainer">
                <div className="productWeight">304г</div>
                <div className="descritionContent">
                  Встречайте новинку для настоящих ценителей высокой кухни !
                  Изысканный и большой Мега Ролл "Трюфель" - это хрустящая
                  пшеничная тортилья с нежными куриными стрипсами в оригинальной
                  панировке, а также сочные овощи с любимым картофелем фри. Всё
                  это заправлено несравнимым нежным соусом со вкусом трюфеля,
                  который придаёт блюду элегантный и аристократичный вкус!
                  Настоящее наслаждение для гурманов! Успейте попробовать в KFC.
                  *Внешний вид продукта может отличаться от изображения.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes> */}
    </>
  );
}

export default App;
