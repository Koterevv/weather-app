import React, { useState } from 'react';
import { getCity } from '../api/getWeather';
import Layout from '../components/Layout';
import CitiesListSearched from '../components/CitiesListSearched';
import SearchForm from '../components/SearchedPage/SearchForm';
import Seo from '../components/Seo';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [searchedCities, setSearchedCities] = useState([]);

  const handleForm = async (e) => {
    e.preventDefault();
    const data = await getCity(search);
    setSearchedCities(data);
  }

  return (
    <Layout>
      <section className='container'>
        <SearchForm
          handleForm={handleForm}
          handleSearch={(e) => setSearch(e.target.value)}
          search={search}
        />
        <CitiesListSearched searchedCities={searchedCities}/>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title={'Search'} />
