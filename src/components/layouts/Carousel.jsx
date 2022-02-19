import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const images = [
    {
        id:'1',
        color:'blue'
    },
    {
        id:'2',
        color:'red'
    },
    {
        id:'3',
        color:'orange'
    },
    {
        id:'4',
        color:'aqua'
    },
    {
        id:'5',
        color:'purple'
    },
    {
        id:'6',
        color:'black'
    },
];


const settings = {
    className:'center',
    centerMode:true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Carousel = () => {
  return (
    <div className='cr'>
        <Slider>
            {images.map(img=>{
                return(
                    <div className='items' key={img.id} style={{ backgroundColor:`${img.color}`}}>{img.id}</div>
                )
            })}
        </Slider>       
    </div>
  )
}

export default Carousel;