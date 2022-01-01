import React from 'react';
import useTitle from '../../hooks/useTitle';

const Dashboard = ({ title }) => {
    useTitle(title || "SCOFS - Dashboard")

    return (
        <div>
            <h1 className='text-center text-3xl'>Dashboard</h1>

        </div>
    );
};

export default Dashboard;