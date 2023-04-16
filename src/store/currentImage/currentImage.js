import { createSlice } from '@reduxjs/toolkit';
import defaultImagePath from '../../images/woman.png';

const initialState = { name: 'woman', path: defaultImagePath };

export const currentImageSlice = createSlice({
  name: 'currentImage',
  initialState: initialState,
  reducers: {
    changeCurrentImage(state, { payload }) {
      state.name = payload.name;
      state.path = payload.path;
    },
  },
});

const currentImageReducer = currentImageSlice.reducer;
export const { changeCurrentImage } = currentImageSlice.actions;
export default currentImageReducer;
