import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleIsMenuOpen: (state) => ({
      ...state,
      isMenuOpen: !state.isMenuOpen,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const { toggleIsMenuOpen } = uiSlice.actions;
