import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = ({ activate }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-6xl flex justify-center font-bold text-primary">
          Courses
        </h2>
        <Outlet />
        <div className='text-center'>
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden m-5 ">Open drawer</label>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className={`menu p-4 overflow-y-auto w-80 mb-5 mr-5 rounded ${activate ? 'text-gray-800' : 'bg-base-100'} text-base-content`}>
          {/* <!-- Sidebar content here --> */}
          <button className="btn btn-primary disabled"> <Link to="/courses">HTML Course</Link> </button>
          <li>
            <Link to="" className={`font-bold ${activate && 'text-white'}`}>
              Introduction
            </Link>
          </li>
          <li>
            <Link to="/courses/attribute" className={`font-bold ${activate && 'text-white'}`}>
              Attributes
            </Link>
          </li>
          <li>
            <Link to="/courses/htmlStyle" className={`font-bold ${activate && 'text-white'}`}>
              Html Style
            </Link>
          </li>

          <li>
            <Link to="/courses/htmlImage" className={`font-bold ${activate && 'text-white'}`}>
              Html Image
            </Link>
          </li>

          <li>
            <Link to="/courses/htmlCce" className={`font-bold ${activate && 'text-white'}`}>
              HTML Quotation & Citation
            </Link>
          </li>





        </ul>




      </div>
    </div>
  );
};

export default Courses;
