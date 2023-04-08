import React from 'react'
import { Stack } from '@mui/system'
import Productformat2 from '../essentail/productFormat2'
const Gridview = ({ product }) => {


  return (
    <>
      <Stack direction={{ xs: 'row', sm: 'row', md: 'row' }} gap={2}flexWrap='wrap' alignItems={'center'} justifyContent={'center'} >
        {
          product && product.map((ele) => {
            return (
              <Productformat2 data={ele}  />
            )
          })
        }
      </Stack>
    </>
  )
}

export default Gridview