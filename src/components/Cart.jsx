import React from 'react';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartStateSelector,
  cartItemSelector,
  setCloseCart
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

  return (
    <div
      className={`fixed top-0 left-0 ring-0 blur-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
        cartState
          ? 'opacity-100 visible translate-x-0 duration-300'
          : 'opacity-0 invisible translate-x-8 duration-300'
      }`}>
      <div
        className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount onCartToggle={onCartToggle} />

        {cartItems?.length === 0 ? (
          <CartEmpty />
        ) : (
          <div>
            <div className='flex flex-col items-start justify-start gap-y-14 lg:gap-y-12 overflow-y-scroll h-[95vh] scroll-hidden pb-8'>
              {cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  {...item}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
