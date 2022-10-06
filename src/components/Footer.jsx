import React from 'react';

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <div>
      <footer className='bg-theme'>
        <div className='nike-container text-slate-200'>
          <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
            {titles?.map((item, index) => (
              <div
                key={index}
                className='grid lg:text-base'>
                <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>
                  {item.title}
                </h1>
              </div>
            ))}
            {links.map((linksList, index) => (
              <ul
                key={index}
                className='grid items-center gap-1'>
                {linksList.map((link, index) => (
                  <li
                    key={index}
                    className='text-sm sm:text-xs'>
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className='mt-5 text-center'>
            <p className='text-sm md:text-center'>
              Copyright<sup className='text-base font-bold'>&copy;</sup>All
              rights reserved 2022{' '}
              <span className='font-semibold'>DEVELOPERS</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
