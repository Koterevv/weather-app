import React from 'react'
import ButtonSearchedCity from '../UI/ButtonSearchedCity'
import { useDispatch } from 'react-redux';
import { deleteCity } from '../../store/slices/cities';

export default function CityItem({city}) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(deleteCity(city))
  }

  return (
    <article
      className="border border-my-dark-cyan border-solid mt-5 flex justify-between"
    >
      <div className="p-4">
        <h2 className="text-2xl text-my-light-cyan">{city.name}</h2>
        <span className="">Country: {city.country}</span>
        {!(city.name === city.state) && (
          <span className="">{'; '}State: {city.state}</span>
        )}
      </div>
      <ButtonSearchedCity onClick={handleClick}>Remove city</ButtonSearchedCity>

    </article>
  )
}
