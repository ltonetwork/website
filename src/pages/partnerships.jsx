import React from "react";
import Footer from "../components/Footer";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import PartnerSlider from "../components/PartnerSlider";
import BigTitle from "../components/BigTitle";
import DarkTheme from "../layouts/Dark";

import partnersData from "../data/partners/partnerData.json";

const PartnershipsDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <h2 className="title-2023 pt-100 text-center pb-30">Partnerships & Projects</h2>
      <PartnerSlider />
      <Footer />
    </DarkTheme>
  );
};

export default PartnershipsDark;
