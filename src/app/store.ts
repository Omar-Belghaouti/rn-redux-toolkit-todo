import {combinedReducers} from './reducers';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
