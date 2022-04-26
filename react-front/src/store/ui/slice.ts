import { createSlice } from '@reduxjs/toolkit';
import { UIState } from './types';

const initialState: UIState = {
  isMenuOpen: false,
  themeMode: 'light',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => ({
      ...state,
      themeMode: state.themeMode === 'light' ? 'dark' : 'light',
    }),
  },
});

const uiReducer = uiSlice.reducer;

const { toggleTheme } = uiSlice.actions;

export { uiReducer, toggleTheme };
