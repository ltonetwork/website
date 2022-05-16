import React from "react";
import Clients1 from "../components/Clients1";
import Footer from "../components/Footer";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import DarkTheme from "../layouts/Dark";

const PartnershipsDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <Clients1 theme="dark" />
      <Footer />
    </DarkTheme>
  );
};

export default PartnershipsDark;
