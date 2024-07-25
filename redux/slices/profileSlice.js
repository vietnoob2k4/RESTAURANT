import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userProfile: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      picture: 'https://via.placeholder.com/150',
    },
  },
  reducers: {
    logout: (state) => {
      state.userProfile = {
        name: '',
        email: '',
        picture: '',
      };
    },
  },
});

export const { logout } = profileSlice.actions;

export const selectUserProfile = (state) => state.profile.userProfile;

export default profileSlice.reducer;
