import React from 'react';
import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert, AlertTitle, InputBase, styled, alpha } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    

    const handleLoginSubmit = ()=>{}
    const handleOnchange = ()=>{}


    return (
        <Container>
             {/* Devided into two parts */}
            <Grid container spacing={3}>
                
                {/* Login/Registration Left Image */}
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: "100%" }}
                        alt=""
                        src={""}
                    />
                </Grid>

                {/* Login Form */}

                <Grid item sx={{ mt: 7 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        LOGIN
                    </Typography>

                    {/* {loading && <CircularProgress />} */}

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            onBlur={handleOnchange}
                            sx={{ width: "75%", m: 1,color:"black" }}
                            
                            label="Username or Email"
                            variant="standard"
                            name="email" />

                        <TextField
                            onBlur={handleOnchange}
                            sx={{ width: "75%", m: 1 }}
                             
                            label="Password"
                            variant="standard"
                            type="password"
                            name="password"
                        />
                        <Button sx={{ width: "50%", m: 1 }}
                            type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register">
                            <Button sx={{ width: "50%", m: 1 }} variant="text" color="inherit">New User? Please Register</Button>
                        </NavLink>
                    </form>
                    {/* {
                        user?.email && <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            Login <strong>successfully</strong>
                        </Alert>
                    } */}
                    {/* {
                        authError && <Alert severity="error">
                            <AlertTitle>{authError}</AlertTitle>
                        </Alert>
                    } */}
                    {/* <Button onClick={handleGoogleLogin} sx={{ width: "50%", m: 1 }} variant="contained">Google Sign In</Button> */}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;