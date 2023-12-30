import React from 'react';

const MyCourse = () => {
    return (
        <div className='w-[95%] mx-auto bg-green-200 rounded-xl divide-y-4 divide-slate-400'>
            <div className='flex justify-between px-10 h-16 items-center'>
                <h3 className="text-3xl font-semibold">My Courses</h3>
            </div>
            <div className='p-5'>
                <h4 className="text-2xl"><span className=''>Option</span>: Junior Level</h4>
                <div class="overflow-x-auto mt-5">
                    <table class="table w-full border bg-green-500 ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Enroll Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>HTML</td>
                                <td>12/08/2022</td>
                                <td>Enrolled</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>CSS</td>
                                <td>12/08/2022</td>
                                <td>Enrolled</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>JavaScript</td>
                                <td>12/08/2022</td>
                                <td>Enrolled</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <h3 className="text-2xl text-center py-3">Recommended Course for you</h3>
                    </div>
                    <table class="table w-full border border-slate-300">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Es6</td>
                                <td><button className='btn btn-outline btn-sm capitalize'>Buy Now</button></td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>React</td>
                                <td><button className='btn btn-outline btn-sm capitalize'>Buy Now</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCourse;