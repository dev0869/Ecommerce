import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Stack } from '@mui/material'
import numberFormat from '../essentail/numberFormat'
const Productformat = ({ data }) => {
  const { _id, image, name, price } = data;
  return (
    <>
      <Link className='featurehover' to={`/Product/${_id}`}>
  
        <Card key={_id}  sx={{ boxShadow: '0 4px 8px red' }} className='featurecard' width={{ sm: '300px', md: '300px' }} sx={{ Height: '400px' }}  >
          <div className='CardImgContainer'>
            <img src={image[0].url} alt="img" className='CardImg' />
          </div>

          <CardContent sx={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
              <h1 className='ex' style={{ color: 'rgb(239 255 0)' }}> {name.substring(0, 12)}</h1>
              <h2 style={{ color: 'white' }}> {numberFormat(price)}</h2>
            </Stack>
          </CardContent>
        </Card>

      </Link>




    </>)
}

export default Productformat