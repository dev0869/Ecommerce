import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
const SignIn = ({val,classes}) => {
    const { GoogleAuth } = useAuthContext()
    const handleSignIn = async () => {
        try {
            await GoogleAuth()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <button className={classes} variant="contained" onClick={() => handleSignIn()}>{val}</button>
        </>
    )
}

export default SignIn