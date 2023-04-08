import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { Stack } from '@mui/system'

const Stars = ({ starss, review }) => {
    const rs = Array.from({ length: 5 }, (ele, index) => {
        let num = index + 0.4;
        // debugger;
        return (



            <span key={index}>
                {
                    starss >= index + 1 ? (<FaStar />) :
                        starss >= num ? (<FaStarHalfAlt />) :
                            (
                                <AiOutlineStar />

                            )
                }
            </span>


        )

    })
    return (
        <>
            <Stack direction={'row'} gap={1}>
                <p className='ratings' style={{
                    color: 'rgb(236, 133, 22)'
                }}>{rs}</p>
                <p className='ratings'>({review} Costumer Review)</p>

            </Stack>



        </>
    )
}

export default Stars