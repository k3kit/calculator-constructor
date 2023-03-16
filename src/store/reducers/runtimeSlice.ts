import { createSlice } from '@reduxjs/toolkit';
interface IInitState {
  displayValue: string;
  result: number;
  number: number;
  opertation: string | null;
  resultFixed: boolean;
  mode: string;
}

const initialState: IInitState = {
  displayValue: '0',
  result: 0,
  number: 0,
  opertation: null,
  resultFixed: false,
  mode: 'value',
};
export const runtimeSlice = createSlice({
  name: 'runtime',
  initialState,
  reducers: {
    setDisplayValue: (state, action) => {
      state.displayValue = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setOperation: (state, action) => {
      state.opertation = action.payload;
    },
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setResultFixed: (state, action) => {
      state.resultFixed = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export default runtimeSlice.reducer;
