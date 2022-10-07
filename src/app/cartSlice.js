import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
      document.body.style.overflow = 'hidden';
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState
      document.body.style.overflow = 'auto';
    },
    addItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].productAmmount += 1

        toast.success(`One more ${action.payload.title} added`)
      } else {
        const itemWithAmmount = { ...action.payload, productAmmount: 1 }

        state.cartItems = [...state.cartItems, itemWithAmmount]

        toast.success(`${action.payload.title} added to cart`)
      }

      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    removeItemFromCart: (state, action) => {
      const filteredItems = state.cartItems.filter(item => item.id !== action.payload.id);
      console.log(action.payload.id);

      state.cartItems = filteredItems
      localStorage.setItem('cart', JSON.stringify(filteredItems));

      toast.success(`${action.payload.title} removed from cart`)
    },
    increaseCountOfItem: (state, action) => {
      const foundItem = state.cartItems.find(item => item.id === action.payload.id)

    }
  }
})

export const { setOpenCart, setCloseCart, addItemToCart, removeItemFromCart } = cartSlice.actions;

export const cartStateSelector = state => state.cart.cartState;

export const cartItemSelector = state => state.cart.cartItems;

export const cartItemsAmount = state => state.cart.cartItems.length

export default cartSlice.reducer;