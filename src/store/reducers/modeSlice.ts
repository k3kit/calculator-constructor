import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { stat } from 'fs';

type mode = {
  value: boolean;
};
const initialState: mode = {
  value: false,
};
export const modeSLice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export default modeSLice.reducer;
