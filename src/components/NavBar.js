import React from 'react'
import { Box, AppBar, Toolbar, Typography } from '@mui/material'

const NavBar = () => {
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
