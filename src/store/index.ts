import { configureStore, combineReducers } from '@reduxjs/toolkit';
import switchMode from './reducers/mode';
import constructorSlice from './reducers/constructorReducer';

const rootReducer = combineReducers({
  mode: switchMode,
  constructorReducer: constructorSlice,
});
export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
