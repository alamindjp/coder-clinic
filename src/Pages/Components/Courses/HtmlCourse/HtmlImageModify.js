import React from 'react';

const HtmlImageModify = () => {

    // const dataaImage = [
    //     {
    //         id: 4,
    //         topic: "HTML Images",
    //         title1: "",
    //         title2: "HTML Images Syntax",
    //         title3: "The src Attribute",
    //         title4: "Image Size - Width and Height",
    //         title5: "Images in Another Folder",
    //         description1: "Images can improve the design and the appearance of a web page.",
    //         description2: "The <img> tag is empty, it contains attributes only, and does not have a closing tag.",
    //         description3: "The required src attribute specifies the path (URL) to the image.",
    //         description4: "You can use the style attribute to specify the width and height of an image.",
    //         description5: "If you have your images in a sub-folder, you must include the folder name in the src attribute:",
    //         exampleTitle1: "Example: HTML Images",
    //         exampleTitle2: "Example: HTML Images Syntax",
    //         exampleTitle3: "Example: The src Attributes",
    //         exampleTitle4: "Example: Image size - width and height",
    //         exampleTitle5: "Example: Image in another folder",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "<img src='pic_trulli.jpg' alt='Italian Trulli'>",
    //         example2: "<img src='url' alt='alternatetext'>",
    //         example3: "<img src='img_chania.jpg' alt='Flowers in Chania'>",
    //         example4: "<img src='img_girl.jpg' alt='Girl in a jacket' style='width:500px;height:600px;'>",
    //         example5: "<img src='/images/html5.gif' alt='HTML5 Icon' style='width:128px;height:128px;'>",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     },
    // ]



    const [dataImage, setDataImage] = React.useState({
        id: 4,
        topic: "HTML Images",
        title1: "",
        title2: "HTML Images Syntax",
        title3: "The src Attribute",
        title4: "Image Size - Width and Height",
        title5: "Images in Another Folder",
        description1: "Images can improve the design and the appearance of a web page.",
        description2: "The <img> tag is empty, it contains attributes only, and does not have a closing tag.",
        description3: "The required src attribute specifies the path (URL) to the image.",
        description4: "You can use the style attribute to specify the width and height of an image.",
        description5: "If you have your images in a sub-folder, you must include the folder name in the src attribute:",
        exampleTitle1: "Example: HTML Images",
        exampleTitle2: "Example: HTML Images Syntax",
        exampleTitle3: "Example: The src Attributes",
        exampleTitle4: "Example: Image size - width and height",
        exampleTitle5: "Example: Image in another folder",
        exampleTitle6: "",
        exampleTitle7: "",
        exampleTitle8: "",
        exampleTitle9: "",
        exampleTitle10: "",
        example1: "<img src='pic_trulli.jpg' alt='Italian Trulli'>",
        example2: "<img src='url' alt='alternatetext'>",
        example3: "<img src='img_chania.jpg' alt='Flowers in Chania'>",
        example4: "<img src='img_girl.jpg' alt='Girl in a jacket' style='width:500px;height:600px;'>",
        example5: "<img src='/images/html5.gif' alt='HTML5 Icon' style='width:128px;height:128px;'>",
        example6: "",
        example7: "",
        example8: "",
        example9: "",
        example10: ""
    });


    const handleChange = (e) => {
        setDataImage({ ...dataImage, [e.target.name]: e.target.value });
    };
    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete HTML Image</p>
                <form action="">
                    {dataImage.topic && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {dataImage.topic && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {dataImage.topic && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={dataImage.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {dataImage.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataImage.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={dataImage.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataImage.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataImage.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={dataImage.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataImage.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataImage.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={dataImage.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    <hr />



                    {dataImage.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {dataImage.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataImage.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={dataImage.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataImage.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataImage.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={dataImage.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataImage.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataImage.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={dataImage.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataImage.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {dataImage.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataImage.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={dataImage.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataImage.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataImage.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={dataImage.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataImage.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataImage.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={dataImage.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataImage.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {dataImage.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataImage.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={dataImage.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataImage.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataImage.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={dataImage.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataImage.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataImage.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={dataImage.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />


                    {dataImage.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {dataImage.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataImage.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={dataImage.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataImage.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataImage.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={dataImage.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataImage.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataImage.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={dataImage.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default HtmlImageModify;