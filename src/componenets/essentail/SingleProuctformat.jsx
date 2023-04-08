import React from 'react'
import { Link } from 'react-router-dom'
import { CardContent, Stack } from '@mui/material'
import numberFormat from './numberFormat'
import Stars from '../detailproduct/stars'
const SingleProuctFORMAT = ({ data }) => {
    const { _id, image, name, price, stars, description, reviews } = data;

    return (
        <>
            <Stack direction={'row'} alignItems={'center'} justifyContent='center' p={2} sx={{ background: '#00000014' }} className='singleviewCard' flexWrap='wrap'>
                <Link to={`/Product/${_id}`}>


                    <CardContent sx={{ width: '300px' }}>
                        <img src={image[0].url} alt="img" className='CardImg2' />
                    </CardContent>
                </Link>


                <Stack className='other' sx={{width:'450px'}} direction={'column'} justifyContent={'space-between'} textAlign='justify'>

                    <CardContent className='essential' >
                        <h1 style={{ color: '#1565C0' }}> {name}</h1>
                        <Stars starss={stars} review={reviews} />

                        <h2> {numberFormat(price)}</h2>

                        <p className='ratings'>{description.substring(0,255) }</p>

                        

                    </CardContent>

                </Stack>
                <Stack direction={'column'} justifyContent={'space-between'}>
                    <CardContent sx={{ width: '250px' }}>
                        <br />
                        <Link className='cARTBUT' to={`/Product/${_id}`}>
                            Buy Now
                        </Link>
                    </CardContent>
                </Stack>
            </Stack>






        </>
    )
}

export default SingleProuctFORMAT