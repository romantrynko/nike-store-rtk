import React from 'react';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartStateSelector,
  cartItemSelector,
  setCloseCart,
  clearCart
} from '../app/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(cartStateSelector);
  const cartItems = useSelector(cartItemSelector);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false
      })
    );
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      className={`fixed top-0 left-0 ring-0 blur-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
        cartState
          ? 'opacity-100 visible translate-x-0 duration-300'
          : 'opacity-0 invisible translate-x-8 duration-300'
      }`}>
      <div
        className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount
          onCartToggle={onCartToggle}
          handleClearCart={handleClearCart}
        />

        {cartItems?.length === 0 ? (
          <CartEmpty />
        ) : (
          <div>
            <div className='flex flex-col items-start justify-start gap-y-14 lg:gap-y-12 overflow-y-scroll h-[81vh] scroll-hidden py-6'>
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  {...item}
                />
              ))}
            </div>

            <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
              <div className='flex item-center justify-between'>
                <h1 className='text-base font-semibold'>Subtotal</h1>
                <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>
                  000
                </h1>
              </div>
              <div className='grid items-center gap-2'>
                <p className='text-sm font-medium text-center'>
                  Taxes and Shipping Will Calculate At shipping
                </p>
                <button
                  type='button'
                  className='button-theme bg-theme-cart text-white'>
                  Check out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
