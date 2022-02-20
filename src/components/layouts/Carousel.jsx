import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { images } from '../../Data/data';




const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding:'60px',
    speed: 600,
    slidesToShow: 1,
};

const Carousel = () => {
  return (
    <div className='cr'>
        <Slider {...settings} >
            {images.map((item)=>{
                return(
                    <div className='items' key={item.id}>
                        <div className="items-container">
                            <div className='desc'>
                                <h1>{item.name}</h1>
                                <h3>{item.genre}<br />{item.year}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="imgCon">
                                <img src={item.img} alt={item.id} width='720px' height='411px'/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>       
    </div>
  )
}

export default Carousel;