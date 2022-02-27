import React, { useEffect, useState } from "react";
import { DOCU_URL } from "./moviesData";
import axios from "axios";
import MovieSlider from "../layouts/MovieSlider";

const Documentries = () => {
  const [docuMovies, setDocuMovies] = useState([]);
  const getDocu = async () => {
    const { data } = await axios.get(DOCU_URL);
    setDocuMovies(data.results);
  };
  useEffect(() => {
    getDocu();
  }, []);
  return <MovieSlider type={docuMovies} />;
};

export default Documentries;
