import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { stat } from 'fs';

type mode = {
  value: boolean;
};
const initialState: mode = {
  value: false,
};
export const switchMode = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});
// export const { setMode, toogleMode } = switchMode.actions;
// export const selectMode = (state: RootState)=> state.v
export default switchMode.reducer;
