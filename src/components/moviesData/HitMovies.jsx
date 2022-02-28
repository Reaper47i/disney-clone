import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieSlider from "../layouts/MovieSlider";
import { HIT_URL } from "./moviesData";

const HitMovies = () => {
  const [hitMovies, setHitMovies] = useState([]);
  const getHitMov = async () => {
    const { data } = await axios.get(HIT_URL);
    setHitMovies(data.results);
  };
  useEffect(() => {
    getHitMov();
  }, []);
  return <MovieSlider type={hitMovies} />;
};

export default HitMovies;
