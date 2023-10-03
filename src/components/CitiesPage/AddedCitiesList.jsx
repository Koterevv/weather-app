import React from 'react'
import { useSelector } from 'react-redux'
import CityItem from './CityItem';

export default function AddedCitiesList() {
  const cities = useSelector(state => state.cities.cities);
  const isExist = !!cities.length

  return (
    <>
      {isExist
        ? cities.map(city => <CityItem key={city.lat} city={city}/>)
        : <h1>No cities found</h1>
      }
    </>
  )
}
