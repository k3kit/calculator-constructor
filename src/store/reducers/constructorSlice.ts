import { createSlice, current } from '@reduxjs/toolkit';

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
    setCurrentItemPosition: (state, action) => {
      state.currentItemPosition = action.payload;
    },
    pushDroppedItem: (state, action) => {
      // Push item to droparea, 'display' item push to start
      if (action.payload.currentItem.name === 'display') {
        state.areas[1].items.unshift(action.payload.currentItem);
      } // If dragged item dropped over droparea container -> just push to end
      else if (state.currentItemPosition === 0) {
        state.areas[1].items.push(action.payload.currentItem);
      }
      // If dragged item dropped over display item in dropare -> insert after
      else if (state.currentItemPosition === 1) {
        state.areas[1].items.splice(
          action.payload.currentItemPosition,
          0,
          action.payload.currentItem
        );
      } // If dragged item dropped over rest items -> insert before item
      else
        state.areas[1].items.splice(
          action.payload.currentItemPosition - 1,
          0,
          action.payload.currentItem
        );
    },
    sortItems: (state, action) => {
      state.areas[1].items = action.payload;
    },
    deleteItem: (state, action) => {
      const items = current(state.areas[1].items);
      // Delete payloaded item from droparea
      const newItems = [...items].filter((item) => {
        if (item.id !== action.payload.id) return item;
      });

      state.areas[1].items = newItems;
    },
  },
});

export default constructorSlice.reducer;
