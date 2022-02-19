import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import enchanto from '../../../public/images/enchanto.webp'


const images = [
    {
        id:'1',
        img:'../../../public/images/ShangChi.webp'
    },
    {
        id:'2',
        img:'../../../public/images/hawkeye.webp'
    },
    {
        id:'3',
        img:'../../../public/images/enchanto.webp'
    },
    {
        id:'4',
        img:'../../../public/images/bookOfBOBFT.webp'
    },
    {
        id:'5',
        img:'../../../public/images/hawkeye.webp'
    },
    {
        id:'6',
        img:'../../../public/images/snowdrop.webp'
    },
];


const settings = {
    className:'center',
    centerMode:true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
};

const Carousel = () => {
  return (
    <div className='cr'>
        <Slider>
            {images.map((item)=>{
                return(
                    <div className='items' key={item.id}><img src={item.img} alt={item.id} width='640px' height='360px' /></div>
                )
            })}
        </Slider>       
    </div>
  )
}

export default Carousel;