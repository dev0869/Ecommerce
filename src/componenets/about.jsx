import React from 'react'
import Navbar from './home/navbar'
import { useProductContext } from '../Context/Context'

const About = () => {
  const {NAME}=useProductContext();
  return (
    <div>
      <Navbar/>
      <h1>{NAME}</h1>
      
      About</div>
  )
}

export default About