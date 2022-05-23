import React from "react";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import Footer from "../components/Footer";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import Services4 from "../components/Services4";
import Team1 from "../components/Team1";
import Works2Slider from "../components/Works2-slider";
import DarkTheme from "../layouts/Dark";
import HybridArchitecture from "../components/Hybrid-architecture";
import PrivatePublicLayers from "../components/PrivatePublicLayers";
import DataAnchoring from "../components/DataAnchoring";
import AnchoringPartners from "../components/AnchoringPartners";
import IdentityPlatform from "../components/IdentityPlatform";
import PointsAndTabs from "../components/PointsAndTabs";
import TitaniumLitePaper from "../components/TitaniumLitePaper";
import PressKit from "../components/PressKit";
import SectionWrapper from "../components/SectionWrapper";
import BigTitle from "../components/BigTitle";
const AboutDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu/>
      <AboutHeader/>
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

export default AboutDark;
