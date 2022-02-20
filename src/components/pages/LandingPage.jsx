import React from "react";
import Carousel from "../layouts/Carousel";
import LpMainContent from "../layouts/LpMainContent";
import SelectorBar from "../layouts/SelectorBar";

const LandingPage = () => {
  return (
    <div className="container flex-col">
      <Carousel />
      <SelectorBar />
      <LpMainContent />
    </div>
  );
};

export default LandingPage;
