import React from "react";
import AboutHeader from "../components/About-header";
import AboutIntro from "../components/About-intro";
import CallToAction from "../components/Call-to-action";
import Clients1 from "../components/Clients1";
import Footer from "../components/Footer";
import MinimalArea from "../components/Minimal-area";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import Services4 from "../components/Services4";
import SkillsCircle from "../components/Skills-circle";
import Team1 from "../components/Team1";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import DarkTheme from "../layouts/Dark";
import HybridArchitecture from "../components/Hybrid-architecture"
import PrivatePublicLayers from "../components/PrivatePublicLayers"
import DataAnchoring from "../components/DataAnchoring"
import AnchoringPartners from "../components/AnchoringPartners"
import IdentityPlatform from "../components/IdentityPlatform"
import PointsAndTabs from "../components/PointsAndTabs"
import TitaniumLitePaper from "../components/TitaniumLitePaper"
import PressKit from "../components/PressKit"
import DownloadFontsAndLogos from "../components/DownloadFontsAndLogos"
const AboutDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu/>
      <AboutHeader/>
      <AboutIntro/>
      <Services4 withPadding withOutTitle/>
      <HybridArchitecture/>
      <PrivatePublicLayers/>
      <DataAnchoring/>
      <AnchoringPartners/>
      <IdentityPlatform/>
      <PointsAndTabs theme="dark"/>
      <TitaniumLitePaper/>
      <Team1/>
      {/* <SkillsCircle subBG theme="dark" /> */}
      <PressKit/>
    </DarkTheme>
  );
};

export default AboutDark;
