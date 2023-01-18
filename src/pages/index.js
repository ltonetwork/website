import React from "react";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import HomeHero from "../components/HomeHero";
import DarkTheme from "../layouts/Dark";

import WhatIsLTO from "../components/WhatIsLTO";

import SectionWrapper from "../components/SectionWrapper";
import BigTitle from "../components/BigTitle";

import HybridArchitecture from "../components/Hybrid-architecture";
// import DataAnchoring from "../components/DataAnchoring";
// import AnchoringPartners from "../components/AnchoringPartners";
import IdentityPlatform from "../components/IdentityPlatform";
import TitaniumLitePaper from "../components/TitaniumLitePaper";

import Team1 from "../components/Team1";
import PressKit from "../components/PressKit";
import Works2023Slider from "../components/Works2023-slider";

import Footer from "../components/Footer";

const ShowcaseDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <HomeHero />
      <WhatIsLTO/>
      <SectionWrapper> 
        <BigTitle 
          title="Key Tech & Benefits" 
          subtitle="What we offer" 
          backTitle="Key Tech"
          paddingTop="0" 
        />
        <HybridArchitecture/>
        {/*<DataAnchoring/>*/}
        {/*<AnchoringPartners/>*/}
        <IdentityPlatform/>
        <TitaniumLitePaper/>
      </SectionWrapper>
      <Team1/>
      <PressKit/>
      <Works2023Slider />
      <Footer />
    </DarkTheme>
  );
};

export default ShowcaseDark;
