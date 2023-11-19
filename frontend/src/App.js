import React, { Fragment } from "react";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Auth from "./Pages/Auth/Auth";
import Header from "./Pages/Nav/Header";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Fragment>
  );
};

export default App;
