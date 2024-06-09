import { configureStore } from '@reduxjs/toolkit';
import tapDataSlice from './tapDataSlice';
import teaDataSlice from './productTeaSlice';
import fruitDataSlice from './productFruitSlice';

const store = configureStore({
  reducer: {
    tapData: tapDataSlice,
    teaData: teaDataSlice,
    fruitData: fruitDataSlice,
  },
});

export default store;