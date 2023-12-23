import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Vamshi Kampalli',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
