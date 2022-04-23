import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { loadState, saveState } from '../utils';
import { uiReducer } from './ui';

const preloadedState = loadState();

const store = configureStore({
  preloadedState,
  reducer: {
    ui: uiReducer
  },
  devTools: true,
});

store.subscribe(() => {
  const state: RootState = store.getState();
  saveState({ ...state });
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  store,
  useAppDispatch,
  useAppSelector,
  type RootState
}
