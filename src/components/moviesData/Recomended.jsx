import axios from "axios";
import React, { useEffect, useState } from "react";
import { POPULAR_URL, TOP_RATED_URL } from "./moviesData";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider from "react-slick/lib/slider";

function MovieCard(props) {
  return (
    <div className="card">
      <img
        src={`http://image.tmdb.org/t/p/w342/${props.img}`}
        alt={props.title}
      />
    </div>
  );
}

const settings = {
  infinite:false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7
};

const Recomended = () => {
  const [content, setContent] = useState([]);
  const getPopular = async () => {
    const { data } = await axios.get(POPULAR_URL);

    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="slides">
      <Slider {...settings}>
        {content.map((c) => {
          return <MovieCard key={c.id} title={c.title} img={c.poster_path} />;
        })}
      </Slider>
    </div>
  );
};

export default Recomended;
