import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const JsCourses = () => {
    return (
        <div>
            <div class="drawer drawer-mobile z-10 bg-green-200">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">

                    <h2 className="text-6xl flex justify-center font-bold text-green-500">
                        Courses
                    </h2>
                    <Outlet></Outlet>

                    <div className='text-center'>
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden m-5 ">Open drawer</label>
                    </div>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>

                    <ul class="menu p-4 overflow-y-auto w-80 bg-green-200 text-white shadow-sm shadow-white">
                        {/* Sidebar Content */}
                        <button className="p-4 rounded-md bg-green-500 disabled"> <Link to="/jsCourses">Javascript Tutorial</Link> </button>



                        <li>
                            <Link to="/jsCourses" className="font-bold hover:bg-slate-200 hover:text-black">
                                Introduction
                            </Link>
                        </li>
                        <li>
                            <Link to="/jsCourses/jsSyntex" className="font-bold hover:bg-slate-200 hover:text-black">
                                js Syntex
                            </Link>
                        </li>
                        <li>
                            <Link to="/jsCourses/jsVariables" className="font-bold hover:text-black hover:bg-slate-200">
                                js Variables
                            </Link>
                        </li>

                        <li>
                            <Link to="/jsCourses/jsLet" className="font-bold hover:text-black hover:bg-slate-200">
                                js Let
                            </Link>
                        </li>

                        <li>
                            <Link to="/jsCourses/jsConst" className="font-bold hover:text-black hover:bg-slate-200">
                                js const
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default JsCourses;