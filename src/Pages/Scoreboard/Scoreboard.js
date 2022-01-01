import React from 'react';
import useTitle from '../../hooks/useTitle';

const Scoreboard = ({title}) => {
    useTitle(title || "SCOFS - Scoreboard");
    return (
        <div>
            <h1 className='text-center text-3xl'>This is scoreboard page</h1>

        </div>
    );
};

export default Scoreboard;