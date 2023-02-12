import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Main = () => (
  <div id='main'>
    <img
      className='w-full h-screen object-cover object-left'
      src='bg.jpg'
      alt='main-bg-image'
    />
    <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>
          I'm Jackie Soprano
        </h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
          I
          <TypeAnimation
            sequence={[
              "'m a Traveler",
              2000,
              "'m a Trainer",
              2000,
              "'m a Guid",
              2000,
              ' can take you anywhere in the WORLD!',
              2000
            ]}
            wrapper='div'
            cursor
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
          />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <FaTwitter size={20} className='cursor-pointer' />
          <FaFacebookF size={20} className='cursor-pointer' />
          <FaInstagram size={20} className='cursor-pointer' />
        </div>
      </div>
    </div>
  </div>
);
