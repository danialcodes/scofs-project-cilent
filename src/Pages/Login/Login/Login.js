import React, { useState } from 'react';

import googleIcon from "../../../images/icons/google.svg";
import githubIcon from "../../../images/icons/github.svg";

import { Container, Grid, TextField, Typography, Button, CircularProgress,Box, Alert, AlertTitle, InputBase, styled, alpha } from '@mui/material';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ShowAlert from '../../../utilities/ShowAlert/ShowAlert';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    useTitle("SCOFS - Login")
    const location = useLocation();
    const navigate = useNavigate();
    const { firebaseEmailPassLogin, firebaseGoogleLogin, firebaseGithubLogin, firebaseSignOut, loading, authError } = useAuth();
    // console.log(authError);
    const [loginUserData, setLoginUserData] = useState(
        { email: "", password: "" }
    );


    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const { email, password } = loginUserData;
        firebaseEmailPassLogin(email, password, location);
    }
    const loginWithGoogle = () => {
        firebaseGoogleLogin(navigate);
    }
    const loginWithGithub = () => {
        firebaseGithubLogin(navigate);

    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginUserData({ ...loginUserData, [name]: value });
    }


    return (
        < div className="flex  min-h-screen " >
            <div className="relative flex-1 hidden w-0 overflow-hidden lg:block bg-login-left bg-cover bg-center bg-no-repeat">
                {/* <img className="absolute inset-0 object-cover w-full h-full bg-black" src={loginBannerLeft} alt="" /> */}
            </div>

            <div className="flex flex-col justify-center flex-1 px-4
            py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24
            bg-login-right bg-center bg-cover
            ">
                <div className="w-full max-w-xl mx-auto lg:w-96">
                    <div>
                        {/* <h2 className="mt-6 text-2xl font-extrabold text-neutral-900">Log in to your account</h2> */}
                        <h1 onClick={firebaseSignOut} className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                    </div>
                    <div className="mt-8">
                        <div className="mt-6">
                            {/* {loading && <CircularProgress />} */}
                            <form onSubmit={handleLoginSubmit} className="space-y-4">

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900"> Your email </label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" value={loginUserData.email} autoComplete="off" required placeholder="Ex. james@bond.com" onChange={handleChange} className="w-full px-3 py-2  text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="password" className="text-sm font-medium text-gray-900 flex justify-between items-center">
                                        <div>
                                            Password
                                        </div>
                                        <div >
                                            <Link to="/passwordreset" className="text-green-800 hover:text-green-500"> Forget Password? </Link>
                                        </div>
                                    </label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password" required placeholder="••••••••"
                                            autoComplete="off" value={loginUserData.password} onChange={handleChange} className="w-full px-3 py-2 text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                {authError &&
                                    <ShowAlert severity="error" msg={authError}></ShowAlert>}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="w-4 h-4 text-green-500 border-gray-200 rounded focus:ring-green-500" />
                                        <label htmlFor="remember-me" className="block ml-2 text-sm text-neutral-600"> Remember me
                                        </label>
                                    </div>

                                    <div>

                                        <button type="submit" className="flex items-center justify-center mx-auto px-4  py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-800 rounded-xl hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ">
                                            {loading ? <CircularProgress color="inherit" size={24}/> : "Login"}
                                        </button>
                                    </div>
                                </div>

                            </form>
                            {/* Horizontal Line */}
                            <div className="relative my-3">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 text-gray-600 bg-white rounded"> or continue with</span>
                                </div>
                            </div>
                            {/* Social Media Login Button */}
                            <div className='flex justify-evenly items-center'>
                                <button onClick={loginWithGoogle} type="submit" className="bg-white items-center px-5 py-3 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:scale-110">
                                    <img className="w-6 h-6" src={googleIcon} alt="" />
                                </button>

                                <button onClick={loginWithGithub} type="submit" className="bg-white items-center px-5 py-3 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:scale-110 ">

                                    <img className="w-6 h-6" src={githubIcon} alt="" />
                                </button>
                            </div>
                            <p className="mt-8 text-xs font-light text-center text-gray-900"> Don't have an account?
                                <Link to="/register" className="mx-2 text-sm font-medium text-green-800 hover:underline hover:text-green-500">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;