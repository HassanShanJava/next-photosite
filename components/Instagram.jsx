import React from 'react'

import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className="text-2xl font-bold ">Follow me on Instagram</p>
        <p className="pb-4">@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 '>
            {/* whenever we hover over the insta imae we want the insta logo */}
            <InstagramImg socailImg={IgImg1} className="w-full h-full" />
            <InstagramImg socailImg={IgImg2} className="w-full h-full" />
            <InstagramImg socailImg={IgImg3} className="w-full h-full" />
            <InstagramImg socailImg={IgImg4} className="w-full h-full" />
            <InstagramImg socailImg={IgImg5} className="w-full h-full" />
            <InstagramImg socailImg={IgImg6} className="w-full h-full" />
        </div>
    </div>
  )
}

export default Instagram