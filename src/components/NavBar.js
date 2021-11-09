import React from 'react'
import { useSelector } from 'react-redux'
import { Box, AppBar, Toolbar, Typography } from '@mui/material'


const NavBar = () => {
    const loggedIn = useSelector(state => state.sessions.loggedIn)
    console.log(loggedIn)
    return (
        <div>
            <Box>
                <AppBar>
                    <Toolbar>
                        <Typography>Family ToDo App</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar
