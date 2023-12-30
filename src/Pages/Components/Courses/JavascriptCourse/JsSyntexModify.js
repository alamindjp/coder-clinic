import React from 'react';

const JsSyntexModify = () => {

    // const jssSyntex = [
    //     {
    //         id: 2,
    //         topic: "JavaScript Syntax",
    //         title1: "",
    //         title2: "Strings",
    //         title3: "JavaScript Variables",
    //         title4: "JavaScript Operators",
    //         title5: "JavaScript Keywords",
    //         description1: "JavaScript syntax is the set of rules, how JavaScript programs are constructed",
    //         description2: "Strings are text, written within double or single quotes:",
    //         description3: "In a programming language, variables are used to store data values. JavaScript uses the keywords var, let and const to declare variables.An equal sign is used to assign values to variables.In this example, x is defined as a variable. Then, x is assigned (given) the value 6:",
    //         description4: "JavaScript uses arithmetic operators ( + - * / ) to compute values:",
    //         description5: "JavaScript keywords are used to identify actions to be performed.The let keyword tells the browser to create variables:",
    //         exampleTitle1: "Example: js Syntex",
    //         exampleTitle2: "Example: Strings",
    //         exampleTitle3: "Example: javascript Variable",
    //         exampleTitle4: "Example: Operators",
    //         exampleTitle5: "Example: keywords",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "// How to create variables:\nvar x;\nlet y;\n\n// How to use variables:\nx = 5;\ny = 6;\nlet z = x + y;",
    //         example2: "'John Doe'\n",
    //         example3: "let x;\n  x = 6;",
    //         example4: "(5 + 6) * 10",
    //         example5: "let x, y;\n\nx = 5 + 6;\ny = x * 10;",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     }
    // ]


    const [jsSyntex, setJsSyntex] = React.useState({
        id: 2,
        topic: "JavaScript Syntax",
        title1: "",
        title2: "Strings",
        title3: "JavaScript Variables",
        title4: "JavaScript Operators",
        title5: "JavaScript Keywords",
        description1: "JavaScript syntax is the set of rules, how JavaScript programs are constructed",
        description2: "Strings are text, written within double or single quotes:",
        description3: "In a programming language, variables are used to store data values. JavaScript uses the keywords var, let and const to declare variables.An equal sign is used to assign values to variables.In this example, x is defined as a variable. Then, x is assigned (given) the value 6:",
        description4: "JavaScript uses arithmetic operators ( + - * / ) to compute values:",
        description5: "JavaScript keywords are used to identify actions to be performed.The let keyword tells the browser to create variables:",
        exampleTitle1: "Example: js Syntex",
        exampleTitle2: "Example: Strings",
        exampleTitle3: "Example: javascript Variable",
        exampleTitle4: "Example: Operators",
        exampleTitle5: "Example: keywords",
        exampleTitle6: "",
        exampleTitle7: "",
        exampleTitle8: "",
        exampleTitle9: "",
        exampleTitle10: "",
        example1: "// How to create variables:\nvar x;\nlet y;\n\n// How to use variables:\nx = 5;\ny = 6;\nlet z = x + y;",
        example2: "'John Doe'\n",
        example3: "let x;\n  x = 6;",
        example4: "(5 + 6) * 10",
        example5: "let x, y;\n\nx = 5 + 6;\ny = x * 10;",
        example6: "",
        example7: "",
        example8: "",
        example9: "",
        example10: ""
    });


    const handleChange = (e) => {
        setJsSyntex({ ...jsSyntex, [e.target.name]: e.target.value });
    };
    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete Js Syntex</p>
                <form action="">
                    {jsSyntex.topic && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {jsSyntex.topic && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {jsSyntex.topic && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={jsSyntex.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {jsSyntex.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsSyntex.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={jsSyntex.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsSyntex.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsSyntex.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={jsSyntex.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsSyntex.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsSyntex.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={jsSyntex.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    {jsSyntex.title2 && <hr />}



                    {jsSyntex.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {jsSyntex.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsSyntex.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={jsSyntex.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsSyntex.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsSyntex.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={jsSyntex.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsSyntex.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsSyntex.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={jsSyntex.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsSyntex.title3 && <hr />}



                    {jsSyntex.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {jsSyntex.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsSyntex.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={jsSyntex.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsSyntex.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsSyntex.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={jsSyntex.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsSyntex.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsSyntex.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={jsSyntex.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsSyntex.title4 && <hr />}



                    {jsSyntex.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {jsSyntex.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsSyntex.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={jsSyntex.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsSyntex.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsSyntex.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={jsSyntex.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsSyntex.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsSyntex.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={jsSyntex.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsSyntex.title5 && <hr />}


                    {jsSyntex.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {jsSyntex.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsSyntex.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={jsSyntex.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsSyntex.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsSyntex.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={jsSyntex.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsSyntex.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsSyntex.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={jsSyntex.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default JsSyntexModify;