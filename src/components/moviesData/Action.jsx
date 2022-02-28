import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieSlider from "../layouts/MovieSlider";
import { ACTION_URL } from "./moviesData";

const Action = () => {
  const [actionMov, setActionMov] = useState([]);
  const getActionMov = async () => {
    const { data } = await axios.get(ACTION_URL);
    setActionMov(data.results);
  };
  useEffect(() => {
    getActionMov();
  }, []);
  return <MovieSlider type={actionMov} />;
};

export default Action;
