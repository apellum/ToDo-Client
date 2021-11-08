import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../../actions/sessions'
import { Grid, Paper, Box, TextField, Button } from '@mui/material'

const Signup = () => {
    const paperStyle = {padding : 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}

    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        username: "",
        email: "",
        password: "",
        isAdult: true
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state)
        dispatch(signup(state, navigate))
    }

    useEffect(() => {
        return () => {
            dispatch({type: "CLEAR_ERRORS"})
        }
    }, [dispatch])

    return (
        <div>
            <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Create a New Account</h2>
                </Grid>
                <Grid item container spacing={2} sx={{display: 'flex',flexDirection: 'column'}}>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid item align='center'>
                        <TextField
                                    value={state.first_name}
                                    onChange={handleChange}
                                    id="first_name"
                                    label="First Name"
                                    name="first_name"
                                />
                        <TextField
                                    value={state.last_name}
                                    onChange={handleChange}
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                />
                        <TextField
                                    value={state.date_of_birth}
                                    onChange={handleChange}
                                    id="date_of_birth"
                                    label="Birthday"
                                    name="date_of_birth"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                        <TextField
                                    value={state.username}
                                    onChange={handleChange}
                                    id="username"
                                    label="Username"
                                    name="username"
                                />
                        <TextField
                                    value={state.email}
                                    onChange={handleChange}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                />
                        <TextField
                                    value={state.password}
                                    onChange={handleChange}
                                    id="password"
                                    label="Password"
                                    name="password"
                                />
                        <Button
                                    type="submit"
                                    variant='text'
                                 >Create New Account</Button>
                    </Grid>
                    </Box>
                </Grid>
            </Paper>
            </Grid>
        </div>
    )
}

export default Signup
