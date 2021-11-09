import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../actions/sessions'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material'


const NavBar = () => {
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    const currentUser = useSelector(state => state.sessions.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout(navigate))
        navigate.push('/login')
    }
    return (
        <div>
            <Box>
                <AppBar position='static'>
                    <Toolbar >
                        {loggedIn ? <Typography>{currentUser.first_name}</Typography> : <Typography>Family ToDo App</Typography>}
                            <Button><NavLink to="/">Home</NavLink></Button>
                            <Button><NavLink to="/new-todo">New Todo</NavLink></Button>
                            <Button><NavLink to="/todos">Todos</NavLink></Button>
                            <Button><NavLink to="/signup">Signup</NavLink></Button>
                            <Button><NavLink to="/login">Login</NavLink></Button>
                            {/* <Button onClick={handleLogout}><NavLink>Logout</NavLink></Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar
