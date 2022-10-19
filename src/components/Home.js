import React from "react";
import About from "./About";
import Data from "./Data";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import Platform from "./Platform";
import Pricing from "./Pricing";
import Support from "./Support";
import Slide from "./Slide";

// Always have a home.js for a all static files and reroute using react dom routes
const Home = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <About />
      <Data />
      <Support />
      <Platform />
      <Pricing />
      <Slide />
      <Footer />
    </>
  );
};

export default Home;
