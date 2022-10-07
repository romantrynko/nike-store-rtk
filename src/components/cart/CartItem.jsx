import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import {
  decreaseCountOfItem,
  increaseCountOfItem,
  removeItemFromCart
} from '../../app/cartSlice';

const CartItem = ({
  id,
  title,
  text,
  img,
  color,
  shadow,
  price,
  productAmmount
}) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(removeItemFromCart({ id, title }));
  };

  const handleIncreaseItemCount = () => {
    dispatch(increaseCountOfItem({ id, title }));
  };
  const handleDecreaseItemCount = () => {
    dispatch(decreaseCountOfItem({ id, title }));
  };

  return (
    <div className='flex items-center justify-between w-full px-5'>
      <div className='flex items-center gap-5'>
        <div
          className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all ease-in-out grid items-center`}>
          <img
            src={img}
            alt='img'
            className='w-36 h-auto object-fill lg:w-28'
          />
          <div className='absolute top-1 right-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>
            ${price}
          </div>
        </div>
        <div className='grid items-center gap-4'>
          <div className='grid items-center leading-none'>
            <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>
              {title}
            </h1>
            <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
          </div>
          <div className='flex items-center justify-around w-full'>
            <button
              type='button'
              onClick={handleDecreaseItemCount}
              className='bg-theme-cart rounded text-white stroke-[2] w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 cursor-pointer'>
              <MinusIcon className='w-5 h-5' />
            </button>
            <div className='bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center'>
              {productAmmount}
            </div>
            <button
              type='button'
              onClick={handleIncreaseItemCount}
              className='bg-theme-cart rounded text-white stroke-[2] w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'>
              <PlusIcon className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
      <div className='grid items-center gap-5'>
        <div className='grid items-center justify-center'>
          <h1 className='text-lg lg:text-base terxt-slate-900 font-medium'>
            ${price * productAmmount}
          </h1>
        </div>
        <div className=''>
          <button
            type='button'
            onClick={handleDeleteItem}
            className='bg-theme-cart rounded text-white justify-center items-center p-1 lg:p-0.5 grid'>
            <TrashIcon className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
