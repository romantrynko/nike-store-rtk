import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Clips = ({ clip, imgsrc }) => {
  return (
    <div className='clip-container group'>
      <img
        src={imgsrc}
        alt='img/clips'
        className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
      />
      <div className='play-icon-container'>
        <PlayIcon className='icon-style' />
      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className='absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl'>
        <source
          type='video/mp4'
          src={clip}
          className=''
        />
      </video>
    </div>
  );
};

export default Clips;
