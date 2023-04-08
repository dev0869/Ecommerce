import React from 'react'
import { Stack } from '@mui/system'
import Loader from '../essentail/loader'
import Productformat from '../essentail/productformat'
import { useProductContext } from '../../Context/Context'
import { Link } from 'react-router-dom'

const Featured = () => {
  const { isLoading, featureProduct } = useProductContext();
  if (isLoading) return <Loader />
  return (
    <>
      <h1 style={{ fontSize: '28px' }} ><span style={{ fontSize: '38px', color: '#FF4500' }}>F</span>eatured Products<span style={{ color: '#FF4500' }}>...</span></h1>
      <Stack direction={{ xs: 'row', sm: 'row', md: 'row' }} gap={2} p={2} flexWrap='wrap' alignItems={'center'} justifyContent={'center'} >
        {
          featureProduct && featureProduct.map((ele, id) => {
            return (
              <Productformat key={id} data={ele} />
            )
          })
        }
      
      </Stack>
      <Link className='Links' to={'/Products'}>
        <button className='heroBut3'>Explore More</button>

        </Link>
    </>
  )
}

export default Featured