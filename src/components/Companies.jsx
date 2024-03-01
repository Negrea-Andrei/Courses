import React from 'react';
import logo1 from "../assets/logo1.jpg"
import logo2 from "../assets/logo2.jpg"
import logo3 from "../assets/logo3.jpg"
import logo4 from "../assets/logo4.png"

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
            <p className='text-center  text-[#536E96] text-xl'>Leading companies use the same courses to help employees keep their skills fresh.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src={logo1} />
                  <img src={logo2} />
                  <img src={logo3} />
                  <img src={logo4} />
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies