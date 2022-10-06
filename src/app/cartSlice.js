import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartState: false,
  cartItems: []
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
      } else {
        const itemWithAmmount = { ...action.payload, productAmmount: 1 }

        state.cartItems = [...state.cartItems, itemWithAmmount]
      }
    }
  }
})

export const { setOpenCart, setCloseCart, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;