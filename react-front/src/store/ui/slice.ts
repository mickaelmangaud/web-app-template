import { createSlice } from '@reduxjs/toolkit';
import { UIState } from './types';

const initialState: UIState = {
  isMenuOpen: false,
  themeMode: 'light'
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => ({
      ...state,
      themeMode: state.themeMode === 'light' ? 'dark' : 'light'
    })
  }
});

export const uiReducer = uiSlice.reducer;

export const { toggleTheme } = uiSlice.actions;
