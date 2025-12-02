import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart:(state,action) => {
      state.items = [...state.items, action.payload]
    },
    removeToCart: (state,action) => {
      const index = state.items.filter(item=>item.id === action.payload.id)

      let newCart =[...state.items];
      if(!index >=0){
        newCart.splice(index,1);
      }else{
console.warn(`can not remove product ${action.payload.id} because is not Cart`)
      }
      state.items = newCart
    },
  },
})

export const { addtoCart, removeToCart } = cartSlice.actions
export const selectCartItem = (state) => state.cart.items
export const selectCartItemId = (state,id) => state.cart.items.filter(item=>item.id== id )
export const selectCartTotal = (state) => state.cart.items.reduce((total,item)=> total += item.price,0 )
export default cartSlice.reducer