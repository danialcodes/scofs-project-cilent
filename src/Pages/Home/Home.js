import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet/>
        </>
    );
};

export default Home;