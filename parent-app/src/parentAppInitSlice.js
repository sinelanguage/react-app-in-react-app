import { createSlice } from '@reduxjs/toolkit';

const parentAppSliceInitState = {
  message: 'initialized Redux state',
};

export const parentAppSlice = createSlice({
  name: 'parentApp',
  initialState: parentAppSliceInitState,
  reducers: {
    updateInitText: (state, action) =>
      void (state.message = action.payload),
  },
});

// Action creators are generated for each case reducer function
export const { updateInitText } = parentAppSlice.actions;

export default parentAppSlice.reducer;
