import React from 'react';

const JsVariablesModify = () => {

    // const jsVariabless = [
    //     {
    //         id: 2,
    //         topic: "Javascript Variables",
    //         title1: "4 way to decleare javascript variables:",
    //         title2: "What are Variables?",
    //         title3: "When to Use JavaScript var?",
    //         title4: "When to Use JavaScript const?",
    //         title5: "JavaScript Data Types",
    //         description1: "using var, let, const and using nothing",
    //         description2: "Variables are containers for storing data (storing data values). In this example, x, y, and z, a, b and c, d, e and f are variables, declared with the var, let and const keyword:",
    //         description3: "Always declare JavaScript variables with var,let, or const.The var keyword is used in all JavaScript code from 1995 to 2015. The let and const keywords were added to JavaScript in 2015.If you want your code to run in older browser, you must use var.",
    //         description4: "If you want a general rule: always declare variables with const.If you think the value of the variable can change, use let.In this example, price1, price2, and total, are variables:",
    //         description5: "JavaScript variables can hold numbers like 100 and text values like 'John Doe'.In programming, text values are called text strings.JavaScript can handle many types of data, but for now, just think of numbers and strings.Strings are written inside double or single quotes. Numbers are written without quotes.If you put a number in quotes, it will be treated as a text string.",
    //         exampleTitle1: "",
    //         exampleTitle2: " Example: Variables",
    //         exampleTitle3: "",
    //         exampleTitle4: "Example: when to use const and let",
    //         exampleTitle5: "Example: Data type",
    //         exampleTitle6: "",
    //         exampleTitle7: "",
    //         exampleTitle8: "",
    //         exampleTitle9: "",
    //         exampleTitle10: "",
    //         example1: "",
    //         example2: "// variables: var,\n\nvar x = 5;\nvar y = 6;\nvar z = x + y;\n\n// variables: let,\nlet a = 3;\nlet b = 4;\nlet c = a + b;\n\n//variables: const\nConst d = 10;\nconst e = 12;\nconst f = d + e;",
    //         example3: "",
    //         example4: "const price1 = 5;\nconst price2 = 6;\nlet total = price1 + price2;",
    //         example5: "const pi = 3.14;\nlet person = 'John Doe';\nlet answer = 'Yes I am!';",
    //         example6: "",
    //         example7: "",
    //         example8: "",
    //         example9: "",
    //         example10: ""
    //     }
    // ]


    const [jsVariables, setJsVariables] = React.useState({
        id: 2,
        topic: "Javascript Variables",
        title1: "4 way to decleare javascript variables:",
        title2: "What are Variables?",
        title3: "When to Use JavaScript var?",
        title4: "When to Use JavaScript const?",
        title5: "JavaScript Data Types",
        description1: "using var, let, const and using nothing",
        description2: "Variables are containers for storing data (storing data values). In this example, x, y, and z, a, b and c, d, e and f are variables, declared with the var, let and const keyword:",
        description3: "Always declare JavaScript variables with var,let, or const.The var keyword is used in all JavaScript code from 1995 to 2015. The let and const keywords were added to JavaScript in 2015.If you want your code to run in older browser, you must use var.",
        description4: "If you want a general rule: always declare variables with const.If you think the value of the variable can change, use let.In this example, price1, price2, and total, are variables:",
        description5: "JavaScript variables can hold numbers like 100 and text values like 'John Doe'.In programming, text values are called text strings.JavaScript can handle many types of data, but for now, just think of numbers and strings.Strings are written inside double or single quotes. Numbers are written without quotes.If you put a number in quotes, it will be treated as a text string.",
        exampleTitle1: "",
        exampleTitle2: " Example: Variables",
        exampleTitle3: "",
        exampleTitle4: "Example: when to use const and let",
        exampleTitle5: "Example: Data type",
        exampleTitle6: "",
        exampleTitle7: "",
        exampleTitle8: "",
        exampleTitle9: "",
        exampleTitle10: "",
        example1: "",
        example2: "// variables: var,\n\nvar x = 5;\nvar y = 6;\nvar z = x + y;\n\n// variables: let,\nlet a = 3;\nlet b = 4;\nlet c = a + b;\n\n//variables: const\nConst d = 10;\nconst e = 12;\nconst f = d + e;",
        example3: "",
        example4: "const price1 = 5;\nconst price2 = 6;\nlet total = price1 + price2;",
        example5: "const pi = 3.14;\nlet person = 'John Doe';\nlet answer = 'Yes I am!';",
        example6: "",
        example7: "",
        example8: "",
        example9: "",
        example10: ""
    });


    const handleChange = (e) => {
        setJsVariables({ ...jsVariables, [e.target.name]: e.target.value });
    };
    return (
        <div>


            <div className='p-5'>
                <p className='text-2xl font-bold text-green-500 text-center'>Modify & Delete Js Variables</p>
                <form action="">
                    {jsVariables.topic && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}

                    {jsVariables.topic && <label className="label">
                        <span className="label-text font-bold">Sub-Section Topic:</span>
                    </label>}

                    {jsVariables.topic && <div className='hoverVisible flex'>
                        <input type="text" name='topic' value={jsVariables.topic} onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>
                    }
                    {jsVariables.title1 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsVariables.title1 && <div className='hoverVisible flex'>
                        <input type="text" name='title1' onChange={handleChange} value={jsVariables.title1} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsVariables.description1 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsVariables.description1 && <div className='hoverVisible flex'>
                        <textarea name='description1' onChange={handleChange} value={jsVariables.description1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsVariables.example1 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsVariables.example1 && <div className='hoverVisible flex'>
                        <textarea name='example1' onChange={handleChange} value={jsVariables.example1} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    <br /><br /><br />
                    {jsVariables.title2 && <hr />}



                    {jsVariables.title2 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>2</p>}

                    {jsVariables.title2 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsVariables.title2 && <div className='hoverVisible flex'>
                        <input type="text" name='title2' onChange={handleChange} value={jsVariables.title2} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsVariables.description2 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsVariables.description2 && <div className='hoverVisible flex'>
                        <textarea name='description2' onChange={handleChange} value={jsVariables.description2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsVariables.example2 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsVariables.example2 && <div className='hoverVisible flex'>
                        <textarea name='example2' onChange={handleChange} value={jsVariables.example2} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsVariables.title3 && <hr />}



                    {jsVariables.title3 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>3</p>}

                    {jsVariables.title3 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsVariables.title3 && <div className='hoverVisible flex'>
                        <input type="text" name='title3' onChange={handleChange} value={jsVariables.title3} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsVariables.description3 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsVariables.description3 && <div className='hoverVisible flex'>
                        <textarea name='description3' onChange={handleChange} value={jsVariables.description3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsVariables.example3 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsVariables.example3 && <div className='hoverVisible flex'>
                        <textarea name='example3' onChange={handleChange} value={jsVariables.example3} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsVariables.title4 && <hr />}



                    {jsVariables.title4 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>4</p>}

                    {jsVariables.title4 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsVariables.title4 && <div className='hoverVisible flex'>
                        <input type="text" name='title4' onChange={handleChange} value={jsVariables.title4} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsVariables.description4 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsVariables.description4 && <div className='hoverVisible flex'>
                        <textarea name='description4' onChange={handleChange} value={jsVariables.description4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsVariables.example4 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsVariables.example4 && <div className='hoverVisible flex'>
                        <textarea name='example4' onChange={handleChange} value={jsVariables.example4} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    {jsVariables.title5 && <hr />}


                    {jsVariables.title5 && <p className='font-bold mt-10  bg-gray-300 p-2 rounded'>5</p>}

                    {jsVariables.title5 && <label class="label">
                        <span className="label-text font-bold">Title:</span>
                    </label>}

                    {jsVariables.title5 && <div className='hoverVisible flex'>
                        <input type="text" name='title5' onChange={handleChange} value={jsVariables.title5} className="input input-bordered input-primary w-full max-w-xs" />

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />

                    </div>}

                    {jsVariables.description5 && <label className="label">
                        <span className="label-text font-bold">Description:</span>
                    </label>}

                    {jsVariables.description5 && <div className='hoverVisible flex'>
                        <textarea name='description5' onChange={handleChange} value={jsVariables.description5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}

                    {jsVariables.example5 && <label className="label font-bold">
                        <span className="label-text">Example:</span>
                    </label>}

                    {jsVariables.example5 && <div className='hoverVisible flex'>
                        <textarea name='example5' onChange={handleChange} value={jsVariables.example5} className="textarea textarea-primary w-2/3" ></textarea>

                        <input className='btn btn-primary ml-10  text-white hoverButton  ' type="submit" value="Update" />
                    </div>}
                    <br /><br /><br />
                    <hr />



                </form>


            </div>

        </div>
    );
};

export default JsVariablesModify;