import React from 'react';
import Clips from './utils/Clips';
import SocialLinks from './utils/SocialLinks';

const Hero = ({
  heroapi: { title, img, subtitle, btntext, sociallinks, videos }
}) => {
  return (
    <div className='hero-wrapper'>
      <div className='hero-bg'></div>
      <div className='hero-content'>
        <div className='hero-content-main-section'>
          <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>
            {title}
          </h1>
          <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>
            {subtitle}
          </h1>
          <button
            type='button'
            className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'>
            {btntext}
          </button>
          <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
            {videos?.map((val, i) => (
              <Clips
                key={i}
                imgsrc={val.imgsrc}
                clip={val.clip}
              />
            ))}
          </div>
          <div className='grid items-center absolute top=[33vh] lg:top-[27vh] right-0 gap-3'>
            {sociallinks.map((val, i) => (
              <SocialLinks
                key={i}
                icon={val.icon}
              />
            ))}
          </div>
        </div>
        <div className=''>
          <img
            src={img}
            alt='hero-img/img'
            className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
