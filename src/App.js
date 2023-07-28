import "./App.css";
import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import Context from "./store/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WallBody from "./components/WallBody";

const AppLayout = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <Context>
      <BrowserRouter>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Body searchText={searchText}/>} />
          <Route path="/wall/:id" element={<WallBody searchText={searchText}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context>
  );
};

export default AppLayout;
