import "./App.css";

import { Route, Routes } from "react-router-dom";

import Button from "./components/Button/Button";
import MainPage from "./pages/MainPage/MainPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <div id="page">
        <div className="loginForm">
          <div className="headerForm">
            Вход в системы ресторанов KFC и Rostic’s
          </div>
          <div className="fieldsContainer">
            <div className="fieldName">Номер телефона</div>
            <label className="fieldLabel" htmlFor="phone">
              Укажите номер телефона
            </label>
            <input
              id="phoneInput"
              type="text"
              name="phone"
              placeholder="+7 (000) 000-00-00"
            />
            <div className="checkboxContainer">
              <span className="checkbox"></span>
              <span className="policy">
                <span>При входе или регистрации, вы соглашаетесь </span>
                <span className="bolderPolicy">
                  с политикой конфиденциальности и условиями сервиса
                </span>
              </span>
            </div>
            <Button
              btnStyles={{
                backgroundColor: "#6b6a68",
                width: "100%",
                marginTop: "1.5rem",
              }}
            >
              Получить код по смс
            </Button>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes> */}
    </>
  );
}

export default App;
