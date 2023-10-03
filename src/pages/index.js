import React from 'react'
import AddedCitiesList from '../components/AddedCitiesList'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function IndexPage() {
  return (
    <Layout>
      <AddedCitiesList/>
    </Layout>
  )
}

export const Head = () => <Seo title={'WeatherApp'} />
