import React from 'react';
import Title from './utils/Title';
import Item from './utils/Item';

const Sales = ({ endpoint: { title, items } }) => {
  return (
    <div>
      <Title title={title} />
      <div className='grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2'>
        {items?.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Sales;
