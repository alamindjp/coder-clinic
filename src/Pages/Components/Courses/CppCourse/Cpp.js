import React from 'react';

const Cpp = () => {
    return (
        <div>
            <h2 className='text-4xl text-primary mb-3'>C++ Course</h2>
            <div className='flex justify-around'>
          <div>
          <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Topics</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Introduction</td>
        
      </tr>
    </tbody>
  </table>
</div>
          </div>
          <div className=' w-2/3'>
          <h1 className='text-2xl font-bold my-3'>What is C++?</h1>
          <p>C++ is an object-oriented programming (OOP) language that is viewed by many as the best language for creating large-scale applications. C++ is a superset of the C language.</p>
          </div>
        </div>
        </div>
    );
};

export default Cpp;