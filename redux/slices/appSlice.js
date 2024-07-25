import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    location: 'Unknown',
    foodCategory: 'pizza',
  },
  reducers: {
    setFoodCategory: (state, action) => {
      state.foodCategory = action.payload;
    },
  },
});

export const { setFoodCategory } = appSlice.actions;

export const selectLocation = (state) => state.app.location;
export const selectFoodCategory = (state) => state.app.foodCategory;

export default appSlice.reducer;
