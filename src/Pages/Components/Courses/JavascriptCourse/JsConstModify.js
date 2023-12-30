import React from 'react';

const JsConstModify = () => {


    // const jsConsts = [
    //     {
    //         id: 2,
    //         topic: "JavaScript Const",
    //         title1: "",
    //         title2: "Cannot be Reassigned",
    //         title3: "Must be Assigned",
    //         title4: "Constant Arrays",
    //         title5: "",
    //         description1: "The const keyword was introduced in ES6 (2015).Variables defined with const cannot be Redeclared.Variables defined with const cannot be Reassigned.Variables defined with const have Block Scope.",
    //         description2: "A const variable cannot be reassigned:",
    //         description3: "JavaScript const variables must be assigned a value when they are declared:",
    //         description4: "You can change the elements of a constant array",
    //         description5: "you can NOT reassign the array",
    //         exampleTitle1: "",
    //         exampleTitle2: "Example: cannot re-assign",
    //         exampleTitle3: "Example: must be assigned",
    //         exampleTitle4: "Example: constant arrays",
    //         exampleTitle5: "Example: cannot reassign array",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "",
    //         example2: "\nconst PI = 3.141592653589793;\nPI = 3.14;      // This will give an error\nPI = PI + 10;   // This will also give an error",
    //         example3: "\n//Correct\n\nconst PI = 3.14159265359;\n\n//Incorrect\n\nconst PI;\nPI = 3.14159265359;",
    //         example4: "\n// You can create a constant array:\nconst cars = ['Saab', 'Volvo', 'BMW'];\n\n// You can change an element:\ncars[0] = 'Toyota';\n\n// You can add an element:\ncars.push('Audi');",
    //         example5: "\nconst cars = ['Saab', 'Volvo', 'BMW'];\n\ncars = ['Toyota', 'Volvo', 'Audi'];    // ERROR",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     }
    // ]


    const [jsConst, setJsConst] = React.useState({
        id: 2,
        topic: "JavaScript Const",
        title1: "",
        title2: "Cannot be Reassigned",
        title3: "Must be Assigned",
        title4: "Constant Arrays",
        title5: "",
        description1: "The const keyword was introduced in ES6 (2015).Variables defined with const cannot be Redeclared.Variables defined with const cannot be Reassigned.Variables defined with const have Block Scope.",
        description2: "A const variable cannot be reassigned:",
        description3: "JavaScript const variables must be assigned a value when they are declared:",
        description4: "You can change the elements of a constant array",
        description5: "you can NOT reassign the array",
        exampleTitle1: "",
        exampleTitle2: "Example: cannot re-assign",
        exampleTitle3: "Example: must be assigned",
        exampleTitle4: "Example: constant arrays",
        exampleTitle5: "Example: cannot reassign array",
        exampleTitle6: "",
        exampleTitle7: "",
        exampleTitle8: "",
        exampleTitle9: "",
        exampleTitle10: "",
        example1: "",
        example2: "\nconst PI = 3.141592653589793;\nPI = 3.14;      // This will give an error\nPI = PI + 10;   // This will also give an error",
        example3: "\n//Correct\n\nconst PI = 3.14159265359;\n\n//Incorrect\n\nconst PI;\nPI = 3.14159265359;",
        example4: "\n// You can create a constant array:\nconst cars = ['Saab', 'Volvo', 'BMW'];\n\n// You can change an element:\ncars[0] = 'Toyota';\n\n// You can add an element:\ncars.push('Audi');",
        example5: "\nconst cars = ['Saab', 'Volvo', 'BMW'];\n\ncars = ['Toyota', 'Volvo', 'Audi'];    // ERROR",
        example6: "",
        example7: "",
        example8: "",
        example9: "",
        example10: ""
    });


    const handleChange = (e) => {
        setJsConst({ ...jsConst, [e.target.name]: e.target.value });
    };
    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete Js Const</p>
                <form action="">
                    {jsConst.topic && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {jsConst.topic && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {jsConst.topic && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={jsConst.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {jsConst.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsConst.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={jsConst.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsConst.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsConst.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={jsConst.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsConst.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsConst.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={jsConst.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    {jsConst.title2 && <hr />}



                    {jsConst.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {jsConst.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsConst.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={jsConst.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsConst.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsConst.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={jsConst.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsConst.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsConst.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={jsConst.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsConst.title3 && <hr />}



                    {jsConst.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {jsConst.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsConst.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={jsConst.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsConst.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsConst.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={jsConst.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsConst.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsConst.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={jsConst.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsConst.title4 && <hr />}



                    {jsConst.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {jsConst.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsConst.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={jsConst.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsConst.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsConst.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={jsConst.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsConst.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsConst.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={jsConst.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsConst.title5 && <hr />}


                    {jsConst.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {jsConst.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsConst.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={jsConst.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsConst.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsConst.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={jsConst.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsConst.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsConst.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={jsConst.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default JsConstModify;