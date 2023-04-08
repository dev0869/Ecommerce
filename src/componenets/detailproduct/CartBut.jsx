import React from 'react'
import { Stack } from '@mui/system'
import { Button } from '@mui/material'
import {styled} from '@mui/material/styles'
const CartBut = ({ amt, dcr, inc }) => {
    const BootstrapButton = styled(Button)({
        textTransform: 'none',
        fontSize: 10,
        width:3,
        border: '1px solid',
        lineHeight: 1.5,})
    return (
        <>
            <Stack direction={'row'} alignItems={'center'}>
                <BootstrapButton variant='contained' onClick={() => inc()}><h2>+</h2></BootstrapButton>
                <h2 style={{ padding: '14px' }}>{amt}</h2>
                <BootstrapButton variant='contained' className='calcbut' onClick={() => dcr()}><h2>-</h2></BootstrapButton>


            </Stack>
         
        </>
    )
}

export default CartBut