import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import enchanto from '../../../public/images/enchanto.webp'


const images = [
    {
        id:'1',
        name:'Shang-Chi and The Legend of Ten Rings',
        genre:'Superhero',
        year:'2020',
        desc:'',
        img:'../../../public/images/ShangChi.webp'
    },
    {
        id:'2',
        name:'Hawkeye',
        genre:'Superhero',
        year:'',
        desc:'',
        img:'../../../public/images/hawkeye.webp'
    },
    {
        id:'3',
        name:'Enchanto',
        genre:'Fantasy',
        year:'',
        desc:'',
        img:'../../../public/images/enchanto.webp'
    },
    {
        id:'4',
        name:'',
        genre:'',
        year:'',
        desc:'',
        img:'../../../public/images/bookOfBOBFT.webp'
    },
    {
        id:'5',
        name:'',
        genre:'',
        year:'',
        desc:'',
        img:'../../../public/images/hawkeye.webp'
    },
    {
        id:'6',
        name:'',
        genre:'',
        year:'',
        desc:'',
        img:'../../../public/images/snowdrop.webp'
    },
];


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
                                <h3>{item.genre}{item.year}</h3>
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