import "App.css";
import Login from "Pages/Login";
import { Routes, Route } from "react-router-dom";
import Producthome from "Pages/Producthome";
import Checkout from "Pages/Checkout";
import Header from "components/Header";
import React from "react";
import { Fragment } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Producthome" element={<Producthome />} />
        <Route
          path="/Checkout"
          element={
            <Fragment>
              <Header />
              <Checkout />
            </Fragment>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
