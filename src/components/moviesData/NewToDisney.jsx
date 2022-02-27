import React, { useEffect, useState } from "react";
import axios from "axios";
import { New_URL } from "./moviesData";
import MovieSlider from "../layouts/MovieSlider";

const NewToDisney = () => {
  const [newMovies, setNewMovies] = useState([]);

  const getNewMov = async () => {
    const { data } = await axios.get(New_URL);
    setNewMovies(data.results);
  };

  useEffect(() => {
    getNewMov();
  }, []);

  return <MovieSlider type={newMovies} />;
};

export default NewToDisney;
