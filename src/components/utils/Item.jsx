import React from 'react';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { addItemToCart, setOpenCart } from '../../app/cartSlice';

const Item = ({
  exists,
  btn,
  color,
  id,
  img,
  price,
  rating,
  shadow,
  text,
  title
}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const item = { id, title, text, img, color, shadow, price };

    dispatch(addItemToCart(item));
  };

  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }));
  };

  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
        exists ? 'justify-items-start' : 'justify-items-center'
      } rounded py-4 px-5 transitions-theme w-full hover:scale-105`}>
      <div
        className={`grid items-center ${
          exists ? 'justify-items-start' : 'justify-items-center'
        }`}>
        <h1 className='text-slate-200 textt-xl lg:text-lg md:text-base font-medium filter drop-shadow'>
          {title}
        </h1>
        <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>
          {text}
        </p>

        <div className='flex items-center justify-between w-28 my-2'>
          <div className='flex items-center bg-white/80 px-1 rounded blur-effect-theme'>
            <h1 className='text-black text-sm font-medium'>${price}</h1>
          </div>
          <div className='flex items-center gap-1'>
            <StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4' />
            <h1 className='md:text-sm font-normal text-slate-100'>{rating}</h1>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={() => addToCart()}
            className='bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-slate-200'>
            <ShoppingBagIcon className='icon-style text-slate-900' />
          </button>
          <button
            type='button'
            onClick={() => {
              addToCart();
              onCartToggle();
            }}
            className='bg-white/90 blur-effect-theme button-theme px-2 shadow shadow-slate-200 text-sm text-black'>
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
          exists ? 'absolute top-5 right-1' : 'justify-center'
        }`}>
        <img
          src={img}
          alt={`img/item-img${id}`}
          className={`transitions-theme hover:-rotate-12 ${
            exists ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'h-36 w-64'
          }`}
        />
      </div>
    </div>
  );
};

export default Item;
