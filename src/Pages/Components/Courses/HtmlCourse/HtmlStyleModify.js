import React from 'react';

const HtmlStyleModify = () => {

    // const dataaStyle = [
    //     {
    //         id: 3,
    //         topic: "HTML Styles",
    //         title1: "Background Color",
    //         title2: "Text Color",
    //         title3: "Fonts",
    //         title4: "Text Size",
    //         title5: "",
    //         description1: "The HTML style attribute is used to add styles to an element, such as color, font, size, and more.",
    //         description2: "The CSS color property defines the text color for an HTML element:",
    //         description3: "The CSS font-family property defines the font to be used for an HTML element:",
    //         description4: "The CSS font-size property defines the text size for an HTML element:",
    //         description5: "",
    //         exampleTitle1: "Example: Background Color",
    //         exampleTitle2: "Example: Text Color",
    //         exampleTitle3: "Example: Fonts",
    //         exampleTitle4: "Example: Text Size",
    //         exampleTitle5: "",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "<p style='background-color:powderblue'></p>",
    //         example2: "<h1 style='color:blue;'>This is a heading</h1>",
    //         example3: "<p style='font-family:courier'>This is a paragraph.</p>",
    //         example4: "<h1 style='font-size:300%;'>This is a heading</h1>",
    //         example5: "",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     },
    // ]


    const [dataStyle, setDataStyle] = React.useState({
        id: 3,
        topic: "HTML Styles",
        title1: "Background Color",
        title2: "Text Color",
        title3: "Fonts",
        title4: "Text Size",
        title5: "",
        description1: "The HTML style attribute is used to add styles to an element, such as color, font, size, and more.",
        description2: "The CSS color property defines the text color for an HTML element:",
        description3: "The CSS font-family property defines the font to be used for an HTML element:",
        description4: "The CSS font-size property defines the text size for an HTML element:",
        description5: "",
        exampleTitle1: "Example: Background Color",
        exampleTitle2: "Example: Text Color",
        exampleTitle3: "Example: Fonts",
        exampleTitle4: "Example: Text Size",
        exampleTitle5: "",
        exampleTitle6: "",
        exampleTitle7: "",
        exampleTitle8: "",
        exampleTitle9: "",
        exampleTitle10: "",
        example1: "<p style='background-color:powderblue'></p>",
        example2: "<h1 style='color:blue;'>This is a heading</h1>",
        example3: "<p style='font-family:courier'>This is a paragraph.</p>",
        example4: "<h1 style='font-size:300%;'>This is a heading</h1>",
        example5: "",
        example6: "",
        example7: "",
        example8: "",
        example9: "",
        example10: ""
    });


    const handleChange = (e) => {
        setDataStyle({ ...dataStyle, [e.target.name]: e.target.value });
    };


    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete HTML Style</p>
                <form action="">
                    {dataStyle.title1 && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {dataStyle.title1 && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {dataStyle.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={dataStyle.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {dataStyle.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataStyle.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={dataStyle.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataStyle.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataStyle.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={dataStyle.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataStyle.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataStyle.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={dataStyle.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    <hr />



                    {dataStyle.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {dataStyle.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataStyle.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={dataStyle.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataStyle.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataStyle.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={dataStyle.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataStyle.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataStyle.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={dataStyle.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataStyle.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {dataStyle.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataStyle.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={dataStyle.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataStyle.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataStyle.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={dataStyle.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataStyle.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataStyle.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={dataStyle.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                    {dataStyle.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {dataStyle.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataStyle.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={dataStyle.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataStyle.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataStyle.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={dataStyle.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataStyle.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataStyle.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={dataStyle.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />


                    {dataStyle.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {dataStyle.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {dataStyle.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={dataStyle.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {dataStyle.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {dataStyle.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={dataStyle.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {dataStyle.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {dataStyle.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={dataStyle.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default HtmlStyleModify;