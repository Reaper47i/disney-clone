import axios from "axios";
import React, { useEffect, useState } from "react";
import { POPULAR_URL } from "./moviesData";
import MovieSlider from "../layouts/MovieSlider";

const Recomended = () => {
  const [recomend, setRecomend] = useState([]);
  const getPopular = async () => {
    const { data } = await axios.get(POPULAR_URL);
    setRecomend(data.results);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return <MovieSlider type={recomend} />;
};

export default Recomended;
