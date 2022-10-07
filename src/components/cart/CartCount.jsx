import React from 'react';
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { setCloseCart } from '../../app/cartSlice';

const CartCount = ({ handleClearCart }) => {
  const dispatch = useDispatch();

  const cartCloseHanler = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  return (
    <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 ring-0 w-full'>
      <div className='flex items-center gap-3'>
        <div
          onClick={cartCloseHanler}
          className='grid items-center cursor-pointer'>
          <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
        </div>
        <div className='grid items-center'>
          <h1 className='text-base font-medium text-slate-900'>
            Your Cart{' '}
            <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>
              (Items)
            </span>
          </h1>
        </div>
      </div>
      <div className='flex items-center'>
        <button
          type='button'
          onClick={handleClearCart}
          className='rounded bg-theme-cart active:scale-90 p-0.5 text-white stroke-[2]'>
          <XMarkIcon className='w-5 h-5' />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
