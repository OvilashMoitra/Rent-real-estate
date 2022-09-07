import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div >
            <img src="https://i.pinimg.com/736x/6a/00/d9/6a00d9f0d294ea4311382be18fd78f88.jpg" alt="Not found any page" style={{ borderRadius: '50%', width: '300px' }} className='block mx-auto' />
            <br />
            <Link className='btn btn-outline block w-60 mx-auto pt-4' to={'/'}>Go to Home</Link>
        </div>
    );
};

export default NotFound;