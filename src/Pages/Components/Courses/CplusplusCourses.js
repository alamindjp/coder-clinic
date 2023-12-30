import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CssCourses = () => {
    return (
        <div>
            <div class="drawer drawer-mobile z-10">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">

                    <h2 className="text-6xl flex justify-center font-bold text-primary">
                        Courses
                    </h2>
                    <Outlet></Outlet>
                    <div className='text-center'>
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden m-5 ">Open Slider</label>
                    </div>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>

                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <button className="btn btn-primary"> <Link to="/cplusPlusCourses">CSS Course</Link> </button>



                        <li>
                            <Link to="/cplusPlusCourses" className="font-bold">
                                Introduction
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="font-bold">
                                CSS Syntex
                            </Link>
                        </li>
                        <li>
                            <Link to="" className="font-bold">
                                CSS Advance
                            </Link>
                        </li>

                        <li>
                            <Link to="" className="font-bold">
                                CSS Grid
                            </Link>
                        </li>

                        <li>
                            <Link to="" className="font-bold">
                                CSS Responsive
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default CssCourses;