import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./slice/menuSlice";
import ToolsReducer from "./slice/toolsSlice";

const store = configureStore({
  reducer: {
    menu: MenuReducer,
    tools: ToolsReducer,
  },
});

export default store;
