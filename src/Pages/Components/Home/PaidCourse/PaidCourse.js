import React from 'react';
import { Link } from 'react-router-dom';
import right from "../../../../Assets/icons/right-tick.png";
import wrong from "../../../../Assets/icons/cross-mark (1).png";

const PaidCourse = () => {
  return (
    <div className=' py-10'>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-[90%] py-10'>
        <div class="card bg-white hover:bg-blue-200 duration-700 shadow-xl relative">
          <sup className='badge badge-success absolute right-2 top-0 p-3'>New</sup>
          <div class="card-body text-justify">
            <h1 class="tab text-3xl text-amber-900 font-semibold">
              $29
              <sup class="rounded-xl px-2 bg-lime-400 text-black text-lg">PRO</sup></h1>
            <p className=' mt-5'>Interested to learn new topic but not sure if you should dive in and invest right now? then give a short to our one month free trial and decide later.</p>
          </div>
          <ul className='grid grid-cols-1 pl-10'>
            <li className='inline-flex items-center'>
              <img src={right} className=" " alt='' />
              <p className="">One month Free Trial</p>
            </li>
            <li className='inline-flex items-center'>
              <img src={right} className=" " alt='' />
              <p className=" mt-2">15 Quiz per topic</p>
            </li>
            <li className='inline-flex items-center'>
              <img src={right} className=" " alt='' />
              <p className="">Browse Forum</p>
            </li>
            <li className='inline-flex  items-center'>
              <img src={wrong} alt='' />
              <p>Vote Solution</p>
            </li>
            <li className='inline-flex  items-center'>
              <img src={wrong} alt='' />
              <p>Suggest Courses</p>
            </li>
          </ul>
          <Link class="btn btn-sm font-bold my-10 w-[250px] mx-auto" to='/signUp'>Try it out</Link>
        </div>
        <div class="card bg-white hover:bg-purple-200 duration-700 shadow-xl relative">
          <sup className='badge badge-error absolute right-2 top-0 p-3'>New</sup>
          <div class="card-body text-justify">
            <h1 class="tab text-3xl text-amber-900 font-semibold">
              $39
              <sup class="rounded-xl px-2 bg-lime-400 text-black text-lg">PRO<sup className='text-lg pt-1'>+</sup></sup></h1>
            <p className='mt-5'>Satisfied with our pre-offered package and courses and want to get some more in a budget friendly package.our one month free trial and decide later.</p>
          </div>
          <ul className='grid grid-cols-1 pl-10'>
            <li className='inline-flex items-center'>
              <img src={right} className=" " alt='' />
              <p className="">One month Free Trial</p>
            </li>
            <li className='inline-flex items-center'>
              <img src={right} className=" " alt='' />
              <p className=" mt-2">15 Quiz per topic</p>
            </li>
            <li className='inline-flex items-center'>
              <img src={right} className=" " alt='' />
              <p className="">Browse Forum</p>
            </li>
            <li className='inline-flex  items-center'>
              <img src={right} alt='' />
              <p>Vote Solution</p>
            </li>
            <li className='inline-flex  items-center'>
              <img src={wrong} alt='' />
              <p>Suggest Courses</p>
            </li>
          </ul>
          <Link class="btn btn-sm font-bold my-10 w-[250px] mx-auto" to='/signUp'>Try it out</Link>
        </div>
        <div class="card bg-white hover:bg-green-200 duration-700 shadow-lg  relative">
          <sup className='badge badge-secondary absolute right-2 top-0 p-3'>New</sup>
          <div class="card-body text-justify">
            <h1 class="tab text-3xl text-amber-900 font-semibold">
              $49
              <sup class="rounded-xl px-2 bg-lime-400 text-black text-lg">ADVANCE</sup></h1>
            <p className='mt-5'>Want the most out from the courses according to your test ? Then the por pus plan is for you.our one month free trial and decide later.</p>
          </div>
          <ul className='grid grid-cols-1 pl-10'>
            <li className='inline-flex items-center'>
              <img src={right} className=" " alt='' />
              <p className="">One month Free Trial</p>
            </li>
            <li className='inline-flex items-center'>
              <img src={right} className=" " alt='' />
              <p className=" mt-2">15 Quiz per topic</p>
            </li>
            <li className='inline-flex items-center'>
              <img src={right} className=" " alt='' />
              <p className="">Browse Forum</p>
            </li>
            <li className='inline-flex  items-center'>
              <img src={right} alt='' />
              <p>Vote Solution</p>
            </li>
            <li className='inline-flex  items-center'>
              <img src={right} alt='' />
              <p>Suggest Courses</p>
            </li>
          </ul>
          <Link class="btn btn-sm font-bold my-10 w-[250px] mx-auto" to='/signUp'>Try it out</Link>
        </div>

      </div>
    </div>
  );
};

export default PaidCourse;