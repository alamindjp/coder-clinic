import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../../Assets/img/4o4.gif";

const NotFound = () => {
    return (
        <div>
            <Link to='/'>
                <img className='bg-cover w-screen' src={image} alt="ErrorPic" />
            </Link>
        </div>
    );
};

export default NotFound; 