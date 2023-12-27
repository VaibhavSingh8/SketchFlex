import { createSlice } from "@reduxjs/toolkit";
import MENU_ITEMS from "../../utils/constants";
const menuSlice = createSlice({
  name: "menu",
  initialState: {
    activeItem: MENU_ITEMS.PENCIL,
    actionItem: null,
  },
  reducers: {
    clickMenuItem: (state, action) => {
      state.activeItem = action.payload;
    },
    clickActionItem: (state, action) => {
      state.actionItem = action.payload;
    },
  },
});

export const { clickMenuItem, clickActionItem } = menuSlice.actions;
export default menuSlice.reducer;
