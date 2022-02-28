import React from "react";
import { disney, natGeo, marvel, starWars, Pixar } from "../images";
const SelectorBar = () => {
  return (
    <div className="selector">
      <div className="select-bx flex center">
        <div className="img-box">
          <img src={disney} alt="" />
        </div>
      </div>
      <div className="select-bx flex center">
        <div className="img-box">
          <img src={Pixar} alt="" />
        </div>
      </div>
      <div className="select-bx flex center">
        <div className="img-box">
          <img src={marvel} alt="" />
        </div>
      </div>
      <div className="select-bx flex center">
        <div className="img-box">
          <img src={starWars} alt="" />
        </div>
      </div>
      <div className="select-bx flex center">
        <div className="img-box">
          <img src={natGeo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectorBar;
