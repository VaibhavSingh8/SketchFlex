import { createSlice } from "@reduxjs/toolkit";
import MENU_ITEMS from "../../utils/constants";

const toolSlice = createSlice({
  name: "tools",
  initialState: {
    [MENU_ITEMS.PENCIL]: {
      size: 3,
      color: "black",
    },
    [MENU_ITEMS.ERASER]: {
      size: 3,
      color: "white",
    },
    [MENU_ITEMS.REDO]: {},
    [MENU_ITEMS.UNDO]: {},
    [MENU_ITEMS.DOWNLOAD]: {},
  },
  reducers: {
    changeColor: (state, action) => {
      state[action.payload.item].color = action.payload.color;
    },
    changeStrokeWidth: (state, action) => {
      state[action.payload.item].size = action.payload.size;
    },
  },
});

export const { changeColor, changeStrokeWidth } = toolSlice.actions;
export default toolSlice.reducer;
