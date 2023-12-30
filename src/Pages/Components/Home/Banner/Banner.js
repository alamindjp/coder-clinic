import React from 'react';
import img from "../../../../Assets/img/coding.gif"
import { Link } from 'react-router-dom';

const Banner = ({ activate }) => {
  return (
    <div className={`hero min-h-screen ${activate ? 'bg-gray-800 text-white' : 'bg-blue-200'}`}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="sm:w-1/2" >
          <img src={img} className="lg:h-[400px] lg:w-[450px] mx-auto justify-item-end sm:mt-0" alt='' />
        </div>
        <div className='sm:w-1/2 px-2'>
          <h1 className="text-5xl font-bold text-info ">Learn To Code With Us</h1>
          <p className="py-6">Learn to code with our beginer friendly learning environment. We provide simple and easy tuturials. You can learn different lamguages, frameworks and can compile your code on our platform. We prodive A to Z guidelines of MERN developers.</p>
          <Link to='/about' className="btn-big w-[180px]">Know More</Link>

        </div>
      </div>
    </div>
  );
};

export default Banner;