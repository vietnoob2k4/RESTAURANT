import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';
import cartReducer from './slices/cartSlice';
import appReducer from './slices/appSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    cart: cartReducer,
    app: appReducer,
  },
});

export default store;
