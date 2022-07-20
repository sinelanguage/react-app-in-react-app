import { configureStore } from '@reduxjs/toolkit';
import parentAppReducer from './parentAppInitSlice';

export const store = configureStore({
  reducer: {
    parentApp: parentAppReducer,
  },
});
