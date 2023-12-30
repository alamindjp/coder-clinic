import React from 'react';
import { Link } from "react-router-dom";
import html from "../../../Assets/adminIcon/html.png"
import css from "../../../Assets/adminIcon/css.png"
import js from "../../../Assets/adminIcon/java-script.png"
import cPlus from "../../../Assets/adminIcon/c++.png"

const AdminHome = () => {
    return (
        <div>
            <p className='text-3xl m-5 text-green-600 font-bold text-center'>Create Course Sub-section</p>
            <div style={{ height: '500px', display: 'flex', justifyContent: 'center' }}>

                <div style={{ display: 'flex', width: '70%', margin: 'auto' }}>
                    <Link to="/adminDashboard/htmlCourseInput"> <img className='w-2/3 hover:bg-slate-500 rounded p-2 mx-auto' src={html} alt="" /> </Link>
                    <Link to="/adminDashboard/cssCourseInput"> <img className='w-2/3  hover:bg-slate-500 rounded p-2 mx-auto' src={css} alt="" /> </Link>
                    <Link to="/adminDashboard/jsCourseInput"> <img className='w-2/3  hover:bg-slate-500 rounded p-2 mx-auto' src={js} alt="" /> </Link>
                    <Link to="/adminDashboard/cplusCourseInput"> <img className='w-2/3  hover:bg-slate-500 rounded p-2 mx-auto' src={cPlus} alt="" /> </Link>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;