// 
import React from 'react'
import { Stack } from '@mui/system'

import SingleProuctFORMAT from '../essentail/SingleProuctformat'
const Singleview = ({product}) => {



  return (
    <>

      <Stack  direction={{ xs: 'row', sm: 'row', md: 'row' }} gap={2} p={2} flexWrap='wrap' alignItems={'center'} justifyContent={'center'} >
        {
          product && product.map((ele,id) => {

            return (
              <SingleProuctFORMAT data={ele} key={id} />
            )
          })
        }
      </Stack>

    </>
  )
}

export default Singleview