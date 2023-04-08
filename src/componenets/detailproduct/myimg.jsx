import React, { useState } from 'react'
import { Stack } from '@mui/material'
import { CardContent } from '@mui/material';
const Myimg = ({ img }) => {

    const [Pic, setPic] = useState(img && img[0]);
    return (
        <>
            <Stack justifyContent={'space-between'} >
                <Stack direction={{xs:'column-reverse',sm:'row'}} gap={{sx:2,sm:2,md:2}}  justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} >
                    <CardContent sx={{ width: '120px',position:'relative',display:'flex',justifyContent:'center'} } >
                        <Stack flexDirection={{xs:'row-reverse',sm:'column'}}  gap={2} style={{ objectFit: 'cover' }}>
                        {img && img.map((ele) => {
                            return (
                                <img src={ele.url} style={{cursor:'pointer'}} className='img222' onClick={() => setPic(ele)} width='100%' />
                            )
                        })}

                        </Stack>
                     

                    </CardContent>
                    <CardContent>
                        <img src={Pic && Pic.url} width={'350px'} height={'250px'} style={{ objectFit: 'cover' }} />
                    </CardContent>


                </Stack>




                <div>



                </div>





            </Stack>




        </>
    )
}

export default Myimg