import React from "react";
import { Route, Routes } from "react-router-dom";
import Statics from "../pages/statics";
import Home from "../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<Statics />} />
    </Routes>
  );
};

export default Router;
