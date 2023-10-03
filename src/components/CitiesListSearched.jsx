import React from "react";
import CityItemSearched from "./SearchedPage/CityItemSearched";

export default function CitiesListSearched({searchedCities}) {
  return (
    <div>
      {searchedCities && searchedCities.map((city) => <CityItemSearched city={city} key={city.lat}/>)}
    </div>
  );
}
