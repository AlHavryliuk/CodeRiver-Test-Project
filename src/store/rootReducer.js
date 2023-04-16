import { combineReducers } from '@reduxjs/toolkit';
import currentImageReducer from './currentImage/currentImage';
import mobileNavReducer from './mobileNav/mobileNavSlice';

export const rootReducer = combineReducers({
  currentImage: currentImageReducer,
  mobileNav: mobileNavReducer,
});
