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
      state.cartState = action.payload.cartState
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState
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
    }
  }
})

export const { setOpenCart, setCloseCart, addItemToCart } = cartSlice.actions;

export const cartStateSelector = state => state.cart.cartState;

export const cartItemSelector = state => state.cart.cartItems;

export default cartSlice.reducer;