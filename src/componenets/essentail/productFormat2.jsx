import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Stack } from '@mui/material'
import numberFormat from '../essentail/numberFormat'
import {Button} from '@mui/material'
const Productformat2 = ({ data }) => {
  const { _id, image, name, price ,stars} = data;
  return (
    <>
      <Link className='featurehover' to={`/Product/${_id}`}>
        <div key={_id} className='productcard'  >
            <CardContent>
            <img src={image[0].url} alt="img" className='CardImg2' />

            </CardContent>
          <CardContent className='cardcontent'>
          <h2 style={{color:'#1565C0',paddingBottom:'12px'}}> {name}</h2>

            <Stack direction={'row'} gap={1} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
              <h2 style={{color:'#494545'}}> {numberFormat(price)}</h2>
             <Button sx={{fontSize:'100%'}} variant='contained' color='success' disableElevation> <h3>{stars}<span style={{color:'white'}}>	&#9733;</span></h3></Button>
            </Stack>

          </CardContent>
        </div>
      </Link>




    </>)
}

export default Productformat2