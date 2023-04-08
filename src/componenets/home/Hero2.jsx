import React from 'react'
import { Stack } from '@mui/material'
import img1 from '../essentail/assets/watch_1.webp'
import { Link } from 'react-router-dom'
const Hero2 = () => {
  return (
    <Stack className='hero' alignItems={'center'} p={{ xs: 2, sm: 2, md: 2 }} pt={{ xs: '20%', sm: '15%' }} flexWrap={'wrap'} justifyContent={'center'} direction={'row-reverse'} >
      <div className='navs'>
        <h2 className='small'>BoATS watches</h2>
        <h1 className='large1'>Exclusive Collabration</h1>

        <h1 className='mid1'>Limited Edition to 500 Pieces</h1><br />
        <h1 style={{color:'#d8ff00'}} className='small'>Almost Sold Out</h1>
        <br /><br />
        <Link to={`/Product/64064f236a822198ece6c15e`}><button className='heroBut'>Get Yours Today</button></Link>
      </div>

      <div>
        <img className='heroImg' src={img1} alt="" />
      </div>
    </Stack>



  )
}

export default Hero2 