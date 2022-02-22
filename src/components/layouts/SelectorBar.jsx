import React from "react";
import {disney,natGeo,marvel,starWars} from '../images';
const SelectorBar = () => {
  return (
    <div className="selector">
      <div className="select-bx flex center">
        <img src={disney} alt="" />
      </div>
      <div className="select-bx flex center">Pixar</div>
      <div className="select-bx flex center">
        <img src={marvel} alt=""/>
      </div>
      <div className="select-bx flex center">
        {/* <img src={starWars} alt="" width='100%' height='100%'/> */}
      </div>
      <div className="select-bx flex center">
        <img src={natGeo} alt=""/>
      </div>
    </div>
  );
};

export default SelectorBar;
