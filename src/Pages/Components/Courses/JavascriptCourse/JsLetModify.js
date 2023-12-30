import React from 'react';

const JsLetModify = () => {

    const jsLets = [
        {
            id: 2,
            topic: "Javascript Let",
            title1: "",
            title2: "Cannot be Redeclared",
            title3: "Block Scope",
            title4: "Redeclearing",
            title5: "Let Hoisting",
            description1: "The let keyword was introduced in ES6 (2015).Variables defined with let cannot be Redeclared.Variables defined with let must be Declared before use.Variables defined with let have Block Scope.",
            description2: "Variables defined with let cannot be redeclared. You cannot accidentally redeclare a variable.With let you can not do this:",
            description3: "Before ES6 (2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const.These two keywords provide Block Scope in JavaScript.Variables declared inside a { } block cannot be accessed from outside the block:",
            description4: "Redeclaring a JavaScript variable with var is allowed anywhere in a program, With let, redeclaring a variable in the same block is NOT allowed:",
            description5: "Variables defined with var are hoisted to the top and can be initialized at any time.Meaning: You can use the variable before it is declared:",
            exampleTitle1: "",
            exampleTitle2: "Example: can not be redeclared",
            exampleTitle3: "Example: Block scope",
            exampleTitle4: "Example: Redeclearing",
            exampleTitle5: "Example: let hoisting",
            exampleTitle6: "",
            exampleTitle7: "",
            exampleTitle8: "",
            exampleTitle9: "",
            exampleTitle10: "",
            example1: "",
            example2: "//with let, you can not do this\n\nx = 'John Doe';\nlet x = 0;\n\n// SyntaxError: 'x' has already been declared\n\n//nwith var, you can do this\n\nvar x = 'John Doe;\nvar x = 0;",
            example3: "\n{\nlet x = 2;\n}\n\n//x can not be used here",
            example4: "\nvar x = 2;    // Allowed\nlet x = 3;    // Not allowed\n\n{\nlet x = 2;    // Allowed\nlet x = 3     // Not allowed\n}\n\n{\nlet x = 2;    // Allowed\nvar x = 3     // Not allowed\n}",
            example5: "\ncarName = 'Volvo';\nvar carName;",
            example6: "",
            example7: "",
            example8: "",
            example9: "",
            example10: ""
        }
    ]


    const [jsLet, setJsLet] = React.useState({
        id: 2,
        topic: "Javascript Let",
        title1: "",
        title2: "Cannot be Redeclared",
        title3: "Block Scope",
        title4: "Redeclearing",
        title5: "Let Hoisting",
        description1: "The let keyword was introduced in ES6 (2015).Variables defined with let cannot be Redeclared.Variables defined with let must be Declared before use.Variables defined with let have Block Scope.",
        description2: "Variables defined with let cannot be redeclared. You cannot accidentally redeclare a variable.With let you can not do this:",
        description3: "Before ES6 (2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const.These two keywords provide Block Scope in JavaScript.Variables declared inside a { } block cannot be accessed from outside the block:",
        description4: "Redeclaring a JavaScript variable with var is allowed anywhere in a program, With let, redeclaring a variable in the same block is NOT allowed:",
        description5: "Variables defined with var are hoisted to the top and can be initialized at any time.Meaning: You can use the variable before it is declared:",
        exampleTitle1: "",
        exampleTitle2: "Example: can not be redeclared",
        exampleTitle3: "Example: Block scope",
        exampleTitle4: "Example: Redeclearing",
        exampleTitle5: "Example: let hoisting",
        exampleTitle6: "",
        exampleTitle7: "",
        exampleTitle8: "",
        exampleTitle9: "",
        exampleTitle10: "",
        example1: "",
        example2: "//with let, you can not do this\n\nx = 'John Doe';\nlet x = 0;\n\n// SyntaxError: 'x' has already been declared\n\n//nwith var, you can do this\n\nvar x = 'John Doe;\nvar x = 0;",
        example3: "\n{\nlet x = 2;\n}\n\n//x can not be used here",
        example4: "\nvar x = 2;    // Allowed\nlet x = 3;    // Not allowed\n\n{\nlet x = 2;    // Allowed\nlet x = 3     // Not allowed\n}\n\n{\nlet x = 2;    // Allowed\nvar x = 3     // Not allowed\n}",
        example5: "\ncarName = 'Volvo';\nvar carName;",
        example6: "",
        example7: "",
        example8: "",
        example9: "",
        example10: ""
    });


    const handleChange = (e) => {
        setJsLet({ ...jsLet, [e.target.name]: e.target.value });
    };
    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete Js Let</p>
                <form action="">
                    {jsLet.topic && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {jsLet.topic && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {jsLet.topic && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={jsLet.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {jsLet.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsLet.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={jsLet.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsLet.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsLet.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={jsLet.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsLet.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsLet.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={jsLet.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    {jsLet.title2 && <hr />}



                    {jsLet.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {jsLet.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsLet.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={jsLet.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsLet.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsLet.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={jsLet.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsLet.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsLet.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={jsLet.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsLet.title3 && <hr />}



                    {jsLet.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {jsLet.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsLet.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={jsLet.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsLet.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsLet.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={jsLet.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsLet.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsLet.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={jsLet.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsLet.title4 && <hr />}



                    {jsLet.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {jsLet.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsLet.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={jsLet.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsLet.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsLet.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={jsLet.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsLet.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsLet.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={jsLet.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsLet.title5 && <hr />}


                    {jsLet.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {jsLet.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsLet.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={jsLet.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsLet.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsLet.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={jsLet.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsLet.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsLet.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={jsLet.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default JsLetModify;