import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { switchMode } from './reducers/mode';

const rootReducer = combineReducers({
  mode: switchMode.reducer,
});
export const store = configureStore({
  reducer: { mode: switchMode.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
