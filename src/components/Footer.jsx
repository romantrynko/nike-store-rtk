import React from 'react';

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <div>
      <footer>
        <div>
          <div>
            {titles?.map((item, index) => (
              <div
                key={index}
                className=''>
                <h1>{item.title}</h1>
              </div>
            ))}
            {links.map((linksList, index) => (
              <ul key={index}>
                {linksList.map((link, index) => (
                  <li key={index}>{link.link}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
