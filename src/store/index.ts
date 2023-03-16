import { configureStore, combineReducers } from '@reduxjs/toolkit';
import modeSlice from './reducers/modeSlice';
import constructorSlice from './reducers/constructorSlice';
import runtimeSlice from './reducers/runtimeSlice';

const rootReducer = combineReducers({
  modeSlice: modeSlice,
  constructorSlice: constructorSlice,
  runtimeSlice: runtimeSlice,
});
export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
