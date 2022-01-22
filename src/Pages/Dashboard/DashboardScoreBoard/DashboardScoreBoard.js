import { Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardScoreBoard = () => {
    return (
        <div className='bg-green-300 rounded h-96 '>
            {/* Notification header */}
            <div className="h-[12%]">
                <h1 className='text-2xl font-medium p-2'>Scoreboard</h1>
                <Divider />
            </div>
            {/* Notification board */}
            <div className='flex flex-col justify-between p-2 h-[88%]'>

                <div className='overflow-y-auto mb-2 dashboardnotification'>
                    {/* Notifications */}



                </div>

                <Link to="scoreboard">
                    <button className="flex items-center justify-center w-full px-4  py-1 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-800 rounded-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ">Full Scoreboard
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default DashboardScoreBoard;