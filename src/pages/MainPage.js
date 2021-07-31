import React from "react";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import "./MainPage.css"

const MainPage = () => {
  return (
    <div className="container">
      <NavBar />
      <Header />
    </div>
  )
};

export default MainPage;
