import { Avatar, Divider } from '@mui/material';
import React from 'react';

const DashboardNotification = ({notification}) => {
    const {img,msg,time} = notification;
    return (
        <>
        <div className='flex justify-between items-center mb-2	'>
                        <Avatar alt="ay there" src={img} />
                        <div className='ml-2'>
                            <p className='font-semibold'>
                                {msg}
                            </p>
                            <p className='font-thin text-sm'>{time}</p>
                        </div>
                        
                    </div>
                    <Divider/>
        </>
    );
};

export default DashboardNotification;