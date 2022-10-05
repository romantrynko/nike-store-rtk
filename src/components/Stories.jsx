import React from 'react';
import Title from './utils/Title';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ClockIcon, HashtagIcon, HeartIcon } from '@heroicons/react/24/solid';

const Stories = ({ stories: { title, news } }) => {
  return (
    <div className='nike-container mb-11'>
      <Title title={title} />
      <div>
        <Splide>
          {news.map((item, index) => (
            <SplideSlide
              key={index}
              className='mb=0.5'>
              <div>
                <div>
                  <img
                    src={item.img}
                    alt='img'
                    className=''
                  />
                </div>
                <div>
                  <div>
                    <HeartIcon className='icon-style' />
                    <span>{item.like}</span>
                  </div>
                  <div>
                    <ClockIcon className='icon-style' />
                    <span>{item.time}</span>
                  </div>
                  <div>
                    <HashtagIcon className='icon-style' />
                    <span>{item.by}</span>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
