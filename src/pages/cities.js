import React from 'react'
import Layout from '../components/Layout'
import AddedCitiesList from '../components/CitiesPage/AddedCitiesList'

export default function CitiesPage() {
  return (
    <Layout>
      <section className='container'>
        <AddedCitiesList />
      </section>
    </Layout>
  )
}
