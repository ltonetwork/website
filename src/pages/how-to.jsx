import React from "react";

import DarkTheme from "../layouts/Dark";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import Footer from "../components/Footer";

import BigTitle from "../components/BigTitle";
import FAQ from "../components/HowTo/FAQ";
import NodeOperator from "../components/HowTo/NodeOperator";
import Integrator from "../components/HowTo/Integrator";
import Lease from "../components/HowTo/Lease";
import Exchanges from "../components/Exchanges";
import Buy from "../components/HowTo/Buy";
import Whitepapers from "../components/HowTo/Whitepapers";
import Litepapers from "../components/HowTo/Litepapers";

const HowToDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <BigTitle 
        title="How-To & Docs" 
        subtitle="Learn More" 
        backTitle="How To"
        paddingTop="100" 
      />
      <FAQ />
      <NodeOperator />
      <Integrator />
      <Lease />
      <Buy />
      <Exchanges subBG theme="dark" />
      <Whitepapers />
      <Litepapers />
      <Footer />
    </DarkTheme>
  );
};

export default HowToDark;
