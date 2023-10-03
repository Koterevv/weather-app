import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../../store/slices/cities";
import ButtonSearchedCity from "../UI/ButtonSearchedCity";

export default function CityItemSearched({city}) {
  const dispatch = useDispatch();
  const store = useSelector(state => state.cities)

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addCity(city));
    console.log(store);
  }

  return (
    <article
      className="border border-my-dark-cyan border-solid mt-5 flex justify-between"
    >
      <div className="p-4">
        <h2 className="text-2xl text-my-light-cyan">{city.name}</h2>
        <span className="block">Country: {city.country}</span>
        {!(city.name === city.state) && (
          <span className="block">State: {city.state}</span>
        )}
      </div>
      <ButtonSearchedCity onClick={handleClick}>Add city</ButtonSearchedCity>
    </article>
  );
}
