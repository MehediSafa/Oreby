import { createSlice } from '@reduxjs/toolkit'
import { json } from 'react-router-dom'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :[]
  },
  reducers: {
    addToCart: (state,action) => {
       let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)

       if(findProduct !== -1){
        state.cartItem[findProduct].qun += 1
        localStorage.setItem('cart', JSON.stringify(state.cartItem))
       } else {
            state.cartItem = [...state.cartItem, action.payload ]
            localStorage.setItem('cart', JSON.stringify(state.cartItem))
       }
       
    },
    productIncrement : (state, action)=>{
        state.cartItem[action.payload].qun += 1
    },
    productDecrement : (state, action)=>{
        if(state.cartItem[action.payload].qun > 0){

            state.cartItem[action.payload].qun -= 1
        }
    }
  },
})


export const { addToCart,productIncrement,productDecrement } = productSlice.actions

export default productSlice.reducer