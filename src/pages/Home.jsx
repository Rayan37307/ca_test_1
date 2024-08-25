import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import CA_Test_Card from '../components/CA-test-card'
import Register from '../components/Register'
import Our_Test_Series from '../components/Our_Test_Series'

const Home = () => {
  return (
    <>
    <Header />
    <Slider />
    <div className='flex'>
        <CA_Test_Card />
        <Register />
    </div>
    <Our_Test_Series />
    </>
  )
}

export default Home