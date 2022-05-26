import React from "react";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import HomeHero from "../components/HomeHero";
import DarkTheme from "../layouts/Dark";

import AboutIntro from "../components/About-intro";
import Services4 from "../components/Services4";

import SectionWrapper from "../components/SectionWrapper";
import BigTitle from "../components/BigTitle";

import HybridArchitecture from "../components/Hybrid-architecture";
import PrivatePublicLayers from "../components/PrivatePublicLayers";
import DataAnchoring from "../components/DataAnchoring";
import AnchoringPartners from "../components/AnchoringPartners";
import IdentityPlatform from "../components/IdentityPlatform";
import PointsAndTabs from "../components/PointsAndTabs";
import TitaniumLitePaper from "../components/TitaniumLitePaper";

import Team1 from "../components/Team1";
import PressKit from "../components/PressKit";
import Works2Slider from "../components/Works2-slider";

import Footer from "../components/Footer";

const ShowcaseDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <HomeHero />
      <AboutIntro/>
      <Services4 withPadding withOutTitle/>
      <SectionWrapper> 
        <BigTitle 
          title="Key Tech & Benefits" 
          subtitle="What we offer" 
          backTitle="Key Tech"
          paddingTop="0" 
        />
        <HybridArchitecture/>
        <PrivatePublicLayers/>
        {/*<DataAnchoring/>*/}
        {/*<AnchoringPartners/>*/}
        <IdentityPlatform/>
        <PointsAndTabs theme="dark"/>
        <TitaniumLitePaper/>
      </SectionWrapper>
      <Team1/>
      <PressKit/>
      <Works2Slider />
      <Footer />
    </DarkTheme>
  );
};

export default ShowcaseDark;
