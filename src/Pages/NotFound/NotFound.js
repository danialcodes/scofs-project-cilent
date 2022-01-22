import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const NotFound = ({title}) => {
    useTitle(title||"Page Not Found");

    return (
        <div className="overflow-hidden">
            <div className="min-h-screen md:flex">
                <div className="flex items-center justify-center w-full py-10 bg-white md:w-1/2">
                    <div className="max-w-md">
                        <div className="text-5xl font-black text-gray-800 md:text-8xl">
                            404 Error!!                 </div>

                        <div className="w-16 h-1 my-3 bg-primary md:my-6"></div>

                        <p className="text-2xl font-light leading-normal text-gray-600 md:text-3xl">
                            Page Not Found                    </p>

                        <Link to="/">
                            <button className="px-4 py-2 mt-4 text-lg text-gray-600 transition-colors duration-200 transform border rounded-lg hover:bg-gray-100 focus:outline-none">
                                Go to home
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative w-full pb-full md:flex md:pb-0 md:min-h-screen md:w-1/2">
                    <div className="flex items-center w-full h-full max-w-4xl mx-auto">
                        <img className="object-cover w-full" src="https://tailwindcomponents.com/svg/404-error-with-broken-robot-pana.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NotFound;