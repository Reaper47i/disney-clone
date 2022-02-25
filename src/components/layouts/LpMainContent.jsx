import React from "react";
import {
  Recomended,
  NewToDisney,
  HitMovies,
  Documentaries,
  Nature,
  Action,
} from "../moviesData/mvIndex";

const LpMainContent = () => {
  return (
    <div className="container flex-col center LpMain">
      <div className="lists container flex-col center">
        <h3>Recomended For You</h3>
        <Recomended />
      </div>
      <div className="lists container flex-col center">
        <h3>New To Disney+</h3>
        <NewToDisney />
      </div>
      <div className="lists container flex-col center">
        <h3>Hit Movies</h3>
        <HitMovies />
      </div>
      <div className="lists container flex-col center">
        <h3>Documentaries</h3>
        <Documentaries />
      </div>
      <div className="lists container flex-col center">
        <h3>Animals and Nature</h3>
        <Nature />
      </div>
      <div className="lists container flex-col center">
        <h3>Action Adventure</h3>
        <Action />
      </div>
    </div>
  );
};

export default LpMainContent;
