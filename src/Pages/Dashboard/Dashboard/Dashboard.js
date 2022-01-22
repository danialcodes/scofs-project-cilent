import React from 'react';
import PublishProject from '../../Shared/PublishProject/PublishProject';
import DashboardNotifications from '../DashboardNotifications/DashboardNotifications';
import DashboardScoreBoard from '../DashboardScoreBoard/DashboardScoreBoard';

const Dashboard = ({ title }) => {

    return (<>
        <div className='grid md:grid-cols-3 gap-4 md:mx-40 mx-2 '>
            <div className="col-span-2 bg-green-500 min-h-screen">
                <PublishProject></PublishProject>
            </div>
            <div className="min-h-screen hidden md:grid grid-cols-1 gap-4">
                <DashboardNotifications></DashboardNotifications>
                <DashboardScoreBoard></DashboardScoreBoard>
            </div>

        </div></>
    );
};

export default Dashboard;