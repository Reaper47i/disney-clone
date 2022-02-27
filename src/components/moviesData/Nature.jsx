import React, { useEffect, useState } from "react";
import axios from "axios";
import { NATURE_URL } from "./moviesData";
import MovieSlider from "../layouts/MovieSlider";

const Nature = () => {
  const [natMovies, setNatMovies] = useState([]);
  const getNatMovies = async () => {
    const { data } = await axios.get(NATURE_URL);
    setNatMovies(data.results);
  };
  useEffect(() => {
    getNatMovies();
  }, []);
  return <MovieSlider type={natMovies} />;
};

export default Nature;
