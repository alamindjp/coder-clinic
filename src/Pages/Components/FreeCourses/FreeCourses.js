import React from 'react';
import { Link } from 'react-router-dom';

const FreeCourses = () => {
    return (
        <div className='learn-sec pt-20' >
            <div class="header my-0">
                <h1>Easy & effective courses</h1>
                <h1 className='text-4xl'>Provided by <span className='font-semibold text-blue-600'>Coders Clinic</span></h1>

                <p>Our free courses are simple and easy to learn.</p>
            </div>
            <div class="row1-container ">
                <div class="box box-down cyan ">
                    <h2>HTML</h2>
                    <p>We provide easy guideline to learn HTML5. Explore our course.</p>
                    <img className='h-20 pt-2' src="https://cdn-icons-png.flaticon.com/512/888/888859.png" alt=""/>
                    <Link to="/htmlCourse"><button className='font-semibold pt-7 text-green-600'>View Details</button></Link>
                </div>

                <div class="box red">
                    <h2>JavaScript</h2>
                    <p>Practice JavaScript course and build your own website. </p>
                    <img className='h-20 pt-2'  src="https://icon-library.com/images/javascript-icon/javascript-icon-8.jpg" alt=""/>
                   <Link to="/jsCourses"> <button type='submit' className='font-semibold pt-7 text-green-600'>View Details</button></Link>
                </div>

                <div class="box box-down blue">
                    <h2>CSS</h2>
                    <p>Style your own dynamic website using CSS. Follow our free guidelines.</p>
                    <img className='h-20 pt-2' src="https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png" alt=""/>
                    <button type='submit' className='font-semibold pt-7 text-secondary'>View Details</button>
                </div>
            </div>
            <div class="row2-container ">
                <div class="box orange">
                    <h2>React</h2>
                    <p>Make codes easy to handle using React on your project. </p>
                    <img  className='h-20 pt-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_RRk6CEQvjvlEN7v6HfYQZl3wo4TgSihgA&usqp=CAU" alt=""/>
                    <button type='submit' className='font-semibold pt-7 text-green-600'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FreeCourses;