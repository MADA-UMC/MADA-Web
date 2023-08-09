// store/imageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageName: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImageName: (state, action) => {
      state.imageName = action.payload;
    },
  },
});

export const { setImageName } = imageSlice.actions;
export default imageSlice.reducer;
