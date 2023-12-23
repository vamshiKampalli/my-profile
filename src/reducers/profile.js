import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  data: {},
  isError: false,
};

export const fetchMyProfile = createAsyncThunk('fetchMyProfile', async () => {
  const res = await fetch(`https://vamshikampalli.github.io/profile.json`);
  return res?.json();
});

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  // Actions goes here.
  reducers: {},
  // Extra reducers
  extraReducers: (builder) => {
    builder.addCase(fetchMyProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMyProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMyProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default profileSlice.reducer;
