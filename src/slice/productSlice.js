import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item) => item.id === action.payload.id);
      if (findProduct !== -1) {
        state.cartItem[findProduct].qun += 1;
      } else {
        state.cartItem = [...state.cartItem, action.payload];
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
    productIncrement: (state, action) => {
      if (state.cartItem[action.payload].qun < state.cartItem[action.payload].stock) {
        state.cartItem[action.payload].qun += 1;
        localStorage.setItem('cart', JSON.stringify(state.cartItem));
      }
    },
    productDecrement: (state, action) => {
      if (state.cartItem[action.payload].qun > 0) {
        state.cartItem[action.payload].qun -= 1;
        localStorage.setItem('cart', JSON.stringify(state.cartItem));
      }
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter((item, index) => index !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
  },
});

export const { addToCart, productIncrement, productDecrement, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
