import React from 'react';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartState = useSelector((state) => state.cart.cartState);

  return (
    <div
      className={`fixed top-0 left-0 ring-0 blur-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
        cartState
          ? 'opacity-100 visible translate-x-0 duration-300'
          : 'opacity-0 invisible translate-x-8 duration-300'
      }`}>
      <div
        className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount />
        <CartEmpty />
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
