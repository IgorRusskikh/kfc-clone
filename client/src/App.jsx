import "./App.css";

import { Route, Routes } from "react-router-dom";

import AddToCart from "./UI/AddToCart/AddToCart";
import DetailProductDescrip from "./UI/DetailProductDescrip/DetailProductDescrip";
import DetailProductImage from "./UI/DetailProductImage/DetailProductImage";
import Footer from "./UI/Footer/Footer";
import Header from "./UI/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <Header />
      <div className="productDetail">
        <div className="leftSide">
          <DetailProductImage />
        </div>
        <div className="rightSide">
          <div className="productInfo">
            <div className="productNameContainer">
              <h1 className="productName">Мега ролл "Трюфель"</h1>
            </div>
            <div className="productDescriptionContainer">
              <AddToCart />
              <div className="switchProductInfo">
                <div className="productDescription">Описание</div>
                <div className="separator"></div>
                <div className="productConsist">Состав</div>
              </div>
              <DetailProductDescrip />
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
