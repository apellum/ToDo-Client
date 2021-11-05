import React from 'react'

const Login = () => {
    const paperStyle = {padding : 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}
    const avatarStyle = {backgroundColor: '#03a9f4'}

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // dispatch(login(state, history))
    }
    return (
        <div>
            <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Grid item container>
                <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><LoginIcon/></Avatar>
                            <h2>Sign In</h2>
                        </Grid>
                            <Box component='form' onSubmit={handleSubmit} sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
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
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                 /><br/>
                                 <Button
                                    type="submit"
                                    variant='text'
                                 >Login</Button>
                            </Box>
                </Paper>
            </Grid>
            </Grid> 
        </div>
    )
}

export default Login