import React from 'react';

const IntroModify = () => {

    const introData = [
        {
            id: 1,
            topic: "Introduction",
            title1: "What is Html",
            title2: "",
            title3: "",
            title4: "",
            title5: "",
            description1: "* HTML stands for Hyper Text Markup Language.",
            description2: "* HTML describes the structure of a Web page",
            description3: "* HTML consists of a series of elements",
            description4: "* HTML elements tell the browser how to display the content",
            description5: "* HTML is the standard markup language for creating Web pages",
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
            example2: "",
            example3: "",
            example4: "",
            example5: "",
            example6: "",
            example7: "",
            example8: "",
            example9: "",
            example10: ""
        }
    ]



    const [dataIntro, setDataIntro] = React.useState({
        id: 1,
        topic: "Introduction",
        title1: "What is Html",
        title2: "",
        title3: "",
        title4: "",
        title5: "",
        description1: "* HTML stands for Hyper Text Markup Language.",
        description2: "* HTML describes the structure of a Web page",
        description3: "* HTML consists of a series of elements",
        description4: "* HTML elements tell the browser how to display the content",
        description5: "* HTML is the standard markup language for creating Web pages",
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
        example2: "",
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
        setDataIntro({ ...dataIntro, [e.target.name]: e.target.value });
    };
    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete HTML Image</p>
                <form action="">
                    {dataIntro.topic && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {dataIntro.topic && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {dataIntro.topic && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={dataIntro.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {dataIntro.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataIntro.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={dataIntro.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataIntro.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataIntro.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={dataIntro.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataIntro.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataIntro.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={dataIntro.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    <hr />



                    {dataIntro.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {dataIntro.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataIntro.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={dataIntro.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataIntro.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataIntro.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={dataIntro.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataIntro.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataIntro.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={dataIntro.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataIntro.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {dataIntro.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataIntro.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={dataIntro.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataIntro.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataIntro.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={dataIntro.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataIntro.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataIntro.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={dataIntro.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataIntro.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {dataIntro.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataIntro.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={dataIntro.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataIntro.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataIntro.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={dataIntro.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataIntro.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataIntro.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={dataIntro.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />


                    {dataIntro.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {dataIntro.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataIntro.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={dataIntro.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataIntro.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataIntro.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={dataIntro.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataIntro.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataIntro.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={dataIntro.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default IntroModify;