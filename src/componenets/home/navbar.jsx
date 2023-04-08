import React, { useState } from 'react'
import { Stack } from '@mui/material'
import Logo from './logo'
import { Link } from 'react-router-dom'
import Utils from '../Cart/utils'
import SignIn from '../Signin/SignIn'
import { useAuthContext } from '../../Context/AuthContext'
import SignOut from '../SignOut/SignOut'


const Navbar = () => {
    const value='sign in '
    const classes='logbut'
    const { user } = useAuthContext();
    const [Active, setActive] = useState(true)
    return (
        <Stack direction={'row'} justifyContent={'space-between'} p={3} className='navbar'>
            <button className='menu' onClick={() => setActive(!Active)} >
                {Active ? <img className='Actmenu' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAZUlEQVRoge3WMQrCQBRF0YurM+6/TkDch7ZW0SJhJnAO3H7+VK8A4DiPaqvek7dVy94hzwke+W+v74ff9q66sqVaG//bv1qr+0l/AABwFjN+QGb8TJnxAMAVmfEDMuNnyowH4FAf9JZ/1GMxO0wAAAAASUVORK5CYII=" alt='' /> :
                    <img className='clsmenu' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABQ0lEQVRoge2Yy07DMBBFj/gaWPAL5bEorxVQyg5Y8mbJJ/MBUEDQEhZgEWDcOrKTONE9Unbx1b0a2R4PCCGEEEKIHFkFjhPqbQIbCfWCWAEegClwmkBvADwCExoM40IU39+MuDBrwFNJbwKsR3oMYsxXJQriwwyB5z9aH8B1EqcBjIF3w8B5BQ1fiLukTgM4wg5zEbB2C3gx1t7W4jSAEfBmGLqcs2abzEI4qoTJNoTjEDvMVemfHewQN406DWAPeMU+gToTwrGPXZlF1cqSXf5XprV7IhZfmNpCLNUh2hesTd+ZTe7oxWY/wG+4M8ev70Is3+7Z3+q9aFFGVO+AfZ1v4+27w9fGh7xJhmQSxnpYzYCzChrWw6oA7pM6nUNvnrrL/B4+xE5SBrQ0fICfMFPgJIFeK+MgRy8GdEIIIYQQYjGffTbpZF4f+UYAAAAASUVORK5CYII=" alt=''/>
                }

            </button>
            <Logo />
            <div className='menu2'>
                <div className={Active ? 'movable' : 'emovable'}>
                    <Stack gap={3} alignItems={'center'} direction={{ xs: 'column', sm: 'column', md: 'row' }}  >
                        <Link className='Links' to={'/'}>Home</Link>
                        <Link className='Links' to={'/Products'}>Products</Link>
                        <Link className='Links' to={'/contact'}>ContactUs</Link>
                        <div className='signnav'>
                            {
                                user ? <SignOut /> : <SignIn val={value} classes={classes} />
                            }
                        </div>

                    </Stack>
                </div>
                {user && <Link className='Links' to={'/cart'}><Utils /></Link>

                }
                <div className='signnav2'>
                    {
                        user ? <SignOut /> : <SignIn val={value} classes={classes} />
                    }
                </div>
            </div>

        </Stack>
    )
}

export default Navbar