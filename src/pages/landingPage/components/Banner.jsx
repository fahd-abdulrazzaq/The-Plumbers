import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Banner() {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
        {/* image */}
        <div className='md:w-1/2'>
          <img src='/images/landingPage/banner.png' alt='' />
        </div>

        {/* text */}
        <div className='md:w-1/2 space-y-7 px-4'>
          <h2 className='text-4xl md:text-5xl font-bold leading-snug md:leading-snug'>
            Unlock Your Potential with Personalized{' '}
            <span className='text-blue'>Learning</span>
          </h2>
          <p className='text-xl text-[#4A4A4A]'>
            Discover courses tailored to your learning style.
          </p>
          <NavLink
            className='btn bg-blue px-8 py-3 font-semibold text-white rounded-full'
            to='/signup'
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
}
