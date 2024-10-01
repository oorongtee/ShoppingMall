import { createSlice } from '@reduxjs/toolkit';

const shoppingCartState = createSlice({
  name: 'cart',
  initialState: {items: [],cartTotalPrice: 0,},
  reducers: {
    addToCart: (state, action) => {
      if (!action.payload) {
        return state;
      }
      const itemExists = state.items.some(item => item.name === action.payload.name);
      if (!itemExists) {
        if (!Object.prototype.hasOwnProperty.call(action.payload, 'totalPrice')) {
          action.payload.totalPrice = action.payload.amount * action.payload.price;
        } 
        state.items.push(action.payload);
        state.cartTotalPrice += action.payload.totalPrice;
      }
    },
    removeFromCart: (state, action) => {
      if (!action.payload) {
        return state;
      }
      const itemIndex = state.items.findIndex(item => item.name === action.payload.name);
      if (itemIndex !== -1) {
        state.cartTotalPrice -= state.items[itemIndex].totalPrice;
        state.items.splice(itemIndex, 1);
      }
    },
    
    addAmountCart: (state, action) => {
      if (!action.payload) {
        return state;
      }
      const item = state.items.find(item => item.name === action.payload.name);
      if (item && item.amount >= 1) {
        item.amount++;
        item.totalPrice = item.amount * item.price;
        state.cartTotalPrice += item.price;
      }
    },
    reduceAmountCart: (state, action) => {
      if (!action.payload) {
        return state;
      }
      const item = state.items.find(item => item.name === action.payload.name);
      if (item && item.amount > 1) {
        item.amount--;
        item.totalPrice = item.amount * item.price;
        state.cartTotalPrice -= item.price;
      }
    },
    cartTotalPrice: (state) => {
      let totalCartPrice = 0;
      for (let item of state.items) {
        totalCartPrice += (item.totalPrice || 0);
      }
      state.cartTotalPrice = totalCartPrice;
    },
    clearCart: (state, action) => {
      if (!action.payload) {
        return state;
      }
      if (state.items) {
        state.items = [];
        let totalCartPrice = 0;
        for (let item of state.items) { 
          totalCartPrice += (item.totalPrice || 0);
        }
        state.cartTotalPrice = totalCartPrice;
      }
    },
  }
});

export default shoppingCartState.reducer;
export const { addToCart, removeFromCart, addAmountCart, reduceAmountCart, cartTotalPrice, clearCart } = shoppingCartState.actions;