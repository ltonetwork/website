import React from "react";
import BlogsThreeColumn1  from "../components/Blogs-three-column1";
import Footer from "../components/Footer";
import NavbarFullMenu from "../components/Navbar-full-menu/navbar-full-menu";
import DarkTheme from "../layouts/Dark";

const NewsDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <BlogsThreeColumn1  />
      <Footer />
    </DarkTheme>
  );
};

export default NewsDark;
