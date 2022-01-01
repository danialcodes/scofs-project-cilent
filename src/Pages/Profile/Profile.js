import React from 'react';
import useTitle from '../../hooks/useTitle';

const Profile = ({title}) => {
    useTitle(title||"SCOFS - Profile");
    return (
        <div>
            <h1 className='text-center text-3xl'>Profile page</h1>
        </div>
    );
};

export default Profile;