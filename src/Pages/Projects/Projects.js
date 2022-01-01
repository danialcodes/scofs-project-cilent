import React from 'react';
import useTitle from '../../hooks/useTitle';

const Projects = ({title}) => {
    useTitle(title|| "SCOFS - Projects");
    return (
        <div>
            <h1 className='text-center text-3xl'>Projects Page</h1>
        </div>
    );
};

export default Projects;