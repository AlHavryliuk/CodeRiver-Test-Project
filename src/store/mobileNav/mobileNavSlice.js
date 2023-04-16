import { createSlice } from '@reduxjs/toolkit';

const initialState = { popupIsOpen: false };

export const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState: initialState,
  reducers: {
    openPopup(state) {
      state.popupIsOpen = true;
    },
    closePopup(state) {
      state.popupIsOpen = false;
    },
  },
});

const mobileNavReducer = mobileNavSlice.reducer;
export const { openPopup, closePopup } = mobileNavSlice.actions;
export default mobileNavReducer;
