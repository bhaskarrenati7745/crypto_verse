import React from "react";
import { Layout, Typography, Space } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";
import CryptoCurrencies from "./pages/CryptoCurrencies";
import CryptoDetails from "./pages/CryptoDetails";
import Exchanges from "./pages/Exchanges";
import News from "./pages/News";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<HomePage />} />

                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<CryptoCurrencies />}
                />

                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                />

                {/* <Route exact path="/exchanges" element={<Exchanges />} /> */}

                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Cryptoverse
              <br /> All rights Reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>

              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
