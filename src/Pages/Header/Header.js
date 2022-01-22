import React, { useState, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import logo from "../../images/l.png";
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const activeStyle = ({ isActive }) => {
    if (isActive) {
        return {
            backgroundSize: "100% 3px",
            backgroundPosition: "0 100%"
        }
    }
}


const Header = () => {
    const {user,firebaseSignOut} = useAuth();
    const [showDropdown, setshowDropdown] = useState(false);
    return (
        <header className='mb-5'>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">

                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <Link to="/" >
                        <div className="flex justify-center items-center">
                            <img className="inline-block mr-2 md:mr-4 " src={logo} style={{ width: "50px", height: "50px" }} alt="" />
                            <p className="inline-block text-lg font-semibold whitespace-nowrap dark:text-white">SCOFS</p>
                        </div>
                    </Link>



                    <Popover as="div" className="flex justify-between items-center md:order-2 relative">

                        <div className="hidden lg:block mr md:mr-2 relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" className="  pl-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-green-900 focus:border-green-900 " placeholder="Search..." />
                        </div>
                        <Popover.Button className="flex mr-5 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-green-500 dark:focus:ring-gray-600" id="user-menu-button" >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={user.photoURL} alt="" />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >

                            <Popover.Panel as="div" className="absolute z-50 top-7 right-5   text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <div className="py-3 px-4">
                                    <span className="block text-sm text-gray-900 dark:text-white">{user.displayName?user.displayName:"Your Name"}</span>
                                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user.email?user.email:"youremail@gmail.com"}</span>
                                </div>
                                <ul className="py-1" >
                                    <li>
                                        <NavLink to="/profile" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white
                                    ">Profile</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/settings" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/earnings" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</NavLink>
                                    </li>
                                    <li>
                                        <button onClick={firebaseSignOut} to="/signout" className="w-full  text-left  py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                                    </li>
                                </ul>
                            </Popover.Panel>
                        </Transition>

                        <button onClick={() => setshowDropdown(!showDropdown)} className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </Popover>

                    <div className={`${showDropdown ? "" : "hidden"} justify-between items-center w-full md:flex md:w-auto md:order-1`}>
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            {/* <li>
                                <NavLink style={activeStyle} to="/" className="
                                 link-underline link-underline-black block py-2 pr-4 pl-3 text-green-700  rounded hover:text-gray-900 md:bg-transparent md:p-0 dark:text-white text-xl" aria-current="page">HOME</NavLink>
                            </li> */}
                            <li>
                                <NavLink style={activeStyle} to="/about" className="
                                link-underline link-underline-black
                                text-xl block py-2 pr-4 pl-3 text-green-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-gray-900 md:p-0 ">ABOUT</NavLink>
                            </li>
                            <li>
                                <NavLink style={activeStyle} to="/projects" className="
                                link-underline link-underline-black text-xl block py-2 pr-4 pl-3 text-green-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-gray-900 md:p-0 ">PROJECTS</NavLink>
                            </li>
                            <li>
                                <NavLink style={activeStyle} to="/scoreboard" className="
                                link-underline link-underline-black
                                text-xl block py-2 pr-4 pl-3 text-green-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-gray-900 md:p-0 ">SCOREBOARD</NavLink>
                            </li>
                            {/* <li>
                                <NavLink style={activeStyle} to="/profile" className="
                                link-underline link-underline-black
                                text-xl block py-2 pr-4 pl-3 text-green-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-gray-900 md:p-0 ">PROFILE</NavLink>
                            </li> */}
                        </ul>
                    </div>

                </div>
            </nav>


        </header>
    );
};

export default Header;