import React from 'react';

const JavascriptCourseModify = () => {

    // const jsIntro = [
    //     {
    //       id: 2,
    //       topic: "Introduction",
    //       title1: "What is Javascript?",
    //       title2: "",
    //       title3: "",
    //       title4: "",
    //       title5: "JavaScript Can Change HTML Content",
    //       description1: "JavaScript is the world's most popular programming language.",
    //       description2: "JavaScript is the programming language of the Web.",
    //       description3: "JavaScript is easy to learn.",
    //       description4: "This tutorial will teach you JavaScript from basic to advanced.",
    //       description5: "One of many JavaScript HTML methods is getElementById().The example below 'finds' an HTML element (with id='demo'), and changes the element content (innerHTML) to 'Hello JavaScript':",
    //       exampleTitle1: "Example:",
    //       exampleTitle2: "",
    //       exampleTitle3: "",
    //       exampleTitle4: "",
    //       exampleTitle5: "",
    //       exampleTitle6: "",
    //       exampleTitle7: "",
    //       exampleTitle8: "",
    //       exampleTitle9: "",
    //       exampleTitle10: "",
    //       example1: "document.getElementById('demo').innerHTML = 'Hello JavaScript';",
    //       example2: "",
    //       example3: "",
    //       example4: "",
    //       example5: "",
    //       example6: "",
    //       example7: "",
    //       example8: "",
    //       example9: "",
    //       example10: ""
    //     }
    //   ]

    const [dataJs, setDataJs] = React.useState({
        id: 2,
        topic: "Introduction",
        title1: "What is Javascript?",
        title2: "JavaScript Can Change HTML Content",
        title3: "",
        title4: "",
        title5: "",
        description1: "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced.One of many JavaScript HTML methods is getElementById().The example below 'finds' an HTML element (with id='demo'), and changes the element content (innerHTML) to 'Hello JavaScript':",
        description2: "",
        description3: "",
        description4: "",
        description5: "",
        exampleTitle1: "",
        exampleTitle2: "",
        exampleTitle3: "",
        exampleTitle4: "",
        exampleTitle5: "",
        exampleTitle6: "",
        exampleTitle7: "",
        exampleTitle8: "",
        exampleTitle9: "",
        exampleTitle10: "",
        example1: "",
        example2: "document.getElementById('demo').innerHTML = 'Hello JavaScript';",
        example3: "",
        example4: "",
        example5: "",
        example6: "",
        example7: "",
        example8: "",
        example9: "",
        example10: ""
    });


    const handleChange = (e) => {
        setDataJs({ ...dataJs, [e.target.name]: e.target.value });
    };
    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete Js Introduction</p>
                <form action="">
                    {dataJs.topic && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {dataJs.topic && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {dataJs.topic && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={dataJs.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {dataJs.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataJs.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={dataJs.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataJs.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataJs.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={dataJs.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataJs.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataJs.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={dataJs.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    {dataJs.title2 && <hr />}



                    {dataJs.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {dataJs.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataJs.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={dataJs.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataJs.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataJs.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={dataJs.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataJs.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataJs.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={dataJs.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {dataJs.title3 && <hr />}



                    {dataJs.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {dataJs.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataJs.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={dataJs.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataJs.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataJs.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={dataJs.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataJs.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataJs.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={dataJs.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {dataJs.title4 && <hr />}



                    {dataJs.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {dataJs.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataJs.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={dataJs.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataJs.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataJs.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={dataJs.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataJs.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataJs.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={dataJs.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {dataJs.title5 && <hr />}


                    {dataJs.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {dataJs.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataJs.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={dataJs.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataJs.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataJs.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={dataJs.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataJs.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataJs.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={dataJs.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default JavascriptCourseModify;