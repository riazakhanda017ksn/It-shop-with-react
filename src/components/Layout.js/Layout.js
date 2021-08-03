import React from "react";
import "./Layout.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Home from "../../components/Home/Home";
import Banner from "../Banner/Banner";

const Layout = () => {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <Banner></Banner>
    </div>
  );
};

export default Layout;
