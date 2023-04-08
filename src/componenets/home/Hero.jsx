import React from 'react'
import { Stack } from '@mui/material'
import img1 from '../essentail/assets/headphones_a_4.webp'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <Stack className='hero' alignItems={'center'} p={3} flexWrap={'wrap'} justifyContent={'center'} direction={'row'} >
      <div className='navs'>
        <h2 className='small'>Beats Solo Air..</h2>
        <h1 className='mid'>Summer Sale</h1>
        <h1 className='large'>FINE</h1>
        <br />
        <Link to={`/Product/64064f236a822198ece6c154`}><button className='heroBut'>Shop Now</button></Link>
      </div>

      <div>
        <img className='heroImg' src={img1} alt="" />
      </div>
    </Stack>



  )
}

export default Hero 