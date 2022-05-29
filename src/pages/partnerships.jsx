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
      <BigTitle 
        title="Partnerships & Projects" 
        subtitle="Our Partners" 
        backTitle="Partners"
        paddingTop="100" 
      />
      <PartnerSlider />
      <Footer />
    </DarkTheme>
  );
};

export default PartnershipsDark;
