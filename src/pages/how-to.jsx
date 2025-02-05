import React from "react";

import DarkTheme from "../layouts/Dark";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import Footer from "../components/Footer";

import BigTitle from "../components/BigTitle";
import TOC from '../components/HowTo/TOC';
import FAQ from "../components/HowTo/FAQ";
import NodeOperator from "../components/HowTo/NodeOperator";
// import Integrator from "../components/HowTo/Integrator";
// import Lease from "../components/HowTo/Lease";
import Exchanges from "../components/Exchanges";
import Buy from "../components/HowTo/Buy";
import Whitepapers from "../components/HowTo/Whitepapers";
// import Litepapers from "../components/HowTo/Litepapers";
import Wallet from "../components/HowTo/Wallet";

const HowToDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <h2 className="title-2023 pt-100 text-center pb-30">How-To & Docs</h2>
      <TOC />
      <Wallet />
      <FAQ />
      <NodeOperator />
      {/*<Integrator />*/}
      {/*<Lease />*/}
      <div className="sub-bg" style={{
          backgroundImage: "url(/img/how-to/exchange-bg.jpg)",
          backgroundPosition: "center bottom", 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "100%"}}>
        <Buy />
        <Exchanges theme="dark" />
      </div>
      <Whitepapers />
      {/*<Litepapers />*/}
      <Footer />
    </DarkTheme>
  );
};

export default HowToDark;
