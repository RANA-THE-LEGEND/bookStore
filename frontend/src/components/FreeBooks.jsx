import React from 'react'
import list from '../../public/list.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';

function FreeBooks() {
    const filteredData = list.filter((data)=>data.category==="free");
    // console.log(filteredData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]}
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4 dark:bg-slate-800 dark:text-white pb-6 '>
        <div>
    <h1 className='font-bold text-xl pb-2'>Free offered courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum tempore error, quas molestias aliquid excepturi sit dolores aliquam cupiditate dolores aliquam cupiditate!</p>

        </div>
        <div className='mt-5 mb-2'>
        <Slider {...settings}>
       {filteredData?.map((e)=>(
        <div key={e.id}>
            <Card name={e.name} category={e.category} title={e.title} price={e.price} img={e.image}/>
        </div>
       ))}
      </Slider>
        </div>
    </div>
    </>
  )
}

export default FreeBooks