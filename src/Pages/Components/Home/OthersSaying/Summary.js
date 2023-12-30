import React from 'react';

const Summary = () => {
    return (
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 w-11/12 mx-auto sm:mx-auto text-center mb-4">
            <div className='summary'>
                <div className='bg-blue-400 box'>
                    <h1 className="font-bold text-3xl text-orange-600">350</h1>
                    <h3 className='text-3xl font-semibold text-black'>Quiz</h3>
                </div>
            </div>
            <div className='summary'>
                <div className='bg-blue-400 box'>
                    <h1 className="font-bold text-3xl text-orange-600">20</h1>
                    <h3 className='text-3xl font-semibold text-black'>Courses</h3>
                </div>
            </div>
            <div className='summary'>
                <div className='bg-blue-400 box'>
                    <h1 className="font-bold text-3xl text-orange-600">2k+</h1>
                    <h3 className='text-3xl font-semibold text-black'>Quiz</h3>
                </div>
            </div>
            <div className='summary'>
                <div className='bg-blue-400 box'>
                    <h1 className="font-bold text-3xl text-orange-600">10k</h1>
                    <h3 className='text-3xl font-semibold text-black'>Enrolled</h3>
                </div>
            </div>
        </div>
    );
};

export default Summary;