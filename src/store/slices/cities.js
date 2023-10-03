import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
}

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {

    addCity: (state, action) => {
      state.cities = [action.payload, ...state.cities];
    },

    deleteCity: (state, action) => {
      state.cities = state.cities.filter((city) => +city.lat !== +action.payload.lat)
    }
  }
})

export const { addCity, deleteCity } = citiesSlice.actions;

export default citiesSlice.reducer;
