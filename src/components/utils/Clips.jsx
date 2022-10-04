import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Clips = ({ clip, imgsrc }) => {
  return (
    <div className='clip-container group'>
      <img
        src={imgsrc}
        alt='img/clips'
        className='video-banner'
      />
      <div className='play-icon-container'>
        <PlayIcon className='icon-style' />
      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className='video'>
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
