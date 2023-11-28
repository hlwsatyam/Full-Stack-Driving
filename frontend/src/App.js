import React, { Fragment } from "react";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Auth from "./Pages/Auth/Auth";
import Header from "./Pages/Nav/Header";
import { Route, Routes } from "react-router-dom";
import Ratings from "./Pages/RatingHistory/Ratings";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/:username" element={<Ratings />} />
      </Routes>
    </Fragment>
  );
};

export default App;
