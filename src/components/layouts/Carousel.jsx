import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { images } from "../../Data/data";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "40px",
  slidesToShow: 1,
  speed: 800,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 911,
      settings: {
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 430,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <div className="cr">
      <Slider {...settings}>
        {images.map((item) => {
          return (
            <div className="items" key={item.id}>
              <div className="items-container">
                <div className="desc">
                  <h1>{item.name}</h1>
                  <h3>
                    {item.genre}
                    <br />
                    {item.year}
                  </h3>
                  <p>{item.desc}</p>
                </div>
                <div className="imgCon">
                  <img
                    src={item.img}
                    alt={item.id}
                    width="720px"
                    height="400px"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
