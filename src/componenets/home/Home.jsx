import React from 'react'
import Navbar from './navbar'
import { Stack } from '@mui/material'
import Hero from './Hero.jsx'
import Hero2 from './Hero2'
import Services from './Services'
import Featured from './Featured'
import { useProductContext } from '../../Context/Context'
import Loader from '../essentail/loader'
import Footer from '../Footer/footer'

const Home = () => {
  const {isLoading,featureProduct} = useProductContext();
   if (isLoading) return <Loader />
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Stack p={2} gap={2}>
      <Featured/>
      <br />
      <Hero2/>
      </Stack>  
      <br /><br /><br />
      <Footer/>
    </>
  )
}

export default Home