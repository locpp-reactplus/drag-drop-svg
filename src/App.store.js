import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import svgReducer from "./pages/svg/slice";

const store = configureStore({
  reducer: combineReducers({
    Svg: svgReducer
  }),
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
});

export default store;
