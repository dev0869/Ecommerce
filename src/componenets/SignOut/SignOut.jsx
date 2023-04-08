import React, { useState } from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import { Stack } from '@mui/system'

const SignOut = () => {

    const { LogOut, user } = useAuthContext()
    const [photoError, setPhotoError] = useState(false)

    const handleSignOut = async () => {
        try {
            await LogOut()
        } catch (error) {
            console.log(error,'dd')
        }
    }

    return (
        <>
        <Stack direction={'row'} gap={2}>
        {photoError ? (
                <img className='Avatar' src={user.photoURL} alt="user" />
            ) : (
                <img className='Avatar' src={user.photoURL} alt="" onError={() => setPhotoError(true)} />
            )}
            <button className='logbut' onClick={() => handleSignOut()}>
                Sign Out
            </button>
        </Stack>
         
        </>
    )
}

export default SignOut;
