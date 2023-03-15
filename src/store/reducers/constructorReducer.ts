import { createSlice } from '@reduxjs/toolkit';

export interface ItemType {
  id: number;
  name: string;
}

interface AreasType {
  id: number;
  title: string;
  items: ItemType[];
}

type constructorType = {
  areas: AreasType[];
  currentItem: ItemType | null;
  currentItemPosition: number;
};

const initialState: constructorType = {
  areas: [
    {
      id: 1,
      title: 'constructor',
      items: [
        { id: 1, name: 'display' },
        { id: 2, name: 'operators' },
        { id: 3, name: 'numbers' },
        { id: 4, name: 'equal' },
      ],
    },
    {
      // Drop area
      id: 2,
      title: 'droparea',
      items: [],
    },
  ],
  currentItem: null,
  currentItemPosition: 0,
};
export const constructorSlice = createSlice({
  name: 'ssss',
  initialState,
  reducers: {
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

export default constructorSlice.reducer;
