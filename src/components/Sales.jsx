import React from 'react';
import Title from './utils/Title';
import Item from './utils/Item';

const Sales = ({ endpoint: { title, items } }) => {
  return (
    <div>
      <Title title={title} />
      <div>
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
