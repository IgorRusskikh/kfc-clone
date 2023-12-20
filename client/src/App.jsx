import "./App.css";

import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
