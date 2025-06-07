import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/page/homepage/homepage.component";
import ShopPage from "./components/page/homepage/shop/shop.component";
import Header from "./components/header/header.component";
import "./App.css";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
