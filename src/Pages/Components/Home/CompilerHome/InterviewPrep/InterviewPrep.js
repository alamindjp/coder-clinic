import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const InterviewPrep = () => {
    return (
        <div className="drawer drawer-mobile bg-green-200">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className="text-6xl flex justify-center font-bold text-green-500">
                    Interview Preparation
                </h2>
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn bg- drawer-button lg:hidden"
                >
                    Open Side Bar
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 overflow-y-auto w-80 text-black bg-green-200 shadow-sm shadow-white">
                    {/* <!-- Sidebar content here --> */}
                    <button className="p-4 rounded-md bg-green-500 text-black disabled">Technologies</button>
                    <li>
                        <Link to="/interview-prep/javascript" className="font-boldhover:bg-slate-200">
                            Javascript
                        </Link>
                    </li>
                    <li>
                        <Link to="/interview-prep/html" className="font-boldhover:bg-slate-200">
                            HTML
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="font-boldhover:bg-slate-200">
                            CSS
                        </Link>
                    </li>

                    <li>
                        <Link to="" className="font-boldhover:bg-slate-200">
                            React
                        </Link>
                    </li>

                    <li>
                        <Link to="" className="font-boldhover:bg-slate-200">
                            Node.JS
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="font-boldhover:bg-slate-200">
                            Redux
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="font-boldhover:bg-slate-200">
                            MongoDB
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default InterviewPrep;