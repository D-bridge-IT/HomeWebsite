import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/HomeWebsite/" element={<Home />} />
    </Routes>
  );
};

export default Router;
