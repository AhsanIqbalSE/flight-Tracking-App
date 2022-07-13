import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../pages/Home";
import FlightDetails from "../pages/FlightsDetails";
import SecureRoute from "./SecureRoute";

const Router = (props) => {
  const searches = useSelector((state) => state.searches);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route element={<SecureRoute searches={searches} />}>
          <Route
            exact={true}
            path="/flightDetails"
            element={<FlightDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

{/* <Route element={<SecureRoute user={user} />}>
  <Route exact={true} path="/home" element={<Home />} />
  <Route exact={true} path="/my-items" element={<Items />} />
  <Route exact={true} path="/items-for-sale" element={<ItemsLisiting />} />
</Route>; */}
