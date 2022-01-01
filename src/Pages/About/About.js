import React from 'react';
import useTitle from '../../hooks/useTitle';

const About = ({title}) => {
    useTitle(title|| "SCOFS - About");
    return (
        <div>
            <h1 className='text-center text-3xl'>About page</h1>

        </div>
    );
};

export default About;