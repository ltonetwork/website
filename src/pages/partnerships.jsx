import React from "react";
import Footer from "../components/Footer";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import PartnerInfo from "../components/PartnerInfo";
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
      {partnersData.map((partner, index) => (
        <PartnerInfo 
          key={index}
          partner={partner.partner} 
          logo={partner.logo}
          alt={partner.alt}
          info={partner.content} 
          challenges={partner.challenges}
          challengesImg={partner.challenges_img}
          challengesImgAlt={partner.challenges_alt}
          solutions={partner.solutions} 
          solutionsImg={partner.solutions_img}
          solutionsImgAlt={partner.solutions_alt}
          subBG={index%2==0}
        />
      ))}
      <Footer />
    </DarkTheme>
  );
};

export default PartnershipsDark;
