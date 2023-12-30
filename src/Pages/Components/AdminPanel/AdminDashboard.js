import React from 'react';
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = ({ activate }) => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <br />
                <h2 className="text-4xl flex justify-center font-bold text-primary">
                    Admin Panel
                </h2>
                <Outlet />
                <div className='text-center'>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden m-5 ">Open drawer</label>
                </div>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class={`menu p-4 overflow-y-auto w-80 ${activate ? 'bg-gray-700' : 'bg-base-200'}  text-base-content`}>

                    <li className={`font-bold ${activate && 'text-white'}`} ><Link to="/adminDashboard/makeAdmin">Make Admin from users</Link></li>
                    <li className={`font-bold ${activate && 'text-white'}`}><Link to="/adminDashboard/adminHome">Create Courses Sub-section</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default AdminDashboard;