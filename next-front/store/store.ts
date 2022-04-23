import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { loadState, saveState } from '../utils/store';
import { uiReducer } from './ui';

const preloadedState = loadState();

const store = configureStore({
  preloadedState,
  reducer: {
    ui: uiReducer
  },
});

store.subscribe(() => {
  const state: RootState = store.getState();
  saveState({ ...state });
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  store,
  useAppDispatch,
  useAppSelector,
  type RootState
}
