import { configureStore } from '@reduxjs/toolkit';
import tapDataSlice from './tapDataSlice';
import teaDataSlice from './productTeaSlice';
import fruitDataSlice from './productFruitSlice';
import shoppingCartState from '../state/shoppingCartState';
import personalProfileSlice from './personalProfileSlice';
import cartShowReducer from '../state/CartShowControllerState';


const store = configureStore({
  reducer: {
    tapData: tapDataSlice,
    teaData: teaDataSlice,
    fruitData: fruitDataSlice,
    cart: shoppingCartState,
    profileData: personalProfileSlice,
    cartShow: cartShowReducer,
  },
});

export default store;