import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/add-page";
import Home from "../pages/home";

const Routing = () => {
  return (
    <div>
      <Helmet>
        <title>Plumber</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-cards" element={<AddPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
