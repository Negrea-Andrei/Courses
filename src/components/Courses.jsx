import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import courses_data   from '../courses_data';

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='w-full bg-[#E9F8F3B2] py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
              <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
            </div>
            
            <Slider {...settings} className='px-5'>
              {courses_data.map((course,index)=>
                <div key={index}>
                  <Card course={course} />
                </div> ) }
              

            </Slider>
            
        </div>

    </div>
  )
}

export default Courses