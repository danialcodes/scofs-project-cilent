import React, { useState } from 'react';

import googleIcon from "../../../images/icons/google.svg";
import githubIcon from "../../../images/icons/github.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const navigate = useNavigate();
    const { user, firebaseRegister, firebaseGoogleLogin, firebaseGithubLogin, loading, authError } = useAuth();

    const [registerData, setRegisterData] = useState(
        {
            
            firstName: "",
            lastName: "",
            email: "",
            firstPassword: "",
            secondPassword: ""
        }
    );
    const handleRegister = (e) => {
        e.preventDefault();
        const { firstName,lastName,email, firstPassword, secondPassword } = registerData;
        if(firstPassword!==secondPassword){
            alert("Password not matched");
            return
        }
        firebaseRegister(`${firstName + " " + lastName}`,email, firstPassword, navigate);
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegisterData({ ...registerData, [name]: value });
    }
    const loginWithGoogle = () => {
        firebaseGoogleLogin(navigate);
    }
    const loginWithGithub = () => {
        firebaseGithubLogin(navigate);

    }
    return (
        <div className="flex  min-h-screen ">
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
                        <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome to SCOFS !</h1>
                        <p className="text-sm font-normal text-gray-600 mb-7">Please Register here</p>
                    </div>
                    <div className="mt-8">
                        <div className="mt-6">

                            <form onSubmit={handleRegister} className="space-y-4">

                                <div className="mb-4 md:flex md:justify-between">

                                    <div className='mb-4 md:mr-2 md:mb-0'>
                                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-900"> First Name </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} id="firstname" name="firstName" type="text" autoComplete="name" required placeholder="Md. Danial" className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                    <div className="md:ml-2">
                                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-900"> Last Name </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} id="lastname" name="lastName" type="text" autoComplete="name" required placeholder="Islam" className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900"> Your email </label>
                                    <div className="mt-1">
                                        <input onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required placeholder="Ex. james@bond.com" className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                    </div>
                                </div>
                                {/* Password Section */}
                                <div className='mb-4 md:flex md:justify-between'>
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label htmlFor="firstPassword" className="text-sm font-medium text-gray-900 flex justify-between items-center">
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} id="firstPassword" name="firstPassword" type="password" required placeholder="••••••••" className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                    <div className="md:ml-2">
                                        <label htmlFor="secondPassword" className="text-sm font-medium text-gray-900 flex justify-between items-center">
                                            Confirm Password
                                        </label>
                                        <div className="mt-1">
                                            <input onChange={handleChange} id="secondPassword" name="secondPassword" type="password" required placeholder="••••••••" className="w-full px-3 py-2 leading-tight text-base text-neutral-600 placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                        </div>
                                    </div>

                                </div>



                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="isAggree" name="isAggree" type="checkbox" required className="w-4 h-4 text-green-500 border-gray-200 rounded focus:ring-green-500" />
                                        <label htmlFor="remember-me" className="block ml-2 text-sm text-neutral-600"> I agree to the

                                            <Link to="/terms"> terms and conditions</Link>
                                        </label>
                                    </div>
                                    <div>
                                        <button type="submit" 
                                        className="flex items-center justify-center mx-auto px-4  py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-800 rounded-xl hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ">
                                            Register
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
                            <p className="mt-8 text-xs font-light text-center text-gray-900"> Already have an account?
                                <Link to="/login" className="mx-2 text-sm font-medium text-green-800 hover:underline hover:text-green-500">Sign in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;