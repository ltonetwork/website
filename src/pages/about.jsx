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
import Works2Slider from "../components/Works2-slider";
import DarkTheme from "../layouts/Dark";

const AboutDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <AboutHeader />
      <AboutIntro />
      <Services4 withPadding withOutTitle />
      <VideoWithTestimonials />
      <SkillsCircle subBG theme="dark" />
      <Team1 />
      <MinimalArea />
      <Clients1 theme="dark" />
      <CallToAction subBG />
      <Works2Slider />
      <Footer />
    </DarkTheme>
  );
};

export default AboutDark;
