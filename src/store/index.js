import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./slices/cities";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
  }
})
