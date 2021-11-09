import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Box, AppBar, Toolbar, Typography } from '@mui/material'


const NavBar = () => {
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const currentUser = useSelector(state => state.sessions.currentUser)
    return (
        <div>
            <Box>
                <AppBar>
                    <Toolbar>
                        {loggedIn ? <Typography>{currentUser.first_name}</Typography> : <Typography>Family ToDo App</Typography>}
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/new-todo">New Todo</NavLink></li>
                            <li><NavLink to="/signup">Signup</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar
