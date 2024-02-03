import React from "react";
import Appbar from "./components/Appbar";
import "./App.css";
import Home from "./components/Home";
import ChooseUs from "./components/ChooseUs";
import About from "./components/About";
import Explore from "./components/Explore";
import Productrow from "./components/Productrow";
const App = () => {
  return (
    <div className="container-fluid p-0 m-0 ">
      <Appbar></Appbar>
      <Home></Home>
      <ChooseUs></ChooseUs>
      <About></About>
      <Explore></Explore>
      <Productrow></Productrow>
    </div>
  );
};

export default App;
