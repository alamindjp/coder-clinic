import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loader from '../SharedPage/Footer/Loader';
import { BiUserCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";
import { SiPicartodottv } from "react-icons/si";
import './UserDashboard.css'

const UserProfile = () => {
    const [user, loading] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    if (loading) {
        return <Loader />
    }

    return (

        <div className="drawer drawer-mobile h-[800px]">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {
                    user && <div className="flex justify-end mr-5">
                        <label tabIndex="1" className="p-2 lg:hidden" htmlFor="dashboard-sidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" /></svg></label>
                    </div>
                }
                {/* <!-- Page content here --> */}

                <Outlet />

            </div>
            <div className="drawer-side text-black w-[200px]">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto pt-10 bg-slate-400 user_nav">
                    {/* <!-- Sidebar content here --> */}
                    <li ><Link to="/dashboard" className='Link w-[200px]'><span className='text-2xl '><BiUserCircle /></span>My Profile</Link></li>
                    {user && <>
                        <li ><Link to="/dashboard/my_course" className='Link w-[200px]'><span className='text-xl '><SiPicartodottv /></span>My Course</Link></li>
                        <li ><Link to="/dashboard/add_review" className='Link w-[200px]'><span className='text-xl '><MdRateReview /></span>Add Reviews</Link></li>
                        <li ><Link to="#" onClick={logout} className='Link w-[200px]'><span className='text-xl '><BiLogOutCircle /></span>LogOut</Link></li>
                    </>}
                </ul>

            </div>
            </div>
    );
};

export default UserProfile;