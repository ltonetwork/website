import React from "react";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import HomeHero from "../components/HomeHero";
import DarkTheme from "../layouts/Dark";

import HybridPower from "../components/Home2023/HybridPower";
import TrueAssetOwnership from "../components/Home2023/TrueAssetOwnership";
import Ownables from "../components/Home2023/Ownables";
import Proofi from "../components/Home2023/Proofi";
import YourWalletIsYou from "../components/Home2023/YourWalletIsYou";
import MobileWallet from "../components/Home2023/MobileWallet";

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
      <HybridPower />
      {/* <MobileWallet /> */}
      <TrueAssetOwnership />
      <Ownables />
      <Proofi />
      <YourWalletIsYou />
      <Team1/>
      <PressKit/>
      <Works2023Slider />
      <Footer />
    </DarkTheme>
  );
};

export default ShowcaseDark;
